import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import userAnalysis from '../assets/UserAnalysis.png';
import logoDesigning from '../assets/LogoDesigning.png';
import socialMedia from '../assets/SocialMediaCore.png';

const moveAnim = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Tools = () => {
  const [isInView, setIsInView] = useState(false);
  const toolsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (toolsRef.current) {
      observer.observe(toolsRef.current);
    }

    return () => {
      if (toolsRef.current) {
        observer.unobserve(toolsRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className="w-screen h-[200vh] relative z-50 lg:h-screen text-white p-6"
        style={{ backgroundColor: '#1F001F' }}
        id="tools"
        ref={toolsRef}
      >
        <div className="flex flex-col lg:flex-row items-center lg:justify-center space-y-12 lg:space-y-0 lg:space-x-16 mt-[-100px]">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={moveAnim}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="w-full lg:w-72 p-4 rounded-xl backdrop-blur-md bg-opacity-30 border border-gray-300 hover:scale-110 transition-all duration-300 cursor-pointer">
              <img src={userAnalysis} alt="User Analysis" className="mx-auto h-48 lg:h-52" />
              <h1 className="font-bold text-center text-xl">User-Centered Design</h1>
              <p className="max-w-[16rem] mx-auto text-center lg:text-justify leading-6">
                Prioritize the needs and behavior of users to create intuitive and satisfying experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={moveAnim}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="w-full lg:w-72 p-4 rounded-xl backdrop-blur-md bg-opacity-30 border border-gray-300 hover:scale-110 transition-all duration-300 cursor-pointer">
              <img src={logoDesigning} alt="Logo Designing" className="mx-auto h-48 lg:h-52" />
              <h1 className="font-bold text-center">Consistency and Easy Navigation</h1>
              <p className="max-w-[16rem] mx-auto text-center lg:text-justify leading-6">
                Maintain uniform design elements to ensure a smooth and familiar navigation experience.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={moveAnim}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="w-full lg:w-72 p-4 rounded-xl backdrop-blur-md bg-opacity-30 border border-gray-300 hover:scale-110 transition-all duration-300 cursor-pointer">
              <img src={socialMedia} alt="Social Media Core" className="mx-auto h-48 lg:h-52" />
              <h1 className="font-bold text-center lg:max-w-[16rem]">Responsiveness and Accessibility</h1>
              <p className="max-w-[16rem] mx-auto text-center lg:text-justify leading-6">
                Ensure the design adapts to all devices and is accessible to all users, including those with special needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Tools;
