// src/pages/DemoPage.jsx
import React from 'react';
import './DemoPage.css';

const DemoPage = ({ formData }) => {
  if (!formData) return <p>No data passed. Go back and complete onboarding.</p>;

  return (
    <div className="demo-wrapper">
      <div className="demo-pill">Demo mode – Uber</div>

      <div className="demo-container">
        <img
          src={require('../assets/uber-dashboard.png')}
          alt="Uber dashboard"
          className="demo-image"
        />

        {/* Tooltips */}
        <div className="tooltip" style={{ top: '21%', left: '20%' }}>
          Step 1: {formData.activations[0] || 'Select pickup & drop-off'}
        </div>

        <div className="tooltip" style={{ top: '36.5%', left: '20%' }}>
          Step 2: {formData.activations[1] || 'See ride prices'}
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
