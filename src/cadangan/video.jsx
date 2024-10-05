import React, { useState } from "react";
import { motion } from "framer-motion";
import img from '../assets/videoEditor.png';
import VidPage from "./VideoPage"; // pastikan ini jalur yang benar

const textVariants = {
    hidden: { opacity: 0, y: -100 }, 
    visible: { opacity: 1, y: 0 }  
};

const Video = () => {
    const [showVidPage, setShowVidPage] = useState(false);

    const handleButtonClick = () => {
        setShowVidPage(true);
    };

    return (
        <>
            {!showVidPage ? (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={textVariants}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center mt-10 relative z-20"
                >
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <p className="font-thin" style={{userSelect: "none"}}>003</p>
                    </motion.div>

                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-5xl font-bold mt-10" style={{userSelect: "none"}}>VIDEO EDITOR</p>
                    </motion.div>

                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <p className="italic text-2xl" style={{userSelect: "none"}}>Dynamic Video Specialist</p>
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
            ) : (
                <VidPage />
            )}

            <motion.div
                initial={{ opacity: 0, scale: 0.65 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.65 }}
                transition={{ duration: 0.5 }}
                className="absolute mt-[-360px] ml-80 opacity-20"
            >
                <img src={img} alt="img" className="h-[450px] ml-24 opacity-30" />
            </motion.div>
        </>
    );
};

export default Video;
