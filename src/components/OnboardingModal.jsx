// src/components/OnboardingModal.jsx
import React, { useState } from 'react';
import './OnboardingModal.css';

const OnboardingModal = ({ onComplete, setFormData }) => {
  const [step, setStep] = useState(1);
  const [localData, setLocalData] = useState({
    name: '',
    role: '',
    product: '',
    appLink: '',
    activations: ['', ''],
    funnelSteps: ['', '', ''],
    frontendTags: ['', '', ''],
  });

  const next = () => {
    if (step < 4) setStep(step + 1);
    else {
      setFormData(localData);
      onComplete();
    }
  };

  const back = () => setStep(step - 1);

  const handleChange = (field, value) => {
    setLocalData((prev) => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field, index, value) => {
    const updated = [...localData[field]];
    updated[index] = value;
    setLocalData((prev) => ({ ...prev, [field]: updated }));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => alert('Close clicked')}>
          &#10005;
        </span>

        <div className="progress-bar">
          <div className="progress" style={{ width: `${(step / 4) * 100}%` }}></div>
        </div>

        {step === 1 && (
          <>
            <h2>Tell us about you</h2>
            <label>Name</label>
            <input
              placeholder="e.g. Mark Corrigan"
              value={localData.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
            <label>Role</label>
            <input
              placeholder="e.g. Product Manager"
              value={localData.role}
              onChange={(e) => handleChange('role', e.target.value)}
            />
          </>
        )}

        {step === 2 && (
          <>
            <h2>What does your product do?</h2>
            <label>Product description</label>
            <textarea
              placeholder="e.g. We get you from a to b, pronto..."
              value={localData.product}
              onChange={(e) => handleChange('product', e.target.value)}
            />
            <label>Link to app</label>
            <input
              placeholder="e.g. https://www.uber.com"
              value={localData.appLink}
              onChange={(e) => handleChange('appLink', e.target.value)}
            />
            <label>Activation action 1</label>
            <input
              placeholder="e.g. Select pick up location and drop off"
              value={localData.activations[0]}
              onChange={(e) => handleArrayChange('activations', 0, e.target.value)}
            />
            <label>Activation action 2</label>
            <input
              placeholder="e.g. See prices"
              value={localData.activations[1]}
              onChange={(e) => handleArrayChange('activations', 1, e.target.value)}
            />
          </>
        )}

        {step === 3 && (
          <>
            <h2>Steps in the funnel</h2>
            {[0, 1, 2].map((i) => (
              <div className="step-pair" key={i}>
                <div>
                  <label>{`Step ${i + 1}`}</label>
                  <input
                    placeholder="e.g. Open dashboard"
                    value={localData.funnelSteps[i]}
                    onChange={(e) => handleArrayChange('funnelSteps', i, e.target.value)}
                  />
                </div>
                <div>
                  <label>Frontend tag</label>
                  <input
                    placeholder="e.g. .dashboard-card"
                    value={localData.frontendTags[i]}
                    onChange={(e) => handleArrayChange('frontendTags', i, e.target.value)}
                  />
                </div>
              </div>
            ))}
          </>
        )}

        {step === 4 && (
          <>
            <h2>Creating your onboarding flow…</h2>
            <img src="/assets/uber-dashboard.png" alt="Loading preview" className="demo-preview" />
            <p className="loading-note">You'll be redirected shortly…</p>
          </>
        )}

        <div className="modal-footer">
          {step > 1 && <button onClick={back}>Back</button>}
          <button onClick={next}>{step < 4 ? 'Next' : 'View demo'}</button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;
