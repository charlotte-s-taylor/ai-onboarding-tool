import React from 'react';
import './DemoPage.css';
import uberDashboard from '../assets/uber-dashboard.png'; // Make sure this path matches your file structure

const DemoPage = ({ formData }) => {
  if (!formData) return <p>No data passed. Go back and complete onboarding.</p>;

  return (
    <div className="demo-container">
      <div className="navbar">🚗 {formData.product || 'Demo App'}</div>

      <div className="dashboard">
        <img src={uberDashboard} alt="Uber Dashboard" className="dashboard-image" />

        {/* Overlay tooltips */}
        <div
          className="tooltip-box"
          style={{ top: '140px', left: '80px' }}
          data-tooltip={`Step 1: ${formData.funnelSteps[0] || 'Open dashboard'}`}
        >
          {formData.activations[0] || 'Pick-up location'}
        </div>

        <div
          className="tooltip-box"
          style={{ top: '200px', left: '80px' }}
          data-tooltip={`Step 2: ${formData.funnelSteps[1] || 'See pricing'}`}
        >
          {formData.activations[1] || 'See prices'}
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
