// src/pages/DemoPage.jsx
import React from 'react';
import './DemoPage.css';
import uberImage from '../assets/uber-dashboard.png';

const DemoPage = ({ formData }) => {
  if (!formData) return <p>No data passed. Go back and complete onboarding.</p>;

  return (
    <div className="demo-container">
      <div className="navbar">🚗 {formData.product || 'Demo App'}</div>

      <div className="main-content">
        <div className="mockup-image">
          <img src={uberImage} alt="Uber App Mockup" />

          {/* TOOLTIP: Pickup Location */}
          <div className="tooltip tooltip-pickup">
            Step 1: {formData.funnelSteps[0] || 'Select pickup & drop-off'}
          </div>

          {/* TOOLTIP: See Prices */}
          <div className="tooltip tooltip-price">
            Step 2: {formData.funnelSteps[1] || 'See ride prices'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
