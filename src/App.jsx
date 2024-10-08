import React from 'react';
import { Route, Routes, useLocation, NavLink } from 'react-router-dom'; 
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Front from './pages/frontend';
import Uiux from './pages/uiux';
import Video from './pages/video';
import { GoHorizontalRule } from "react-icons/go";
import './index.css';

function App() {
  const location = useLocation();

  return (
    <div className='min-h-screen w-full bg-black text-white'>
      <Navbar />

      <div className="relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/front" element={<Front />} />
            <Route path="/uiux" element={<Uiux />} />
            <Route path="/video" element={<Video />} />
            <Route path="/front" element={<Front />} />
          </Routes>
        </AnimatePresence>
      </div>

      <div className='flex justify-center space-x-4 mt-8'>
        <NavLink 
          to="/front" 
          className={({ isActive }) => isActive ? 
            'z-20 text-white transition-all duration-300' : 
            'z-20 text-gray-500 hover:text-white transition-all duration-300'}
        >
          <GoHorizontalRule className="text-4xl" />
        </NavLink>
        <NavLink 
          to="/uiux" 
          className={({ isActive }) => isActive ? 
            'z-20 text-white transition-all duration-300' : 
            'z-20 text-gray-500 hover:text-white transition-all duration-300'}
        >
          <GoHorizontalRule className="text-4xl" />
        </NavLink>
        <NavLink 
          to="/video" 
          className={({ isActive }) => isActive ? 
            'z-20 text-white transition-all duration-300 mb-20' : 
            'z-20 text-gray-500 hover:text-white transition-all duration-300 mb-20'}
        >
          <GoHorizontalRule className="text-4xl" />
        </NavLink>
      </div>
    </div>
  );
}

export default App;
