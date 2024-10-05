import React from "react";
import { motion } from "framer-motion";
import Home from '../Uiuxpage/Home';
import Tools from '../Uiuxpage/Tools';
import Design from '../Uiuxpage/Design';


const pageVariants = {
    hidden: { opacity: 0, y: 500 },  
    visible: { opacity: 1, y: 0 },   
    exit: { opacity: 0, y: 500 },   
};

const UiuxPage = () => {
    return (
        <>
            <div className="mt-[-120px]" style={{ overflow: 'hidden' }}>
                {/* Sticky Navbar with animation */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"  
                    variants={pageVariants}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="sticky top-0 h-16 w-screen  text-white flex justify-between items-center px-20 shadow-lg z-0"
                    style={{ backgroundColor: '#1F001F' }}
                >
                    <div className="flex items-center">
                        <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-600 drop-shadow-[0_0_10px_purple]">
                            QUSAY MUTAWALI
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="flex space-x-6 text-lg hidden sm:flex">
                        <p 
                            className="cursor-pointer font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-purple-600 hover:drop-shadow-[0_0_5px_green] relative z-70"
                            onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Home
                        </p>
                        <p 
                            className="cursor-pointer font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-teal-600 hover:drop-shadow-[0_0_5px_purple]"
                            onClick={() => document.getElementById('tools').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Tools
                        </p>
                        <p 
                            className="cursor-pointer font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-teal-600 hover:drop-shadow-[0_0_5px_pink]"
                            onClick={() => document.getElementById('design').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Design
                        </p>
                    </div>
                </motion.div>

                {/* Animated Sections */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={pageVariants}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <Home />
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={pageVariants}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <Tools />
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={pageVariants}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <Design />
                </motion.div>
            </div>
        </>
    );
};

export default UiuxPage;
