import React from 'react';
import './DemoPage.css';
import uberImg from '../assets/uber-dashboard.png';

const DemoPage = ({ formData }) => {
  if (!formData) return <p>No data passed. Go back and complete onboarding.</p>;

  return (
    <div className="demo-container" style={{ position: 'relative' }}>
      <img src={uberImg} alt="Uber dashboard" className="uber-screenshot" />

      {/* Tooltip 1 – Pick-up */}
      <div className="tooltip tooltip-top" style={{ top: '200px', left: '140px' }}>
        <div className="tooltip-arrow"></div>
        Step 1: {formData.funnelSteps[0] || 'Select pickup and dropoff'}
      </div>

      {/* Tooltip 2 – See prices */}
      <div className="tooltip tooltip-bottom" style={{ top: '350px', left: '150px' }}>
        <div className="tooltip-arrow"></div>
        Step 2: {formData.funnelSteps[1] || 'See prices'}
      </div>
    </div>
  );
};

export default DemoPage;
