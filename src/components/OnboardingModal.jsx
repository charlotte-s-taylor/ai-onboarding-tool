import React from 'react';

function Modal({
  step1, setStep1,
  step2, setStep2,
  step3, setStep3,
  step4, setStep4,
  step5, setStep5,
  tag1, setTag1,
  tag2, setTag2,
  tag3, setTag3,
  tag4, setTag4,
  tag5, setTag5,
  handleSubmit,
  flowOutput,
}) {
  return (
    <div className="modal">
      <input value={step1} onChange={(e) => setStep1(e.target.value)} placeholder="Step 1" />
      <input value={tag1} onChange={(e) => setTag1(e.target.value)} placeholder="Tag 1" />

      <input value={step2} onChange={(e) => setStep2(e.target.value)} placeholder="Step 2" />
      <input value={tag2} onChange={(e) => setTag2(e.target.value)} placeholder="Tag 2" />

      <input value={step3} onChange={(e) => setStep3(e.target.value)} placeholder="Step 3" />
      <input value={tag3} onChange={(e) => setTag3(e.target.value)} placeholder="Tag 3" />

      <input value={step4} onChange={(e) => setStep4(e.target.value)} placeholder="Step 4" />
      <input value={tag4} onChange={(e) => setTag4(e.target.value)} placeholder="Tag 4" />

      <input value={step5} onChange={(e) => setStep5(e.target.value)} placeholder="Step 5" />
      <input value={tag5} onChange={(e) => setTag5(e.target.value)} placeholder="Tag 5" />

      <button onClick={handleSubmit}>Generate Tooltips</button>

      {flowOutput.length > 0 && (
        <div className="output">
          <h3>Generated Tooltips:</h3>
          {flowOutput.map((item, idx) => (
            <div key={idx}>
              <strong>{item.step}</strong> ({item.selector})
              <p>{item.tooltip}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Modal;
