import React, { useState } from "react";
import { motion } from "framer-motion";
import FrontPage from './FrontPage'; 
import img from '../assets/frontend.png';
import { useNavigate } from "react-router-dom";

const textVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 }
};

const Front = () => {
    const [showFrontPage, setShowFrontPage] = useState(false);
    const navigate = useNavigate(); 

    const handleButtonClick = () => {
        setShowFrontPage(true);
        
    };

    return (
        <>
            {showFrontPage ? (
                <FrontPage /> 
            ) : (
                <>
                <div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={textVariants}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative text-center mt-10 z-20"
                    >
                        <motion.div
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <p className="font-thin" style={{userSelect: "none"}}>001</p>
                        </motion.div>

                        <motion.div
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-5xl font-bold mt-10" style={{userSelect: "none"}}>FRONT-END DEVELOPER</p>
                        </motion.div>

                        <motion.div
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <p className="italic text-2xl" style={{userSelect: "none"}}>Interface Builder</p>
                        </motion.div>

                        <motion.div
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <button 
                                onClick={handleButtonClick} 
                                className="border-2 w-52 border-white p-2 mt-14 text-2xl hover:bg-white hover:text-black hover:w-48 transition-all duration-300" 
                                style={{userSelect: "none"}}
                            >
                                Discover More
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.65 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.65 }}
                        transition={{ duration: 0.5 }}
                        className="absolute mt-[-480px] ml-64 opacity-20"
                    >
                        <img src={img} alt="img" className="h-[750px] opacity-30" />
                    </motion.div>
                </div>
                </>
            )}
        </>
    );
};

export default Front;
