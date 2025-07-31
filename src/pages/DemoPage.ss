.demo-container {
  font-family: Roboto, sans-serif;
  padding: 2rem;
  position: relative;
}

.navbar {
  background: black;
  color: white;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 6px;
  margin-bottom: 2rem;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.dashboard-card {
  position: relative;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fafafa;
}

/* Tooltip styles */
.dashboard-card:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  top: -1.8rem;
  left: 0;
  background: black;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
  white-space: nowrap;
}
