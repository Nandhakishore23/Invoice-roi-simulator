import React from 'react';

const ResultCard = ({ results }) => {
    if (!results) return null;
    return (
        <div className="bg-green-100 p-4 rounded shadow mt-4 space-y-2">
            <h3 className="font-bold text-lg">Simulation Results</h3>
            <p>Monthly Savings: ${results.monthly_savings}</p>
            <p>Cumulative Savings: ${results.cumulative_savings}</p>
            <p>Net Savings: ${results.net_savings}</p>
            <p>Payback (months): {results.payback_months}</p>
            <p>ROI (%): {results.roi_percentage}</p>
        </div>
    );
};

export default ResultCard;
