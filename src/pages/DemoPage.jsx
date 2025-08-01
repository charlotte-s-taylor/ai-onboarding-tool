import React from 'react';
import './DemoPage.css';
const dashboardImg = "https://i.imgur.com/N8Q0ncn.png"; // Example Uber-like UI screenshot

const DemoPage = ({ formData }) => {
  if (!formData) return <p>No data passed. Go back and complete onboarding.</p>;

  return (
    <div className="demo-container">
      <div className="demo-wrapper">
        <img src={dashboardImg} alt="Uber dashboard" className="demo-image" />

        <div className="tooltip" style={{ top: '30%', left: '20%' }}>
          <strong>{formData.activations[0] || 'Activation 1'}</strong>
          <p>{formData.funnelSteps[0] || 'Tooltip content'}</p>
        </div>

        <div className="tooltip" style={{ top: '60%', left: '50%' }}>
          <strong>{formData.activations[1] || 'Activation 2'}</strong>
          <p>{formData.funnelSteps[1] || 'Tooltip content'}</p>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
