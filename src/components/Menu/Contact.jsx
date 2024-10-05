import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";

const Contact = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
            <div className="relative bg-gray-900 text-white rounded-lg shadow-lg p-8 w-full max-w-lg">
                {/* Tombol Exit */}
                <button
                    onClick={onClose} // Panggil fungsi onClose untuk menutup halaman
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl"
                >
                 <HiOutlineX />   
                </button>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse">
                    Get in Touch
                </h1>

                {/* Contact Info */}
                <div className="text-center mb-12">
                    <p className="text-lg md:text-2xl font-light mb-4">
                        I'd love to hear from you. Whether it's a project, job opportunity, or just a chat.
                    </p>
                    <p className="text-sm md:text-lg font-light">
                        Email: <a href="mailto:your.email@example.com" className="underline hover:text-blue-400 transition-colors">mutawaliali29@gmail.com</a>
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-8 justify-center">
                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/qusaymutawali?igsh=MWs4cDZ5ZHN3ZXVzdw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-5xl md:text-6xl text-white hover:text-pink-500 transition-colors transform hover:scale-125"
                    >
                        <FaInstagram />
                    </a>
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/qusay-mutawali-585495288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-5xl md:text-6xl text-white hover:text-blue-500 transition-colors transform hover:scale-125"
                    >
                        <FaLinkedin />
                    </a>
                    {/* GitHub */}
                    <a
                        href="https://github.com/Mutawali29?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-5xl md:text-6xl text-white hover:text-gray-400 transition-colors transform hover:scale-125"
                    >
                        <FaGithub />
                    </a>
                </div>

                {/* Footer Animation */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 animate-pulse"></div>
            </div>
        </div>
    );
};

export default Contact;
