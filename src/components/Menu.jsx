import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./Menuu/Contact"; // Import the Contact component
import Cv from "./Menuu/CV"; // Ensure correct import for CV

const Menu = ({ isMenuOpen, handleMenuToggle }) => {
    const menuRef = useRef(null);
    const [showContact, setShowContact] = useState(false); // State to manage the visibility of Contact component
    const [showCv, setShowCv] = useState(false); // State to manage the visibility of Cv component

    // Function to handle clicks outside of the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && !showContact && !showCv) {
                handleMenuToggle(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setShowContact(false); // Hide Contact when Escape is pressed
                setShowCv(false);      // Hide Cv when Escape is pressed
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown); // Add keydown listener

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown); // Clean up the listener
        };
    }, [menuRef, handleMenuToggle, showContact, showCv]);

    // Variants for the menu animations
    const menuVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 }
    };

    // Variants for the container animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    // Variants for the Contact component animations
    const contactVariants = {
        hidden: { opacity: 0, y: 100 }, // Start from below the screen
        visible: { opacity: 1, y: 0 },  // Slide to the center (visible)
        exit: { opacity: 0, y: -100 }   // Slide out to the top
    };

    // Handle Contact button click
    const handleContactClick = () => {
        setShowContact(true); // Show Contact component when clicked
        setShowCv(false);     // Ensure CV is hidden when Contact is shown
    };

    // Handle CV button click
    const handleCvClick = () => {
        setShowCv(true);      // Show CV component when clicked
        setShowContact(false); // Ensure Contact is hidden when CV is shown
    };

    return (
        <>
            <AnimatePresence>
                {isMenuOpen && !showContact && !showCv && ( // Show menu if it's open and neither Contact nor CV are shown
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
                        <motion.div
                            ref={menuRef} // Bind the ref to this div for click outside handling
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={containerVariants}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-900 text-white rounded-lg shadow-lg p-8 md:p-16 flex flex-col relative max-w-lg md:max-w-4xl w-full"
                        >
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"
                                variants={menuVariants}
                            >
                                {['Dashboard', 'Work', 'CV', 'Contact'].map((item, index) => (
                                    <motion.div
                                        key={`${item}-${index}`}  // Unique key for each item
                                        variants={menuVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{ duration: 0.5, delay: 0.1 * index }}
                                        className="relative py-6 px-8 md:py-10 md:px-16 cursor-pointer text-center text-2xl md:text-3xl group"
                                        onClick={item === "Contact" ? handleContactClick : item === "CV" ? handleCvClick : null} // Handle Contact and CV click
                                    >
                                        {item}
                                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white h-1 w-12 md:w-16 origin-bottom transition-all duration-300 scale-y-0 group-hover:scale-y-100"></span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Show the Contact component */}
            <AnimatePresence>
                {showContact && ( // Show Contact component if showContact is true
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={contactVariants}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-50 flex justify-center items-center"
                    >
                        <Contact onClose={() => setShowContact(false)} /> {/* Render Contact component with close prop */}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Show the CV component */}
            <AnimatePresence>
                {showCv && ( // Show Cv component if showCv is true
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={contactVariants}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-50 flex justify-center items-center"
                    >
                        <Cv onClose={() => setShowCv(false)} /> {/* Render Cv component with close prop */}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Menu;
