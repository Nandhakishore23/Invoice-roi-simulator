import React, { useState, useEffect } from 'react';
import ROIForm from './components/ROIForm';
import ScenarioList from './components/ScenarioList';
import { getScenarios } from './services/api';
import './index.css';

function App() {
  const [scenarios, setScenarios] = useState([]);

  const fetchScenarios = async () => {
    try {
      const data = await getScenarios();
      setScenarios(data.data);
    } catch (err) {
      console.error('Error fetching scenarios', err);
    }
  };

  useEffect(() => {
    fetchScenarios();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>💰 Invoicing ROI Simulator</h1>
        <p>Visualize your savings with automation</p>
      </header>

      <main className="app-main">
        <div className="form-section">
          <ROIForm onScenarioSaved={fetchScenarios} />
        </div>

        <div className="scenario-section">
          <ScenarioList scenarios={scenarios} />
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 ROI Simulator Inc.</p>
      </footer>
    </div>
  );
}

export default App;
