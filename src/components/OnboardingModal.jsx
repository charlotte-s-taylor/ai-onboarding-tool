/* App.css */

body {
  font-family: 'Roboto', sans-serif;
  background: #f5f5f5;
  margin: 0;
  padding: 0;
}

.modal {
  width: 100%;
  max-width: 560px;
  margin: 40px auto;
  padding: 32px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.modal-header h2 {
  font-size: 24px;
  margin: 0;
  font-weight: 600;
}

.subtitle {
  margin: 0 0 24px 0;
  color: #444;
  font-size: 16px;
}

.progress-bar {
  width: 120px;
  height: 6px;
  background: #eee;
  border-radius: 8px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: #000;
  transition: width 0.3s ease;
}

label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
}

label span {
  color: black;
  margin-left: 4px;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
}

.modal-footer button {
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 500;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.modal-footer button:hover {
  opacity: 0.9;
}

.funnel-row {
  display: flex;
  gap: 16px;
}

.funnel-row div {
  flex: 1;
}

.loading-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  text-align: center;
}

.loading-screen h2 {
  font-size: 24px;
  margin-bottom: 12px;
}

.spinner {
  margin-top: 24px;
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top: 4px solid black;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
