import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnboardingModal from './components/OnboardingModal';
import DemoPage from './pages/DemoPage';

function App() {
  const [formData, setFormData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingModal onComplete={setFormData} />} />
        <Route path="/demo" element={<DemoPage formData={formData} />} />
      </Routes>
    </Router>
  );
}

export default App;
