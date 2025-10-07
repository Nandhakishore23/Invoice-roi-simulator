import React, { useState } from 'react';
import ROIForm from './components/ROIForm';
import ResultCard from './components/ResultCard';
import ScenarioList from './components/ScenarioList';
import { simulateROI, saveScenario } from './services/api';

function App() {
    const [results, setResults] = useState(null);

    const handleSimulate = async (data) => {
        const res = await simulateROI(data);
        setResults(res.data);
        await saveScenario({ ...data, results: res.data });
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <ROIForm onSubmit={handleSimulate} />
            <ResultCard results={results} />
            <ScenarioList />
        </div>
    );
}

export default App;
