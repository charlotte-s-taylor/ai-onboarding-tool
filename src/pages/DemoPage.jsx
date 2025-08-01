import React from 'react';
import './DemoPage.css';
import dashboardImage from '../assets/uber-dashboard.png';

const DemoPage = ({ formData }) => {
  if (!formData) return <p>No data passed. Go back and complete onboarding.</p>;

  return (
    <div className="demo-container">
      <div className="demo-header">🚗 Demo Mode – Uber</div>
      <div className="dashboard-wrapper">
        <img src={dashboardImage} alt="Uber Dashboard" className="dashboard-image" />
        <div className="tooltip tooltip-1">{formData.activations[0]}</div>
        <div className="tooltip tooltip-2">{formData.activations[1]}</div>
      </div>
    </div>
  );
};

export default DemoPage;
