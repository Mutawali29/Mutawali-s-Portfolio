import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import qonaah from '../assets/Qonaah.png';
import hero from '../assets/heroAcademy.png';
import ecommerce from '../assets/ecommerce.png';
import pajero from '../assets/pajero.png';
import onemcn from '../assets/onemcn.png';
import next from '../assets/next.png';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const projectData = [
    {
        title: "Soto Qonaah Website Design",
        image: qonaah,
        github: "https://github.com/mutawali29/Soto-Qonaah-Website-Design",
        live: "https://soto-qonaah-website-design.netlify.app/"
    },
    {
        title: "Herro Academy Learning Center",
        image: hero,
        github: "https://github.com/mutawali29/herro-academy-learning-center-FRONT-END",
        live: "https://mutawali29.github.io/herro-academy-learning-center-FRONT-END/"
    },
    {
        title: "Modern E-Commerce",
        image: ecommerce,
        github: "https://github.com/mutawali29/modern-ecommerce",
        live: "https://modern-ecommerce-2903wudhkxsdu.netlify.app/"
    },
    {
        title: "Car Website",
        image: pajero,
        github: "https://github.com/mutawali29/croquembouche",
        live: "https://croquembouche-dc0dca-pajero-web.netlify.app/"
    },
    {
        title: "One Mcn Start-Up",
        image: onemcn,
        github: "https://github.com/mutawali29/gleeful-concha",
        live: "https://gleeful-concha-e34d13-one-mcn-startup.netlify.app/"
    },
    {
        title: "Web Services Next Js",
        image: next, // Ensure this URL is valid
        github: "https://github.com/mutawali29/pdf-to-word-tool",
        live: "https://www.ilovepdf.com/pdf_to_word"
    }
];

const titleAnim = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const rowAnim = (index) => ({
    hidden: { 
        opacity: 0, 
        x: index % 2 === 0 ? 300 : -300, // Pengaturan arah berdasarkan index
        scale: 0.95 // Menambahkan sedikit scale saat animasi tersembunyi untuk efek masuk yang lebih halus
    }, 
    visible: { 
        opacity: 1, 
        x: 0, 
        scale: 1, // Animasi scale ke 1 untuk kesan smooth growth
        transition: { 
            type: "spring", // Menggunakan tipe transisi spring untuk pergerakan yang lebih natural
            stiffness: 50,  // Menyesuaikan stiffness untuk efek spring yang lebih mulus
            damping: 10     // Mengurangi damping untuk menambah smoothness
        }
    }
});

const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div id="projects" className="h-[350vh] md:h-[170vh] lg:h-screen w-screen bg-black text-white flex flex-col items-center py-16 mb-80">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={titleAnim}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
                <h2 className="text-4xl font-semibold mb-8">Projects</h2>
            </motion.div>
            <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 gap-12 px-4 mt-16">
                {projectData.map((project, index) => {
                    const { ref: itemRef, inView: itemInView } = useInView({
                        triggerOnce: true,
                        threshold: 0.1
                    });

                    const rowIndex = Math.floor(index / 3);
                    const order = rowIndex === 0 ? index : [5, 4, 3][index - 3]; // Order for the second row

                    return (
                        <motion.div
                            key={index}
                            ref={itemRef}
                            initial="hidden"
                            animate={itemInView ? "visible" : "hidden"}
                            variants={rowAnim(rowIndex)} // Menggunakan rowAnim yang diperbarui
                            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:rotate-1 hover:shadow-2xl group border border-white"
                            style={{ width: '250px', height: '300px', borderBottomWidth: '6px' }}
                        >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 flex flex-col items-center justify-center text-center transition-opacity duration-300 group-hover:opacity-100">
                                <h3 
                                    className="text-lg font-semibold text-white mb-4"
                                    style={{ position: 'absolute', bottom: '0', width: '100%', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '8px 0', borderBottomWidth: '6px' }}
                                >
                                    {project.title}
                                </h3>
                                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors duration-300">
                                        <FaGithub className="text-3xl" />
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors duration-300">
                                        <FaExternalLinkAlt className="text-3xl" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
