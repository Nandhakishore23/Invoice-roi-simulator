// server/models/Lead.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const LeadSchema = new Schema({
  email: { type: String, required: true },
  scenario_id: { type: Schema.Types.ObjectId, ref: 'Scenario' },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', LeadSchema);
