import React, { useState } from "react";

const ExperimentModal = ({ onClose, onCreate }) => {
  const [form, setForm] = useState({
    startDate: "",
    duration: "",
    goal1: "",
    goal2: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal">
      <div className="modal-header">
        <h2>Your product</h2>
        <p className="subtitle">
          Split new users 50/50 experiment vs control to test your onboarding flow.
        </p>
      </div>
      <label>Start date<span>*</span></label>
      <input name="startDate" placeholder="Enter start date" onChange={handleChange} />
      <label>Duration<span>*</span></label>
      <input name="duration" placeholder="Select duration" onChange={handleChange} />
      <label>Activation goal 1<span>*</span></label>
      <input name="goal1" placeholder='e.g. Increase activation of "create a project"' onChange={handleChange} />
      <label>Activation goal 2</label>
      <input name="goal2" placeholder='e.g. Increase activation of "add a colleague"' onChange={handleChange} />

      <div className="modal-footer">
        <button onClick={onClose}>Cancel</button>
        <button onClick={onCreate}>Create experiment</button>
      </div>
    </div>
  );
};

export default ExperimentModal;
