// import React from "react";

// const Navbar = () => {
//     return(
//         <>
//         <div className="sticky top-0 h-16 w-screen bg-gray-950 text-white flex justify-between items-center px-20 shadow-lg z-80 mt-12">
//                     <div className="text-xl font-bold tracking-widest">
//                         QUSAY <span className="text-blue-400">MUTAWALI</span>
//                     </div>
//                     <div className="flex space-x-8">
//                         {['Home', 'Skill', 'Projects', 'Exit'].map((section) => (
//                             <Link 
//                                 key={section} 
//                                 to={section.toLowerCase()} 
//                                 smooth={true} // Smooth scroll effect
//                                 duration={500} // Duration of the scroll effect
//                                 spy={true} // Active link tracking
//                                 offset={-70} // Offset for sticky navbar
//                                 className="relative group cursor-pointer transform duration-300"
//                             >
//                                 {section}
//                                 <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//         </>
//     )
// };

// export default Navbar;