import React from 'react';
import './DemoPage.css';

const DemoPage = () => {
  return (
    <div className="demo-container">
      <div className="navbar">🚗 Uber Clone</div>

      <div className="main-content">
        <div className="dashboard-card" data-tooltip="Step 1: Select pickup location">
          <h2>Where are you going?</h2>
          <input placeholder="Enter pickup location" />
        </div>

        <div className="dashboard-card" data-tooltip="Step 2: View ride options">
          <h2>Choose your ride</h2>
          <p>Standard • Comfort • XL</p>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
