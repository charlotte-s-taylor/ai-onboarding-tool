// src/App.jsx
import React, { useState } from 'react';
import OnboardingModal from './components/OnboardingModal';
import DemoPage from './pages/DemoPage';
import './App.css';

function App() {
  const [showDemo, setShowDemo] = useState(false);
  const [formData, setFormData] = useState(null);

  return (
    <div className="App">
      {!showDemo ? (
        <OnboardingModal
          onComplete={(data) => {
            setFormData(data);
            setShowDemo(true);
          }}
        />
      ) : (
        <DemoPage formData={formData} />
      )}
    </div>
  );
}

export default App;
