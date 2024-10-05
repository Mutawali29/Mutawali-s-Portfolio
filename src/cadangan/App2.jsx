import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Front from './pages/frontend';
import Uiux from './pages/uiux';
import Video from './pages/video';
import { GoHorizontalRule } from "react-icons/go";
import './index.css'; 

function App() {
  const [activePage, setActivePage] = useState('front');

  const getButtonClass = (page) => {
    return activePage === page
      ? 'z-20 text-white transition-all duration-300'
      : 'z-20 text-gray-500 hover:text-white transition-all duration-300';
  };

  return (
    <>
      <div className='min-h-screen w-full bg-black text-white'>
        <Navbar />
        
        <div className="relative">
          {activePage === 'front' && <Front />}
          {activePage === 'uiux' && <Uiux />}
          {activePage === 'video' && <Video />}
        </div>

        <div className='flex justify-center space-x-4 mt-8'>
          <button
            className={getButtonClass('front')}
            onClick={() => setActivePage('front')}
          >
            <GoHorizontalRule className="text-4xl" />
          </button>
          <button
            className={getButtonClass('uiux')}
            onClick={() => setActivePage('uiux')}
          >
            <GoHorizontalRule className="text-4xl" />
          </button>
          <button
            className={getButtonClass('video')}
            onClick={() => setActivePage('video')}
          >
            <GoHorizontalRule className="text-4xl" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
