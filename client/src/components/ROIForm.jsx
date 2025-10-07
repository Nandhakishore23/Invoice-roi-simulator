// // import React, { useState } from "react";
// // import { simulateROI } from "../services/api";

// // const ROIForm = () => {
// //   const [formData, setFormData] = useState({
// //     monthly_invoice_volume: "",
// //     num_ap_staff: "",
// //     avg_hours_per_invoice: "",
// //     hourly_wage: "",
// //     error_rate_manual: "",
// //     error_cost: "",
// //     time_horizon_months: "",
// //     one_time_implementation_cost: "",
// //   });

// //   const [result, setResult] = useState(null);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const res = await simulateROI(formData);
// //     setResult(res);
// //   };

// //   return (
// //     <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
// //       <h2 className="text-2xl font-bold mb-4 text-center">Invoicing ROI Simulator</h2>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         {Object.keys(formData).map((key) => (
// //           <div key={key}>
// //             <label className="block text-sm font-medium text-gray-700">
// //               {key.replace(/_/g, " ")}
// //             </label>
// //             <input
// //               type="number"
// //               step="any"
// //               name={key}
// //               value={formData[key]}
// //               onChange={handleChange}
// //               required
// //               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
// //             />
// //           </div>
// //         ))}
// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
// //         >
// //           Simulate ROI
// //         </button>
// //       </form>

// //       {result && (
// //         <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
// //           <h3 className="text-lg font-semibold mb-2">Results:</h3>
// //           <p><span className="font-medium">Monthly Savings:</span> ${result.monthly_savings}</p>
// //           <p><span className="font-medium">Payback Months:</span> {result.payback_months}</p>
// //           <p><span className="font-medium">ROI Percentage:</span> {result.roi_percentage}%</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ROIForm;


// import React from 'react';
// import { useForm } from 'react-hook-form';

// const ROIForm = ({ onSubmit }) => {
//     const { register, handleSubmit } = useForm();
//     return (
//         <form className="bg-white p-6 rounded shadow-md space-y-4" onSubmit={handleSubmit(onSubmit)}>
//             <h2 className="text-xl font-bold">ROI Simulator</h2>
//             <input {...register('scenario_name')} placeholder="Scenario Name" className="w-full p-2 border rounded" />
//             <input {...register('monthly_invoice_volume')} type="number" placeholder="Monthly Invoice Volume" className="w-full p-2 border rounded" />
//             <input {...register('num_ap_staff')} type="number" placeholder="AP Staff Count" className="w-full p-2 border rounded" />
//             <input {...register('avg_hours_per_invoice')} type="number" placeholder="Avg Hours per Invoice" step="0.01" className="w-full p-2 border rounded" />
//             <input {...register('hourly_wage')} type="number" placeholder="Hourly Wage" className="w-full p-2 border rounded" />
//             <input {...register('error_rate_manual')} type="number" placeholder="Manual Error Rate (%)" className="w-full p-2 border rounded" />
//             <input {...register('error_cost')} type="number" placeholder="Cost per Error" className="w-full p-2 border rounded" />
//             <input {...register('time_horizon_months')} type="number" placeholder="Projection Months" className="w-full p-2 border rounded" />
//             <input {...register('one_time_implementation_cost')} type="number" placeholder="Implementation Cost (Optional)" className="w-full p-2 border rounded" />
//             <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Simulate</button>
//         </form>
//     );
// };

// export default ROIForm;


import React, { useState } from 'react';
import { simulateROI, saveScenario } from '../services/api';

const ROIForm = ({ onScenarioSaved }) => {
  const [formData, setFormData] = useState({
    scenario_name: '',
    monthly_invoice_volume: '',
    num_ap_staff: '',
    avg_hours_per_invoice: '',
    hourly_wage: '',
    error_rate_manual: '',
    error_cost: '',
    time_horizon_months: '',
    one_time_implementation_cost: ''
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSimulate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await simulateROI(formData);
      setResult(res.data);
    } catch(err) {
      console.error(err);
      alert('Simulation failed!');
    }
    setLoading(false);
  };

  const handleSave = async () => {
    try {
      await saveScenario({ ...formData, result });
      onScenarioSaved();
      alert('Scenario saved!');
    } catch(err) {
      console.error(err);
      alert('Failed to save scenario');
    }
  };

  return (
    <div className="roi-form-container">
      <form className="roi-form" onSubmit={handleSimulate}>
        <h2>Simulation Input</h2>

        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label>{key.replace(/_/g, ' ')}</label>
            <input
              type="number"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <button type="submit" className="btn-primary">{loading ? 'Simulating...' : 'Simulate'}</button>
      </form>

      {result && (
        <div className="roi-result animated-card">
          <h3>Simulation Result</h3>
          <ul>
            {Object.keys(result).map((key) => (
              <li key={key}>
                <strong>{key.replace(/_/g, ' ')}:</strong> {result[key]}
              </li>
            ))}
          </ul>
          <button className="btn-secondary" onClick={handleSave}>Save Scenario</button>
        </div>
      )}
    </div>
  );
};

export default ROIForm;
