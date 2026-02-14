import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function Hello() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      icon: '⚡',
      title: 'Boot System',
      subtitle: 'Khởi động hệ thống',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: '📦',
      title: 'App Manager',
      subtitle: 'Quản lý ứng dụng',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      icon: '🌐',
      title: 'Web Browser',
      subtitle: 'Trình duyệt web',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        {/* Logo/Title */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
              <span className="text-4xl">⚡</span>
            </div>
          </div>
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            WinXX
          </h1>
          <p className="text-gray-400 text-lg tracking-wide">
            Windows Simulation Platform
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Card glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}
              ></div>

              {/* Card */}
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 cursor-pointer">
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.subtitle}</p>

                {/* Arrow indicator */}
                <div
                  className={`mt-6 flex items-center text-gray-500 group-hover:text-white transition-colors duration-300 ${
                    hoveredCard === feature.id ? 'translate-x-2' : ''
                  } transition-transform duration-300`}
                >
                  <span className="text-sm mr-2">Launch</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status bar */}
        <div className="flex items-center space-x-3 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>System Ready</span>
          </div>
          <span>•</span>
          <span>v1.0.0</span>
          <span>•</span>
          <span>Powered by Electron + React</span>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
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
