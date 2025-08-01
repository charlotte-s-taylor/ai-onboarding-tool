import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnboardingModal from './components/OnboardingModal';
import DemoPage from './pages/DemoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingModal />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
