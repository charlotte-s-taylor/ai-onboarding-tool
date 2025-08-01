import React from 'react';
import './DemoPage.css';
import uberDashboard from '../assets/uber-dashboard.png';

const DemoPage = ({ formData }) => {
  if (!formData) return <p>No data passed. Go back and complete onboarding.</p>;

  return (
    <div className="demo-container">
      <div className="navbar">🚗 {formData.product || 'Demo App'}</div>

      {/* Ensure this wrapper is relative */}
      <div className="dashboard-image-wrapper">
        <img src={uberDashboard} alt="Uber Dashboard" className="dashboard-image" />

        {/* Tooltip overlays absolutely positioned within the wrapper */}
        <div
          className="tooltip-box"
          style={{ top: '20%', left: '10%' }}
          data-tooltip={`Step 1: ${formData.funnelSteps[0] || 'Open dashboard'}`}
        >
          {formData.activations[0] || 'Pick-up location'}
        </div>

        <div
          className="tooltip-box"
          style={{ top: '40%', left: '10%' }}
          data-tooltip={`Step 2: ${formData.funnelSteps[1] || 'See pricing'}`}
        >
          {formData.activations[1] || 'See prices'}
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
