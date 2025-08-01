import React from 'react';

const ExperimentModal = ({ onClose, onCreate }) => {
  return (
    <div className="modal">
      <div className="modal-header">
        <h2>Your product</h2>
        <button onClick={onClose}>×</button>
      </div>
      <p className="subtitle">Split new users 50/50 experiment vs control to test your onboarding flow.</p>

      <label>
        Start Date<span>*</span>
        <input type="date" placeholder="Enter start date" required />
      </label>

      <label>
        Duration<span>*</span>
        <input type="text" placeholder="Select duration" required />
      </label>

      <label>
        Activation goal 1<span>*</span>
        <input type="text" placeholder='e.g. Increase activation of "create a project"' required />
      </label>

      <label>
        Activation goal 2
        <input type="text" placeholder='e.g. Increase activation of "add a colleague"' />
      </label>

      <div className="modal-footer">
        <button onClick={onClose}>Cancel</button>
        <button onClick={onCreate}>Create experiment</button>
      </div>
    </div>
  );
};

export default ExperimentModal;
