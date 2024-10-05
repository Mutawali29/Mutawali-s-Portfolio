import React, { useState } from "react";
import { motion } from "framer-motion";
import img from '../assets/uiux.png';
import UiuxPage from './UiuxPage';  // Ensure this path is correct

const textVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 }
};

const Uiux = () => {
    const [showUiuxPage, setShowUiuxPage] = useState(false);

    const handleButtonClick = () => {
        setShowUiuxPage(true);  // Show the UiuxPage component
    };

    return (
        <>
            {!showUiuxPage ? (
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
                        <p className="font-thin" style={{userSelect: "none"}}>002</p>
                    </motion.div>

                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-5xl font-bold mt-10" style={{userSelect: "none"}}>UI UX Designer</p>
                    </motion.div>

                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <p className="italic text-2xl" style={{userSelect: "none"}}>Visual Rework</p>
                    </motion.div>

                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <button
                            onClick={handleButtonClick}  // Handle button click to show UiuxPage
                            className="border-2 w-52 border-white p-2 mt-14 text-2xl hover:bg-white hover:text-black hover:w-48 transition-all duration-300"
                            style={{userSelect: "none"}}
                        >
                            Discover More
                        </button>
                    </motion.div>
                </motion.div>
            ) : (
                <UiuxPage />  // Render UiuxPage if showUiuxPage is true
            )}

            <motion.div
                initial={{ opacity: 0, scale: 0.65 }}
                animate={{ opacity: showUiuxPage ? 0 : 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.65 }}
                transition={{ duration: 0.5 }}
                className="absolute mt-[-200px]  ml-20 sm:ml-40 ls:ml-48 ll:ml-64 mt-[-50px] lg:mt-[-410px] lg:ml-80 opacity-20"
            >
                <img src={img} alt="img" className="h-[300px] lg:h-[480px] lg:ml-12 opacity-30" />
            </motion.div>
        </>
    );
};

export default Uiux;
