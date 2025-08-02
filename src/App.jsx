import React, { useState } from "react";
import OnboardingModal from "./components/OnboardingModal";
import ExperimentModal from "./components/ExperimentModal";
import ExperimentCard from "./components/ExperimentCard";
import Toast from "./components/temp-toast";
import "./main.css";

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showExperimentModal, setShowExperimentModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFinishOnboarding = () => {
    setShowOnboarding(false);
  };

  const handleOpenExperimentModal = () => {
    setShowExperimentModal(true);
  };

  const handleCloseExperimentModal = () => {
    setShowExperimentModal(false);
  };

  const handleCreateExperiment = () => {
    setShowExperimentModal(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
  <div>
    <h1>Hello world from App.jsx</h1>
  </div>
);
}

export default App;
