import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import after from '../assets/aftereffect.png';
import priemere from '../assets/priemere.png';
import davinci from '../assets/davinci.png';

const titleAnim = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
};

const iconAnim = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
};

const morphStyle = {
    hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
    visible: {
        opacity: 1,
        clipPath: "inset(0 0 0 0)",
        transition: { duration: 1, delay: 1, ease: "easeOut" }
    }
};

const Tools = () => {
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const { ref: afterRef, inView: afterInView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const { ref: premiereRef, inView: premiereInView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const { ref: davinciRef, inView: davinciInView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section id="tools" className="min-h-screen w-screen bg-gray-950 flex flex-col text-white">
            <div>
                <motion.div
                    ref={titleRef}
                    initial="hidden"
                    animate={titleInView ? "visible" : "hidden"}
                    variants={titleAnim}
                >
                    <p className="text-center text-4xl font-bold mt-2 drop-shadow-[0_0_10px_blue]">
                        EDITING SOFTWARE
                    </p>
                </motion.div>
            </div>

            <div className="space-y-36 mt-28">
                {/* After Effect Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                    <motion.div
                        ref={afterRef}
                        initial="hidden"
                        animate={afterInView ? "visible" : "hidden"}
                        variants={iconAnim}
                    >
                        <img src={after} alt="Adobe After Effects icon" className="h-32 md:h-36 lg:h-40 ml-0 lg:ml-52" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={afterInView ? "visible" : "hidden"}
                        variants={morphStyle}
                    >
                        <p className="text-3xl md:text-4xl font-bold text-center lg:text-right lg:mr-52 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">
                            After Effect
                        </p>
                        <p className="max-w-md text-center lg:text-right lg:mr-52 drop-shadow-[0_0_10px_purple]">
                            Adobe After Effects excels in video editing with its ability to create advanced animations and impressive visual effects, as well as seamless integration with other Adobe software for an efficient workflow.
                        </p>
                    </motion.div>
                </div>

                {/* Premiere Pro Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                    <motion.div
                        initial="hidden"
                        animate={premiereInView ? "visible" : "hidden"}
                        variants={morphStyle}
                    >
                        <p className="text-3xl md:text-4xl font-bold text-center lg:text-left lg:ml-52 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-violet-600">
                            Premiere Pro
                        </p>
                        <p className="max-w-md text-center lg:text-left lg:ml-52 drop-shadow-[0_0_10px_purple]">
                            Adobe Premiere Pro is a powerful video editing software known for its advanced editing tools, seamless integration with other Adobe applications, and support for a wide range of formats.
                        </p>
                    </motion.div>
                    <motion.div
                        ref={premiereRef}
                        initial="hidden"
                        animate={premiereInView ? "visible" : "hidden"}
                        variants={iconAnim}
                    >
                        <img src={priemere} alt="Adobe Premiere Pro icon" className="h-32 md:h-36 lg:h-40 mr-0 lg:mr-52" />
                    </motion.div>
                </div>

                {/* Davinci Resolve Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                    <motion.div
                        ref={davinciRef}
                        initial="hidden"
                        animate={davinciInView ? "visible" : "hidden"}
                        variants={iconAnim}
                    >
                        <img src={davinci} alt="DaVinci Resolve icon" className="h-32 md:h-36 lg:h-40 ml-0 lg:ml-52" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={davinciInView ? "visible" : "hidden"}
                        variants={morphStyle}
                    >
                        <p className="text-3xl md:text-4xl font-bold text-center lg:text-right lg:mr-52 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-600">
                            Davinci Resolve
                        </p>
                        <p className="max-w-md text-center lg:text-right lg:mr-52 drop-shadow-[0_0_5px_red]">
                            DaVinci Resolve is a comprehensive video editing software renowned for its advanced color grading tools, robust editing features, and powerful audio post-production capabilities.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
