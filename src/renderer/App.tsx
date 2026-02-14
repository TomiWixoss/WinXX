import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>WinXX</h1>
      <p>Windows Simulation Desktop App</p>
      <div className="Hello">
        <button type="button">
          <span role="img" aria-label="rocket">
            🚀
          </span>
          Boot System
        </button>
        <button type="button">
          <span role="img" aria-label="apps">
            📱
          </span>
          App Launcher
        </button>
        <button type="button">
          <span role="img" aria-label="browser">
            🌐
          </span>
          Web Browser
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
