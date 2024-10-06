import React, { useState,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';
import './components/AppMain.css'
import Dashboard from './pages/Dashboard';


function App() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  //------------------- TOGGLE NIGHT MODE -------------------
  const toggleMode = () => {
    const isNightMode = document.body.classList.toggle('night-mode');
    localStorage.setItem('mode', isNightMode ? 'night' : 'day');
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'night') {
      document.body.classList.add('night-mode');
    }

  }, []);

  // ------------------- TOGGLE FULLSCREEN -------------------
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard
          toggleMode={toggleMode}
          toggleFullScreen={toggleFullScreen}
          loading={loading}
          setLoading={setLoading}
        />} />
     </Routes>
    </div>
  );
}

export default App;
