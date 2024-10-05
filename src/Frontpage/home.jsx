import React from "react";
import { motion } from "framer-motion";
import web from '../assets/webDev.png';
import './home.css';

const textAnim = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
};

const textAnimate = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
};

const Home = () => {
    return (
        <div id="home" className="h-[140vh] lg:h-[110vh] w-screen bg-gray-950 text-white flex items-center justify-center px-4 md:px-10 lg:px-36 relative">
            <div className="absolute inset-0 bg-gray-950 z-0">
                {/* Optional: Add background animation or effect here if desired */}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between sm:mt-0 space-y-8 lg:space-y-0 lg:space-x-20 lg:mt-0">
                {/* Text Content */}
                <div className="space-y-6 max-w-lg text-center lg:text-left">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={textAnim}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }} 
                    >
                        <h1 className="text-3xl font-semibold tracking-widest text-blue-400">INTERFACE BUILDER</h1>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={textAnim}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1 }} 
                    >
                        <h1 className="text-5xl md:text-6xl font-bold gradient-text">Front-End Developer</h1>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={textAnimate}
                        transition={{ duration: 1, ease: 'easeOut', delay: 1.5}}
                    >
                        <p className="text-base md:text-lg animate-fade-in-up">Building intuitive and responsive interfaces with the latest front-end technologies for a high-quality user experience.</p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={textAnimate}
                        transition={{ duration: 1, ease: 'easeOut', delay: 1.7}}
                    >
                        <button className="mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-600 hover:shadow-2xl">Hire me</button>
                    </motion.div>
                </div>
                
                <div className="relative">
                    <img src={web} alt="web" className="h-72 lg:h-96  transform transition-transform hover:scale-110 shadow-lg rounded-lg"/>
                </div>
            </div>
        </div>
    );
};

export default Home;
