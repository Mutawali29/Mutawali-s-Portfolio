import React, { useState, useEffect } from "react";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { motion } from "framer-motion";  // Import framer-motion
import Menu from "./Menu";

const Navbar = ({ isFrontPageVisible }) => { // Pass isFrontPageVisible prop to control animation
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(prev => !prev);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener("mousedown", handleMenuToggle);
        } else {
            document.removeEventListener("mousedown", handleMenuToggle);
        }
        return () => {
            document.removeEventListener("mousedown", handleMenuToggle);
        };
    }, [isMenuOpen]);

    // Variants for animating text and icon
    const fadeOutVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="relative flex justify-between p-10">
            {/* Animasi pada tulisan QUSAY MUTAWALI */}
            <motion.div
                initial="visible"
                animate={isFrontPageVisible ? "hidden" : "visible"} // Animate out when FrontPage is visible
                variants={fadeOutVariants}
                transition={{ duration: 0.5 }}  // Set the transition duration
            >
                <p className="tracking-widest cursor-pointer relative z-50" style={{userSelect: "none"}}>
                    QUSAY MUTAWALI
                </p>
            </motion.div>

            {/* Animasi pada ikon HiBars3 atau HiOutlineXMark */}
            <motion.div
                initial="visible"
                animate={isFrontPageVisible ? "hidden" : "visible"}  // Animate out when FrontPage is visible
                variants={fadeOutVariants}
                transition={{ duration: 0.5 }}  // Set the transition duration
            >
                {isMenuOpen ? (
                    <HiOutlineXMark
                        className="text-4xl cursor-pointer relative z-50"
                        onClick={handleMenuToggle}
                    />
                ) : (
                    <HiBars3
                        className="text-4xl cursor-pointer relative z-50"
                        onClick={handleMenuToggle}
                    />
                )}
            </motion.div>

            {/* Menu component */}
            <Menu isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
        </div>
    );
};

export default Navbar;
