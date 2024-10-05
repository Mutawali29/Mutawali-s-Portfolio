import React from "react";
import { motion } from "framer-motion";
import Home from '../VideoPage/home';
import Tools from '../VideoPage/tools';
import Project from '../VideoPage/project';

// Variants for the animation
const pageVariants = {
    hidden: { opacity: 0, y: 500 },   // Start from below
    visible: { opacity: 1, y: 0 },    // Move to original position
    exit: { opacity: 0, y: 500 },    // Exit upwards
};

const VidPage = () => {
    return (
        <>
            <div className="mt-[-120px]" style={{ overflow: 'hidden' }}>
                {/* Sticky Navbar with animation */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"  // Apply exit animation
                    variants={pageVariants}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="sticky top-0 h-16 w-screen bg-gray-950 text-white flex justify-between items-center px-20 shadow-lg z-0"
                >
                    <div className="flex items-center">
                        <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-600 drop-shadow-[0_0_10px_cyan]">
                            QUSAY MUTAWALI
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="flex space-x-6 text-lg hidden sm:flex">
                        <p 
                            className="cursor-pointer font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-600 hover:drop-shadow-[0_0_5px_cyan]"
                            onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Home
                        </p>
                        <p 
                            className="cursor-pointer font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-blue-600 hover:drop-shadow-[0_0_5px_violet]"
                            onClick={() => document.getElementById('tools').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Tools
                        </p>
                        <p 
                            className="cursor-pointer font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-600 hover:drop-shadow-[0_0_5px_violet]"
                            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Projects
                        </p>
                    </div>
                </motion.div>

                {/* Animated Sections */}
                <motion.div
                    id="home"  // Add ID for smooth scrolling
                    initial="hidden"
                    animate="visible"
                    exit="exit"  // Apply exit animation
                    variants={pageVariants}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <Home />
                </motion.div>

                <motion.div
                    id="tools"  // Add ID for smooth scrolling
                    initial="hidden"
                    animate="visible"
                    exit="exit"  // Apply exit animation
                    variants={pageVariants}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <Tools />
                </motion.div>

                <motion.div
                    id="projects"  // Add ID for smooth scrolling
                    initial="hidden"
                    animate="visible"
                    exit="exit"  // Apply exit animation
                    variants={pageVariants}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <Project />
                </motion.div>
            </div>
        </>
    );
};

export default VidPage;
