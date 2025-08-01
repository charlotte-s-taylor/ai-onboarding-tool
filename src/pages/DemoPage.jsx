import React from 'react';
import './DemoPage.css';
import uberDashboard from '../assets/uber-dashboard.png';

const DemoPage = ({ formData }) => {
  if (!formData) return <p>No data passed. Go back and complete onboarding.</p>;

  return (
    <div className="demo-wrapper">
      <div className="demo-header">🚗 Demo Mode – Uber</div>

      <div className="dashboard-image-container">
        <img src={uberDashboard} alt="Uber dashboard" className="dashboard-image" />

        {/* Tooltip 1 – above pick-up location */}
        <div className="tooltip" style={{ top: '120px', left: '110px' }}>
          Step 1: {formData.activations[0] || 'Select pick-up & drop-off'}
        </div>

        {/* Tooltip 2 – below See Prices */}
        <div className="tooltip" style={{ top: '315px', left: '100px' }}>
          Step 2: {formData.activations[1] || 'See ride prices'}
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
