import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3, FaReact, FaVuejs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const textAnim = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const iconAnim = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const morphStyle = {
    initial: { opacity: 0, y: 50, clipPath: "inset(0 100% 0 0)" },
    animate: { opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" },
    transition: { duration: 1, ease: "easeOut" }
};

const Skill = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <div id="skill" className="h-[200vh] md:h-screen w-screen bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950 text-white flex flex-col justify-center items-center">
            <div className="mb-16">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={textAnim}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <h1 className="text-4xl font-semibold text-center">What I Use</h1>
                </motion.div>
            </div>
            <div className=" flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-16">
                {/* Icons Section */}
                <div className="grid grid-cols-3 gap-8 md:grid-cols-3 md:max-w-[600px]">
                    {[FaHtml5, FaCss3, SiJavascript, FaReact, RiNextjsFill, FaVuejs, SiTypescript, FaGitAlt, SiRedux].map((Icon, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={iconAnim}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.3 }}
                            className="flex justify-center items-center p-4"
                        >
                            <Icon className={`text-5xl shadow-xl transform transition-transform duration-300 hover:scale-125 ${index === 2 ? 'text-yellow-300' : ''} ${index === 0 ? 'text-orange-500' : ''} ${index === 1 ? 'text-blue-500' : ''} ${index === 3 ? 'text-cyan-400' : ''} ${index === 4 ? 'text-black' : ''} ${index === 5 ? 'text-green-500' : ''} ${index === 6 ? 'text-blue-500' : ''} ${index === 7 ? 'text-orange-700' : ''} ${index === 8 ? 'text-purple-500' : ''}`} />
                        </motion.div>
                    ))}
                </div>
                {/* Experience Section */}
                <div className="flex flex-col space-y-8 md:space-y-8">
                    <motion.div
                        initial={morphStyle.initial}
                        animate={hasAnimated ? morphStyle.animate : morphStyle.initial}
                        transition={{ ...morphStyle.transition, delay: 1 }}
                        className="text-center p-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow-lg"
                    >
                        <p className="font-semibold text-xl">2023</p>
                        <p className="text-xl font-semibold">Junior React Developer</p>
                        <p className="font-light">Personal</p>
                    </motion.div>
                    <motion.div
                        initial={morphStyle.initial}
                        animate={hasAnimated ? morphStyle.animate : morphStyle.initial}
                        transition={{ ...morphStyle.transition, delay: 1.6 }}
                        className="text-center p-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow-lg"
                    >
                        <p className="font-semibold text-xl">2024</p>
                        <p className="text-xl font-semibold">Junior Front-End Developer</p>
                        <p className="font-light">Personal</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
