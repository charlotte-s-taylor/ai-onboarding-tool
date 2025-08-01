import React from 'react';
import './DemoPage.css';

const DemoPage = () => {
  // Temporary hardcoded fallback values for demo
  const formData = {
    product: "Uber Clone",
    activations: ["Select pickup and dropoff", "See prices"],
    funnelSteps: ["Open dashboard", "Select car type"],
  };

  return (
    <div className="demo-container">
      <div className="navbar">🚗 {formData.product}</div>

      <div className="main-content">
        <div
          className="dashboard-card"
          data-tooltip={`Step 1: ${formData.funnelSteps[0]}`}
        >
          <h2>{formData.activations[0]}</h2>
          <input placeholder="..." />
        </div>

        <div
          className="dashboard-card"
          data-tooltip={`Step 2: ${formData.funnelSteps[1]}`}
        >
          <h2>{formData.activations[1]}</h2>
          <p>Standard • Comfort • XL</p>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
