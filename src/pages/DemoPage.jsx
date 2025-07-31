import React from 'react';
import './DemoPage.css';

const DemoPage = ({ formData }) => {
  if (!formData) return <p>No data passed. Go back and complete onboarding.</p>;

  return (
    <div className="demo-container">
      <div className="navbar">🚗 {formData.product || 'Demo App'}</div>

      <div className="main-content">
        <div
          className="dashboard-card"
          data-tooltip={`Step 1: ${formData.funnelSteps[0]}`}
        >
          <h2>{formData.activations[0]}</h2>
          <input placeholder="..." />
        </div>

        <div
          className="dashboard-card"
          data-tooltip={`Step 2: ${formData.funnelSteps[1]}`}
        >
          <h2>{formData.activations[1]}</h2>
          <p>Standard • Comfort • XL</p>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
