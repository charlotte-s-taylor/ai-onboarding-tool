import React from 'react';
import './DemoPage.css';
import uberDashboard from '../assets/uber-dashboard.png';

const DemoPage = ({ formData }) => {
  if (!formData) return <p>No data passed. Go back and complete onboarding.</p>;

  return (
    <div className="demo-container">
      <div className="navbar">🚗 {formData.product || 'Demo App'}</div>

      <div className="dashboard-image-wrapper">
        <img src={uberDashboard} alt="Uber Dashboard" className="dashboard-image" />

        {/* Tooltip over pick-up/drop-off */}
        <div
          className="tooltip-box"
          style={{ top: '22%', left: '12%' }}
          data-tooltip={`Step 1: ${formData.funnelSteps[0] || 'Open dashboard'}`}
        >
          {formData.activations[0] || 'Pick-up location'}
        </div>

        {/* Tooltip under See Prices button */}
        <div
          className="tooltip-box"
          style={{ top: '47%', left: '12%' }}
          data-tooltip={`Step 2: ${formData.funnelSteps[1] || 'See pricing'}`}
        >
          {formData.activations[1] || 'See prices'}
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
