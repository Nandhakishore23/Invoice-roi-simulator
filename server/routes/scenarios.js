// // server/routes/scenarios.js
// const express = require('express');
// const router = express.Router();
// const Scenario = require('../models/Scenario');

// // POST save
// router.post('/', async (req, res) => {
//   try {
//     const { name, inputs, results } = req.body;
//     if (!name || !inputs || !results) return res.status(400).json({ error: 'missing fields' });
//     const s = new Scenario({ name, inputs, results });
//     await s.save();
//     res.json(s);
//   } catch (err) {
//     console.error(err);
//     if (err.code === 11000) return res.status(400).json({ error: 'name must be unique' });
//     res.status(500).json({ error: 'save failed' });
//   }
// });

// // GET list
// router.get('/', async (req, res) => {
//   const list = await Scenario.find({}, 'name created_at').sort({ created_at: -1 }).lean();
//   res.json(list);
// });

// // GET by id
// router.get('/:id', async (req, res) => {
//   const s = await Scenario.findById(req.params.id).lean();
//   if (!s) return res.status(404).json({ error: 'not found' });
//   res.json(s);
// });

// // DELETE by id
// router.delete('/:id', async (req, res) => {
//   await Scenario.findByIdAndDelete(req.params.id);
//   res.json({ deleted: true });
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const Scenario = require('../models/Scenario');
const { generatePDF } = require('../utils/pdfGenerator');

// Save scenario
router.post('/scenarios', async (req, res) => {
    try {
        const scenario = new Scenario(req.body);
        await scenario.save();
        res.json(scenario);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all scenarios
router.get('/scenarios', async (req, res) => {
    try {
        const scenarios = await Scenario.find().sort({ createdAt: -1 });
        res.json(scenarios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get scenario by ID
router.get('/:id', async (req, res) => {
    try {
        const scenario = await Scenario.findById(req.params.id);
        res.json(scenario);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Generate PDF report (email required)
router.post('/report/generate', async (req, res) => {
    const { email, scenario } = req.body;
    if (!email) return res.status(400).json({ error: 'Email required' });

    try {
        const pdfBuffer = await generatePDF(scenario);
        // You can send via nodemailer if required
        res.setHeader('Content-Type', 'application/pdf');
        res.send(pdfBuffer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
