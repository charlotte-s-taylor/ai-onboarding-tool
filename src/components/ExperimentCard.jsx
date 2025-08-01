import React, { useState } from 'react';
import ExperimentModal from './ExperimentModal';
import './ExperimentCard.css';

const ExperimentCard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="experiment-card" onClick={() => setShowModal(true)}>
        <h4>Run onboarding experiment</h4>
        <p>Split new users 50/50 to test your onboarding flow</p>
      </div>
      {showModal && <ExperimentModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default ExperimentCard;
