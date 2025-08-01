import React, { useState } from 'react';
import Modal from './Modal';

function App() {
  const [step1, setStep1] = useState('');
  const [step2, setStep2] = useState('');
  const [step3, setStep3] = useState('');
  const [step4, setStep4] = useState('');
  const [step5, setStep5] = useState('');
  const [tag1, setTag1] = useState('');
  const [tag2, setTag2] = useState('');
  const [tag3, setTag3] = useState('');
  const [tag4, setTag4] = useState('');
  const [tag5, setTag5] = useState('');
  const [flowOutput, setFlowOutput] = useState([]);

  const handleSubmit = async () => {
    const funnelSteps = [step1, step2, step3, step4, step5];
    const frontendTags = [tag1, tag2, tag3, tag4, tag5];

    try {
      const res = await fetch('/api/generate-flow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ funnelSteps, frontendTags }),
      });

      const data = await res.json();
      console.log('AI-generated tooltips:', data);
      setFlowOutput(data.onboardingFlow);
    } catch (err) {
      console.error('API error:', err);
    }
  };

  return (
    <div>
      <Modal
        step1={step1} setStep1={setStep1}
        step2={step2} setStep2={setStep2}
        step3={step3} setStep3={setStep3}
        step4={step4} setStep4={setStep4}
        step5={step5} setStep5={setStep5}
        tag1={tag1} setTag1={setTag1}
        tag2={tag2} setTag2={setTag2}
        tag3={tag3} setTag3={setTag3}
        tag4={tag4} setTag4={setTag4}
        tag5={tag5} setTag5={setTag5}
        handleSubmit={handleSubmit}
        flowOutput={flowOutput}
      />
    </div>
  );
}

export default App;
