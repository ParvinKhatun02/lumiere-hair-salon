import React from "react";
import LeafLogo from "./LeafLogo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 flex h-14 w-full items-center justify-between bg-[#FFF4E8]">
      <div className="ml-15 flex items-center gap-1">
        <LeafLogo />

        <div className="flex flex-col items-center">
          <span className="font-['Cormorant_Garamond'] text-2xl font-bold">
            L U M I E R E
          </span>

          <div className="flex gap-2">
            <span className="font-['Cormorant_Garamond'] text-[10px]">
              H A I R
            </span>
            <span className="font-['Cormorant_Garamond'] text-[10px]">
              S A L O N
            </span>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex gap-10 mr-10 text-[15px] font-['Cormorant_Garamond'] text-[#2A211E] font-extrabold justify-center items-center ">
         <Link to='/'> <li className="border-b-2 border-transparent hover:border-[#7F2D1D] transition-all duration-300">Home</li></Link>
         <Link to='/services'> <li className="border-b-2 border-transparent hover:border-[#7F2D1D] transition-all duration-300">Services</li></Link>
         <Link to='/about'> <li className="border-b-2 border-transparent hover:border-[#7F2D1D] transition-all duration-300">About</li></Link>
         <Link to='/gallery'> <li className="border-b-2 border-transparent hover:border-[#7F2D1D] transition-all duration-300">Gallery</li></Link>
         <Link to='/our-team'> <li className="border-b-2 border-transparent hover:border-[#7F2D1D] transition-all duration-300">Our Team</li></Link>
        </ul>
      </div>
      <div className=" flex flex-wrap items-center mr-18 gap-4">
       <Link to='/contact'> <button className="bg-[#A63D24] flex gap-2 px-4 py-2 text-xs rounded-3xl font-medium text-white transition duration-300 hover:bg-[#7F2D1D]">
          Contact Us
          
        </button></Link>
      </div>
    </nav>
  );
};

export default Header;
