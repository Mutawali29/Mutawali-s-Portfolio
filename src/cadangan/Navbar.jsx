import React from "react";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
    return (
        <div className="flex justify-between p-10">
            <div>
                <p className="tracking-widest cursor-pointer">QUSAY MUTAWALI</p>
            </div>
            <div>
                <HiBars3 className="text-4xl" />
            </div>
        </div>
    );
};

export default Navbar;
