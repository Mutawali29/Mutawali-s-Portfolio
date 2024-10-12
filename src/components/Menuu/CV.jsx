import React from "react";
import { useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";


const Cv = ({ onClose }) => {
    const navigate = useNavigate();

    const handleDownload = () => {
        const cvContent = document.getElementById("cv-content");
        const options = {
            margin: 0.5,
            filename: 'Qusay_Mutawali_CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 }, // Improves quality
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        html2pdf()
            .from(cvContent)
            .set(options)
            .save();
    };

    

    return (
        <div className="bg-gray-100 p-6 max-h-screen overflow-y-auto text-black">
            {/* Buttons */}
            <div className="flex justify-between mb-4">
                {/* Tombol Exit */}
                <button
                    onClick={onClose} // Panggil fungsi handleExit untuk keluar
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Exit
                </button>
                
                <button
                    onClick={handleDownload}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Download CV as PDF
                </button>
            </div>

            {/* CV Content */}
            <div id="cv-content">
                {/* Header */}
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold">Qusay Mutawali</h1>
                    <p className="text-xl text-gray-600">Front-End Developer | Designer | Video Editor</p>
                    <p className="text-gray-600">Email: mutawaliali29@gmail.com | Phone: +62 822 3274 6520</p>
                </header>

                {/* Personal Information */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Profile</h2>
                    <p className="text-gray-700">
                        I am currently pursuing a degree in Computer Science, and I am an experienced Front-End Developer with good understanding in HTML, CSS, JavaScript, and frameworks like React. In addition, I have intermediate skills as a Designer, having completed several projects using Figma. I am also proficient in Video Editing, utilizing tools such as After Effects, Premiere Pro, and DaVinci Resolve for my creative projects.
                    </p>
                </section>
                <hr className="my-4" />

                {/* Education */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Education</h2>
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold">UIN Maulana Malik Ibrahim Malang</h3>
                        <p className="text-gray-600">Malang, East Java, Indonesia | August 2023 - Present</p>
                        <p className="text-gray-700">Pursuing a degree in Computer Science.</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
                        <p className="text-gray-600">Malang, Indonesia | Graduated: 2027</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold">High School Diploma</h3>
                        <p className="text-gray-600">Madiun, Indonesia | Graduated: 2022</p>
                    </div>
                </section>
                <hr className="my-4" />

                {/* Experience */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold">Freelancer Front-End Developer</h3>
                        <p className="text-gray-600">December 2023 - Present</p>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>Developed responsive websites and web applications for various clients.</li>
                            <li>Collaborated with designers to implement user-friendly interfaces.</li>
                            <li>Utilized modern frameworks and libraries such as React</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold">Freelancer Video Editor</h3>
                        <p className="text-gray-600">Upwork, Fiver | January 2022 - Present</p>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>Edited promotional videos and content for clients across various industries.</li>
                            <li>Utilized tools such as After Effects and Premiere Pro for video production.</li>
                            <li>Maintained high-quality standards and met tight deadlines.</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold">Media Kreatif</h3>
                        <p className="text-gray-600">Fun Java Community | August 2024 - Present</p>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>Contributed to creative media projects for community events.</li>
                            <li>Collaborated with team members to develop engaging content.</li>
                            <li>Assisted in organizing workshops and training sessions.</li>
                        </ul>
                    </div>
                </section>
                <hr className="my-4" />

                {/* Skills */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>HTML, CSS, JavaScript</li>
                        <li>React</li>
                        <li>Figma</li>
                        <li>Video Editing (After Effects, Premiere Pro, DaVinci Resolve)</li>
                    </ul>
                </section>

                {/* Footer */}
                <footer className="text-center mt-8">
                    <p className="text-gray-600">&copy; 2024 Qusay Mutawali. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Cv;
