// server/routes/report.js
const express = require('express');
const router = express.Router();
const Scenario = require('../models/Scenario');
const Lead = require('../models/Lead');

router.post('/generate', async (req, res) => {
  try {
    const { scenario_id, email } = req.body;
    if (!scenario_id || !email) return res.status(400).json({ error: 'scenario_id and email required' });

    const scenario = await Scenario.findById(scenario_id).lean();
    if (!scenario) return res.status(404).json({ error: 'scenario not found' });

    await Lead.create({ email, scenario_id });

    const html = `
      <!doctype html>
      <html>
      <head><meta charset="utf-8"><title>ROI Report — ${scenario.name}</title>
      <style>
        body{font-family:Arial,Helvetica,sans-serif;padding:24px}
        .card{border:1px solid #eaeaea;padding:18px;border-radius:8px}
        pre{background:#fafafa;padding:12px;border-radius:6px}
      </style>
      </head>
      <body>
        <div class="card">
          <h1>ROI Report — ${scenario.name}</h1>
          <h3>Inputs</h3>
          <pre>${JSON.stringify(scenario.inputs, null, 2)}</pre>
          <h3>Results</h3>
          <pre>${JSON.stringify(scenario.results, null, 2)}</pre>
          <p>Requested by: ${email} — ${new Date().toLocaleString()}</p>
        </div>
      </body>
      </html>
    `;
    res.setHeader('Content-Type', 'text/html');
    res.send(html);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'report generation failed' });
  }
});

module.exports = router;
