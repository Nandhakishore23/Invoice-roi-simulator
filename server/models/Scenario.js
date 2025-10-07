// // // server/models/Scenario.js
// // const mongoose = require('mongoose');
// // const { Schema } = mongoose;

// // const ScenarioSchema = new Schema({
// //   name: { type: String, required: true, unique: true },
// //   inputs: { type: Schema.Types.Mixed, required: true },
// //   results: { type: Schema.Types.Mixed, required: true },
// //   created_at: { type: Date, default: Date.now }
// // });

// // module.exports = mongoose.model('Scenario', ScenarioSchema);


// import mongoose from "mongoose";

// const scenarioSchema = new mongoose.Schema({
//   scenario_name: String,
//   monthly_invoice_volume: Number,
//   num_ap_staff: Number,
//   avg_hours_per_invoice: Number,
//   hourly_wage: Number,
//   error_rate_manual: Number,
//   error_cost: Number,
//   time_horizon_months: Number,
//   one_time_implementation_cost: Number,
//   results: Object,
// });

// export default mongoose.model("Scenario", scenarioSchema);



const mongoose = require('mongoose');

const scenarioSchema = new mongoose.Schema({
    scenario_name: { type: String, required: true },
    monthly_invoice_volume: Number,
    num_ap_staff: Number,
    avg_hours_per_invoice: Number,
    hourly_wage: Number,
    error_rate_manual: Number,
    error_cost: Number,
    time_horizon_months: Number,
    one_time_implementation_cost: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    results: Object
});

module.exports = mongoose.model('Scenario', scenarioSchema);
