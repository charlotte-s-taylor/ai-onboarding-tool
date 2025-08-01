// src/pages/DemoPage.jsx
import React from 'react';
import './DemoPage.css';

const DemoPage = ({ formData }) => {
  if (!formData) return <p>No data passed. Go back and complete onboarding.</p>;

  return (
    <div className="demo-wrapper">
      <div className="mock-app">
        <img src="/mock-uber-dashboard.png" alt="Uber mock dashboard" className="mock-img" />

        {/* Tooltip 1 */}
        <div className="tooltip" style={{ top: '80px', left: '40px' }}>
          <strong>Step 1:</strong> {formData.funnelSteps[0]}<br />
          <em>{formData.activations[0]}</em>
        </div>

        {/* Tooltip 2 */}
        <div className="tooltip" style={{ top: '200px', left: '250px' }}>
          <strong>Step 2:</strong> {formData.funnelSteps[1]}<br />
          <em>{formData.activations[1]}</em>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
