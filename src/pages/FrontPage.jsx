import React from "react";
import { motion } from "framer-motion"; 
import { Link } from "react-scroll"; 

import Skill from '../Frontpage/skill';
import Projects from '../Frontpage/project';
import Home from '../Frontpage/home';

const pageVariants = {
    hidden: { opacity: 0, y: 500 }, 
    visible: { opacity: 1, y: 0 } 
};

const FrontPage = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={pageVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}  
        >
            <div className="mt-[-160px]" style={{ overflow: 'hidden' }}>

                {/* Navigation Bar */}
                <div className="sticky top-0 h-16 w-screen bg-gray-950 text-white flex justify-between items-center px-20 shadow-lg z-80 mt-12">
                    <div className="text-lg ml-[-60px] sm:ml-0 sm:text-xl font-bold tracking-widest">
                        QUSAY <span className="text-blue-400">MUTAWALI</span>
                    </div>
                    <div className="flex space-x-8 hidden sm:flex">
                        {['Home', 'Skill', 'Projects', 'Exit'].map((section) => (
                            <Link 
                                key={section} 
                                to={section.toLowerCase()} 
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                offset={-70} 
                                className="relative group cursor-pointer transform duration-300"
                            >
                                {section}
                                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Sections */}
                <Home />
                <Skill />
                <Projects />
            </div>
        </motion.div>
    );
};

export default FrontPage;
