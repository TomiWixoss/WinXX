import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-2xl w-full border border-white/20">
        <div className="flex flex-col items-center space-y-6">
          <img 
            width="120" 
            alt="icon" 
            src={icon} 
            className="animate-bounce"
          />
          
          <h1 className="text-5xl font-bold text-white text-center">
            WinXX
          </h1>
          
          <p className="text-xl text-white/90 text-center">
            Ứng dụng mô phỏng Windows
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8">
            <button 
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transform transition hover:scale-105 active:scale-95 flex flex-col items-center space-y-2"
            >
              <span className="text-3xl">🚀</span>
              <span>Khởi động hệ thống</span>
            </button>
            
            <button 
              type="button"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transform transition hover:scale-105 active:scale-95 flex flex-col items-center space-y-2"
            >
              <span className="text-3xl">📱</span>
              <span>Trình quản lý ứng dụng</span>
            </button>
            
            <button 
              type="button"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transform transition hover:scale-105 active:scale-95 flex flex-col items-center space-y-2"
            >
              <span className="text-3xl">🌐</span>
              <span>Trình duyệt web</span>
            </button>
          </div>
          
          <div className="mt-8 flex items-center space-x-4">
            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/80 text-sm">
              Tailwind CSS v4 đang hoạt động ✨
            </span>
          </div>
        </div>
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
