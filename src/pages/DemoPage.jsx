// src/pages/DemoPage.jsx
import React from 'react';
import './DemoPage.css';
import uberImage from '../assets/uber-dashboard.png';

const DemoPage = ({ formData }) => {
  if (!formData) return <p>No data passed. Go back and complete onboarding.</p>;

  return (
    <div className="demo-container">
      <div className="demo-mode-badge">Demo Mode – Uber</div>
      <div className="uber-wrapper">
        <img src={uberImage} alt="Uber dashboard" className="uber-img" />
        <div className="tooltip" style={{ top: '40%', left: '12%' }}>
          {formData.funnelSteps[0] || 'Step 1: Pick location'}
        </div>
        <div className="tooltip" style={{ top: '63%', left: '30%' }}>
          {formData.funnelSteps[1] || 'Step 2: See prices'}
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
