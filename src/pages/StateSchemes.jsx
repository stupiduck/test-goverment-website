import React from 'react';

function StateSchemes() {
  const states = [
    { name: 'Andhra Pradesh', schemes: 12 },
    { name: 'Bihar', schemes: 8 },
    { name: 'Gujarat', schemes: 15 },
    { name: 'Karnataka', schemes: 10 },
    { name: 'Uttar Pradesh', schemes: 20 },
    { name: 'West Bengal', schemes: 14 }
  ];

  return (
    <main className="form-container">
      <div className="breadcrumb">
        <span>Home {'>>'} State Schemes</span>
      </div>
      <h2 className="page-title">Scholarship Schemes - State Governments</h2>
      <div className="state-grid">
        {states.map(state => (
          <div key={state.name} className="state-card">
            <h4>{state.name}</h4>
            <p>{state.schemes} Active Schemes</p>
            <button className="btn-retro">View Details</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default StateSchemes;
