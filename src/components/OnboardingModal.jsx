/* src/components/OnboardingModal.css */

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  font-family: 'Roboto', sans-serif;
}

.modal-content {
  background: #fff;
  padding: 40px 32px;
  border-radius: 12px;
  width: 520px;
  max-width: 90%;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.close {
  font-size: 24px;
  cursor: pointer;
  font-weight: bold;
  line-height: 1;
}

.progress-bar {
  flex-grow: 1;
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  margin-left: 16px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #000;
  transition: width 0.3s ease;
}

h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #212121;
}

label {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
  color: #424242;
  display: block;
}

input, textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 20px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  background: #fff;
}

textarea {
  resize: vertical;
  min-height: 96px;
}

.step-pair {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.step-pair > div {
  flex: 1;
}

.modal-footer {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
}

button {
  background-color: #000;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #333;
}

.loading {
  font-size: 14px;
  font-style: italic;
  color: #616161;
}
