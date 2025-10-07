// import React, { useEffect, useState } from 'react';
// import { getScenarios } from '../services/api';

// const ScenarioList = () => {
//     const [scenarios, setScenarios] = useState([]);

//     useEffect(() => {
//         fetchScenarios();
//     }, []);

//     const fetchScenarios = async () => {
//         const res = await getScenarios();
//         setScenarios(res.data);
//     }

//     return (
//         <div className="mt-6">
//             <h3 className="font-bold text-lg">Saved Scenarios</h3>
//             {scenarios.map(s => (
//                 <div key={s._id} className="p-2 border rounded mt-2">
//                     <p>Name: {s.scenario_name}</p>
//                     <p>Monthly Invoice Volume: {s.monthly_invoice_volume}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ScenarioList;


import React from 'react';

const ScenarioList = ({ scenarios }) => {
  return (
    <div className="scenario-list animated-card">
      <h2>Saved Scenarios</h2>
      {scenarios.length === 0 ? (
        <p>No saved scenarios</p>
      ) : (
        <ul>
          {scenarios.map((sc, idx) => (
            <li key={idx}>
              <strong>{sc.scenario_name}</strong> - ROI: {sc.result?.roi_percentage || 'N/A'}%
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ScenarioList;
