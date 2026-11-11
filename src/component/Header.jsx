
import React, { useState } from "react";
import LeafLogo from "./LeafLogo";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Our Team", href: "#ourteam" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#FFF4E8]">

      {/* Main Header */}
      <div className="flex h-14 w-full items-center justify-between">

        {/* Logo */}
        <div className="ml-4 flex items-center gap-1 sm:ml-8 lg:ml-15">
          <LeafLogo />

          <div className="flex flex-col items-center">
            <span className="font-['Cormorant_Garamond'] text-xl font-bold sm:text-2xl">
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

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="mr-10 flex items-center justify-center gap-10 font-['Cormorant_Garamond'] text-[15px] font-extrabold text-[#2A211E]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="border-b-2 border-transparent transition-all duration-300 hover:border-[#7F2D1D]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Contact Button */}
        <div className="mr-6 hidden items-center gap-4 lg:flex lg:mr-10 xl:mr-18">
          <a href="#contact">
            <button className="flex gap-2 rounded-3xl bg-[#A63D24] px-4 py-2 text-xs font-medium text-white transition duration-300 hover:bg-[#7F2D1D]">
              Contact Us
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mr-4 flex items-center justify-center text-[#35251F] lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile & Tablet Navigation */}
      {isOpen && (
        <div className="absolute left-0 top-14 w-full border-t border-[#D8C5B8] bg-[#FFF4E8] px-6 py-5 shadow-md lg:hidden">
          <ul className="flex flex-col items-center gap-5 font-['Cormorant_Garamond'] text-base font-extrabold text-[#2A211E]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="border-b-2 border-transparent transition-all duration-300 hover:border-[#7F2D1D]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex justify-center">
            <a href="#contact" onClick={closeMenu}>
              <button className="rounded-3xl bg-[#A63D24] px-5 py-2 text-xs font-medium text-white transition duration-300 hover:bg-[#7F2D1D]">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
