// src/pages/DemoPage.jsx
import React from 'react';
import './DemoPage.css';
import uberImage from '../assets/uber-dashboard.png'; // Ensure this image exists in your repo

const DemoPage = ({ formData }) => {
  if (!formData) {
    return (
      <div className="demo-container">
        <p>No data passed. Please complete the onboarding first.</p>
      </div>
    );
  }

  return (
    <div className="demo-container">
      <div className="navbar">🚗 {formData.product || 'Demo App'}</div>

      <div className="main-content">
        <img src={uberImage} alt="Uber dashboard mockup" className="demo-image" />

        <div
          className="tooltip"
          style={{ top: '120px', left: '60px' }}
        >
          <strong>Step 1:</strong> {formData.funnelSteps[0] || 'Enter pickup/dropoff'}
        </div>

        <div
          className="tooltip"
          style={{ top: '240px', left: '220px' }}
        >
          <strong>Step 2:</strong> {formData.funnelSteps[1] || 'Select ride type'}
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
