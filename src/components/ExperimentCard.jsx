import React from "react";

const ExperimentCard = ({ onOpenModal }) => {
  return (
    <div className="experiment-card">
      <h2>Run an onboarding experiment</h2>
      <p>
        Split users 50/50 to test onboarding variants and check impact on activation.
      </p>
      <button onClick={onOpenModal}>Create Experiment</button>
    </div>
  );
};

export default ExperimentCard;
