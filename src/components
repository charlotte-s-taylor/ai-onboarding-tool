// src/components/OnboardingModal.jsx
import React, { useState } from 'react';
import './OnboardingModal.css';

const OnboardingModal = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    product: '',
    activations: ['', ''],
    funnelSteps: ['', '', ''],
    frontendTags: ['', '', ''],
  });

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field, index, value) => {
    setFormData((prev) => {
      const updated = [...prev[field]];
      updated[index] = value;
      return { ...prev, [field]: updated };
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={() => alert('Close clicked')}>&times;</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${(step / 4) * 100}%` }}></div>
          </div>
        </div>

        {step === 1 && (
          <>
            <h2>Tell us about you</h2>
            <input
              placeholder="Name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
            <input
              placeholder="Role"
              value={formData.role}
              onChange={(e) => handleChange('role', e.target.value)}
            />
          </>
        )}

        {step === 2 && (
          <>
            <h2>What does your product do?</h2>
            <textarea
              placeholder="Brief description of your product"
              value={formData.product}
              onChange={(e) => handleChange('product', e.target.value)}
            />
            <input
              placeholder="Activation Action 1"
              value={formData.activations[0]}
              onChange={(e) => handleArrayChange('activations', 0, e.target.value)}
            />
            <input
              placeholder="Activation Action 2 (optional)"
              value={formData.activations[1]}
              onChange={(e) => handleArrayChange('activations', 1, e.target.value)}
            />
          </>
        )}

        {step === 3 && (
          <>
            <h2>Steps in the funnel</h2>
            {[0, 1, 2].map((i) => (
              <div className="step-pair" key={i}>
                <input
                  placeholder={`Step ${i + 1}`}
                  value={formData.funnelSteps[i]}
                  onChange={(e) => handleArrayChange('funnelSteps', i, e.target.value)}
                />
                <input
                  placeholder={`Frontend tag for Step ${i + 1}`}
                  value={formData.frontendTags[i]}
                  onChange={(e) => handleArrayChange('frontendTags', i, e.target.value)}
                />
              </div>
            ))}
          </>
        )}

        {step === 4 && (
          <>
            <h2>Generating your onboarding flow…</h2>
            <div className="loading">🤖 Assembling tooltips…</div>
          </>
        )}

        <div className="modal-footer">
          {step > 1 && <button onClick={back}>Back</button>}
          {step < 4 && <button onClick={next}>Next</button>}
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;
