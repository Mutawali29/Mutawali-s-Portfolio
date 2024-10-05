import React from "react";
import design1 from '../assets/codesphere.png';
import design2 from '../assets/nextpay.png';
import design3 from '../assets/vrDesign.png';
import design4 from '../assets/rokok.png';

const Design = () => {
    return (
        <>
            <div
                className="w-screen h-[280vh] sm:h-[150vh] lg:h-screen relative z-50 text-white p-6"
                style={{ background: 'linear-gradient(to bottom, #1F001F, #000000)' }}
                id="design"
            >
                <h1 className="text-center text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    My Creative Projects
                </h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
                    {/* Project 1 */}
                    <a
                        href="https://www.figma.com/proto/n4GasO5iS2Zisuo0cGQxle/codesphere?node-id=1-3&node-type=canvas&t=vZduECsGsf4CjZx0-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                        target=""
                        rel=""
                        className="relative group bg-gray-800 rounded-xl p-4 w-56 h-80 flex flex-col items-center justify-between transform transition duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/50"
                    >
                        <img src={design1} alt="Project 1" className="w-full h-3/4 object-cover rounded-md transition duration-300 group-hover:opacity-80" />
                        <p className="text-white font-semibold mt-4 transition duration-300 group-hover:text-pink-500">
                            Codesphere Design
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-40 rounded-xl transition duration-300"></div>
                    </a>

                    {/* Project 2 */}
                    <a
                        href="https://www.figma.com/proto/vrJA3vZKwOQCtHQzdvTBdE/Nextpay?node-id=1-2&node-type=canvas&t=3z9XAy8dezdpat0Y-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                        target=""
                        rel=""
                        className="relative group bg-gray-800 rounded-xl p-4 w-56 h-80 flex flex-col items-center justify-between transform transition duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/50"
                    >
                        <img src={design2} alt="Project 2" className="w-full h-3/4 object-cover rounded-md transition duration-300 group-hover:opacity-80" />
                        <p className="text-white font-semibold mt-4 transition duration-300 group-hover:text-purple-500">
                            Nextpay Design
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-40 rounded-xl transition duration-300"></div>
                    </a>

                    {/* Project 3 */}
                    <a
                        href="https://www.figma.com/proto/JFs5NEpXThSeyEqF4Sh1eu/VRDesign?node-id=1-2&node-type=canvas&t=BkkPydVTdXahUhSz-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
                        target=""
                        rel=""
                        className="relative group bg-gray-800 rounded-xl p-4 w-56 h-80 flex flex-col items-center justify-between transform transition duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                    >
                        <img src={design3} alt="Project 3" className="w-full h-3/4 object-cover rounded-md transition duration-300 group-hover:opacity-80" />
                        <p className="text-white font-semibold mt-4 transition duration-300 group-hover:text-blue-500">
                            Vr Design
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-40 rounded-xl transition duration-300"></div>
                    </a>

                    {/* Project 4 */}
                    <a
                        href="https://yourproject4.com"
                        target=""
                        rel=""
                        className="relative group bg-gray-800 rounded-xl p-4 w-56 h-80 flex flex-col items-center justify-between transform transition duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/50"
                    >
                        <img src={design4} alt="Project 4" className="w-full h-3/4 object-cover rounded-md transition duration-300 group-hover:opacity-80" />
                        <p className="text-white font-semibold mt-4 transition duration-300 group-hover:text-green-500">
                            Jaya Tembakau Design
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-40 rounded-xl transition duration-300"></div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Design;
