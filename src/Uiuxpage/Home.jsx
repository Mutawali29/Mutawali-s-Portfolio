import React from "react";
import { motion } from "framer-motion"; // Tambahkan import untuk motion
import planet from '../assets/planet.png';

const slideAnim = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.8 } },
};
const btnAnim = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 1 } },
};
const planetAnim = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 1 } },
};

const Home = () => {
    return (
        <>
            <div
                id="home"
                className="w-screen h-[150vh] md:h-[150vh] relative text-white p-6"
                style={{ backgroundColor: '#1F001F' }} // Mempertahankan latar belakang yang lama
            >
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:ml-32 flex flex-col items-center md:items-start">
                        {/* Teks dengan animasi */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={slideAnim}
                        >
                            <p className="font-bold text-3xl md:text-5xl max-w-xl text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-fadeIn">
                                Easy navigation and a clear design boost user satisfaction.
                            </p>
                        </motion.div>

                        {/* Tombol dengan animasi hover */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={btnAnim}
                        >
                            <button className="border p-2 rounded-full px-8 md:px-12 mt-5 hover:bg-violet-400 transition-all duration-300 hover:scale-110 shadow-lg shadow-violet-500/50">
                                HIRE ME
                            </button>
                        </motion.div>
                    </div>

                    {/* Planet dengan efek glow */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={planetAnim}
                    >
                        <div className="relative mt-10 md:mt-0">
                            <img
                                src={planet}
                                alt="planet"
                                className="w-64 md:w-[500px] animate-glow"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Keyframes untuk animasi */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 2s ease-in-out;
                }
                @keyframes glow {
                    0% {
                        filter: brightness(1) blur(0);
                        box-shadow: 0 0 px rgba(255, 255, 255, 0.5);
                    }
                    50% {
                        filter: brightness(1.5) blur(2px);
                        box-shadow: 0 0 px rgba(255, 255, 255, 0.9);
                    }
                    100% {
                        filter: brightness(1) blur(0);
                        box-shadow: 0 0 px rgba(255, 255, 255, 0.5);
                    }
                }
                .animate-glow {
                    animation: glow 1.5s infinite ease-in-out;
                }
            `}</style>
        </>
    );
};

export default Home;
