import React from "react";
import img from '../assets/frontend.png';

const Front = () => {
    return(
        <>
            <div className="relative text-center mt-10 z-20">
                <div>
                    <p className="font-thin">001</p>
                </div>
                <div>
                    <p className="text-5xl font-bold mt-10">FRONT-END DEVELOPER</p>
                </div>
                <div>
                    <p className="italic text-2xl">Interface Builder</p>
                </div>
                <div>
                    <button className="border-2 w-52 border-white p-2 mt-14 text-2xl hover:bg-white hover:text-black hover:w-48 transition-all duration-300">Discover More</button>
                </div>
            </div>

            <div className="absolute mt-[-480px] ml-64 opacity-20">
                <img src={img} alt="img" className="h-[750px]"/>
            </div>
        </>
    )
};

export default Front;