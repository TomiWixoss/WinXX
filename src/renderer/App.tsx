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
      <p>Ứng dụng mô phỏng Windows</p>
      <div className="Hello">
        <button type="button">
          <span role="img" aria-label="rocket">
            🚀
          </span>
          Khởi động hệ thống
        </button>
        <button type="button">
          <span role="img" aria-label="apps">
            📱
          </span>
          Trình quản lý ứng dụng
        </button>
        <button type="button">
          <span role="img" aria-label="browser">
            🌐
          </span>
          Trình duyệt web
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
