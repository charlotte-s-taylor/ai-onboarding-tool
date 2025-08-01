import React, { useState } from 'react';
import OnboardingModal from './components/OnboardingModal';
import DemoPage from './pages/DemoPage';

function App() {
  const [formData, setFormData] = useState(null);

  return (
    <div>
      {!formData ? (
        <OnboardingModal onComplete={setFormData} />
      ) : (
        <DemoPage formData={formData} />
      )}
    </div>
  );
}

export default App;
