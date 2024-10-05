import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import Front from './pages/frontend';
import Uiux from './pages/uiux';
import Video from './pages/video';
import { GoHorizontalRule } from "react-icons/go";
import './index.css'; 

function App() {
  // Fungsi untuk mendapatkan kelas aktif untuk NavLink
  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? 'z-20 text-white transition-all duration-300'
      : 'z-20 text-gray-500 hover:text-white transition-all duration-300';
  };

  return (
    <Router>
      <div className='min-h-screen w-full bg-black text-white'>
        <Navbar />

        <div className="relative">
          <Routes>
            <Route path="/front" element={<Front />} />
            <Route path="/uiux" element={<Uiux />} />
            <Route path="/video" element={<Video />} />
            <Route path="/" element={<Front />} />
          </Routes>
        </div>

        <div className='flex justify-center space-x-4 mt-8'>
          <NavLink to="/front" className={getNavLinkClass}>
            <GoHorizontalRule className="text-4xl" />
          </NavLink>
          <NavLink to="/uiux" className={getNavLinkClass}>
            <GoHorizontalRule className="text-4xl" />
          </NavLink>
          <NavLink to="/video" className={getNavLinkClass}>
            <GoHorizontalRule className="text-4xl" />
          </NavLink>
        </div>
      </div>
    </Router>
  );
}

export default App;
