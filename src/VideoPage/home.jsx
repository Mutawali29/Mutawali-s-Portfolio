import React from "react";
import { motion } from "framer-motion"; 
import vEditing from '../assets/vEditing.png';

const headerAnim = {
    hidden: { opacity: 0, x: -200 },  
    visible: { opacity: 1, x: 0 }  
};

const morphStyle = {
    hidden: { opacity: 0, y: 0, clipPath: "inset(0 100% 0 0)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" },
    transition: { duration: 1, delay: 1, ease: "easeOut" }  
};

const imgAnim = {
    hidden: {opacity: 0, scale: 0.5},
    visible: {opacity: 1, scale: 1}
}

const Home = () => {
    // Create an array of particles to map over in the background
    const particles = Array.from({ length: 100 }, (_, index) => index);

    return (
        <>
            <section id="home" className="h-[170vh] w-screen flex md:flex-row md:h-screen flex-col bg-gray-950 relative items-center justify-between text-white p-24">
                {/* Moving Particles */}
                <div className="absolute inset-0 z-0">
                    {particles.map((particle) => {
                        // Generate random positions and animation duration for each particle
                        const randomX = Math.random() * 100;  // Random position for X (horizontal)
                        const randomY = Math.random() * 100;  // Random position for Y (vertical)
                        const randomDuration = Math.random() * 10 + 5;  // Random animation duration

                        return (
                            <div
                                key={particle}
                                className="particle"
                                style={{
                                    top: `${randomY}vh`,
                                    left: `${randomX}vw`,
                                    animationDuration: `${randomDuration}s`,
                                }}
                            ></div>
                        );
                    })}
                </div>

                <div className="relative z-10">
                    <motion.div
                        initial="hidden"     // Nama state awal
                        animate="visible"    // Nama state saat animasi terlihat
                        variants={headerAnim} // Animasi diambil dari headerAnim
                        transition={{ duration: 1, delay: 0.5 }}  // Durasi animasi
                    >
                        <p className="text-5xl font-bold max-w-md bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-600">
                            Unleash Your Imagination, One Frame at a Time
                        </p>
                    </motion.div>

                    {/* MorphStyle Animation */}
                    <motion.div
                        initial="hidden"     // Nama state awal
                        animate="visible"    // Nama state saat animasi terlihat
                        variants={morphStyle} // Animasi diambil dari morphStyle
                        transition={morphStyle.transition} // Durasi dan transisi dengan delay 1 detik
                    >
                        <p className="mt-4 text-lg max-w-md italic drop-shadow-[0_0_2px_cyan]">
                            Seamless editing, stunning visuals, and storytelling brought to life. Craft your vision with the tools of a true video artist.
                        </p>
                    </motion.div>
                </div>

                <div className="relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={imgAnim}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <img src={vEditing} alt="vEditing" className="h-[350px] lg:h-[500px]" style={{ height: '' }} />
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;
