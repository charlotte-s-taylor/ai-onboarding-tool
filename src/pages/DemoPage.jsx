import React from 'react';
import './DemoPage.css';

const dashboardImg = "https://i.imgur.com/N8Q0ncn.png"; // Placeholder Uber-like screenshot

const DemoPage = ({ formData }) => {
  if (!formData) return <p>No data passed. Go back and complete onboarding.</p>;

  return (
    <div className="demo-container">
      <img src={dashboardImg} alt="Uber dashboard" className="demo-image" />

      <div className="tooltip-box" style={{ top: '25%', left: '20%' }}>
        <strong>Step 1</strong>: {formData.funnelSteps[0]}
      </div>

      <div className="tooltip-box" style={{ top: '50%', left: '50%' }}>
        <strong>Step 2</strong>: {formData.funnelSteps[1]}
      </div>
    </div>
  );
};

export default DemoPage;
