import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import cosmic from '../Videos/Cosmic5CC.mp4';
import b1 from '../Videos/Bercandha.mp4';
import b2 from '../Videos/b2023.mp4';
import forest from '../Videos/forest.mp4';
import forest2 from '../Videos/forest2.mp4';
import influence from '../Videos/Influence.mp4';
import Iphone14 from '../Videos/Iphone14.mp4';
import jjStand from '../Videos/jjStand.mp4';
import jjWibu from '../Videos/jjWibu.mp4';
import kopi from '../Videos/kopiADS.mp4';
import car from '../Videos/mclarenQM.mp4';
import playDate from '../Videos/playDate.mp4';
import Logo from '../Videos/QMLogos.mp4';
import starboy from '../Videos/starboy.mp4';
import ipsClass from '../Videos/zolasips2022.mp4';

const projects = [
    { title: 'Forest Video Project', videoUrl: forest },
    { title: 'Forest2 Video Project', videoUrl: forest2 },
    { title: 'Influence Video Project', videoUrl: influence },
    { title: 'Iphone 14 Video Project', videoUrl: Iphone14 },
    { title: 'JJ Stand Video Project', videoUrl: jjStand },
    { title: 'JJ Wibu Video Project', videoUrl: jjWibu },
    { title: 'Kopi ADS Project', videoUrl: kopi },
    { title: 'McLaren QM Video Project', videoUrl: car },
    { title: 'Play Date Video Project', videoUrl: playDate },
    { title: 'QM Logos Project', videoUrl: Logo },
    { title: 'Starboy Video Project', videoUrl: starboy },
    { title: 'Zola IPS 2022 Project', videoUrl: ipsClass },
    { title: 'Cosmic Video Project', videoUrl: cosmic },
    { title: 'Bercandha Video Project', videoUrl: b1 },
    { title: 'B2023 Video Project', videoUrl: b2 },
];

const Project = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeVideo, setActiveVideo] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const handlePlay = (index) => {
    setActiveVideo(index);
    const videos = sliderRef.current.querySelectorAll('video');
    videos.forEach((video, idx) => {
      if (idx !== index) {
        video.pause();
      }
    });
  };

  const handlePause = () => {
    setActiveVideo(null);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

const iconAnim = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0, ease: "easeIn" } }
};

const iconAnim2 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5, ease: "easeIn" } }
};

  return (
    <div className="container mx-auto py-10 relative z-60 bg-gradient-to-b from-gray-950 to-black">
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={iconAnim}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 drop-shadow-[0_0_10px_blue]">MY VIDEO PROJECT</h1>
      </motion.div>

      {/* Slider container */}
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={iconAnim2}
      >
        <div className="relative">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 opacity-70 hover:opacity-100 z-10">
            &#9664;
          </button>
          <div
            ref={sliderRef}
            className="flex overflow-x-scroll hide-scrollbar space-x-4 py-4 cursor-grab mt-10"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`inline-block bg-white shadow-lg rounded-lg overflow-hidden w-64 md:w-72 lg:w-80 flex-shrink-0 transform transition-transform duration-300 hover:scale-110 ${
                  activeVideo === index ? 'scale-125 z-60' : 'scale-100'
                }`}
                style={{
                  boxShadow: '0px 0px 10px 2px rgba(0, 0, 255, 0.6)',
                }}
              >
                <video
                  controls
                  className="w-full h-40 md:h-44 lg:h-48 object-cover"
                  onPlay={() => handlePlay(index)}
                  onPause={handlePause}
                  onEnded={handlePause}
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 opacity-70 hover:opacity-100 z-10">
            &#9654;
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
