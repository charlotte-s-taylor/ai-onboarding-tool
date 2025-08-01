// src/App.jsx
import React, { useState } from 'react';
import OnboardingModal from './components/OnboardingModal';
import DemoPage from './pages/DemoPage';
import './App.css';

function App() {
  const [formData, setFormData] = useState(null);

  return (
    <div className="App">
      {!formData ? (
        <OnboardingModal onComplete={setFormData} />
      ) : (
        <DemoPage formData={formData} />
      )}
    </div>
  );
}

export default App;
