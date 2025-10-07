import Scenario from "../models/Scenario.js";

const constants = {
  automated_cost_per_invoice: parseFloat(process.env.AUTOMATED_COST_PER_INVOICE),
  error_rate_auto: parseFloat(process.env.ERROR_RATE_AUTO),
  min_roi_boost_factor: parseFloat(process.env.MIN_ROI_BOOST),
};

// ROI Calculation
const calculateROI = (data) => {
  const {
    monthly_invoice_volume,
    num_ap_staff,
    avg_hours_per_invoice,
    hourly_wage,
    error_rate_manual,
    error_cost,
    time_horizon_months,
    one_time_implementation_cost = 50000,
  } = data;

  const labor_cost_manual =
    num_ap_staff * hourly_wage * avg_hours_per_invoice * monthly_invoice_volume;

  const auto_cost = monthly_invoice_volume * constants.automated_cost_per_invoice;

  const error_savings =
    (error_rate_manual - constants.error_rate_auto) *
    monthly_invoice_volume *
    error_cost;

  let monthly_savings = (labor_cost_manual + error_savings) - auto_cost;
  monthly_savings *= constants.min_roi_boost_factor;

  const cumulative_savings = monthly_savings * time_horizon_months;
  const net_savings = cumulative_savings - one_time_implementation_cost;
  const payback_months = one_time_implementation_cost / monthly_savings;
  const roi_percentage = (net_savings / one_time_implementation_cost) * 100;

  return {
    monthly_savings: monthly_savings.toFixed(2),
    payback_months: payback_months.toFixed(2),
    roi_percentage: roi_percentage.toFixed(2),
  };
};

// POST /simulate
export const simulate = (req, res) => {
  const result = calculateROI(req.body);
  res.json(result);
};

// POST /save
export const saveScenario = async (req, res) => {
  const { scenario_name, ...inputs } = req.body;
  const results = calculateROI(inputs);
  const newScenario = new Scenario({ scenario_name, ...inputs, results });
  await newScenario.save();
  res.json(newScenario);
};

// GET /all
export const getScenarios = async (req, res) => {
  const all = await Scenario.find();
  res.json(all);
};
