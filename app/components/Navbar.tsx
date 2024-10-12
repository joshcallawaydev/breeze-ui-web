"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavButton from "./NavButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="w-full px-4 py-2 flex justify-between items-center">
        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 focus:outline-none"
          >
            {/* First Line */}
            <span
              className={`block absolute w-full h-[3px] bg-white transform transition-all duration-300 ease-in-out ${
                isOpen
                  ? "rotate-45 top-1/2 -translate-y-1/2"
                  : "rotate-0 top-2"
              }`}
            ></span>

            {/* Second Line */}
            <span
              className={`block absolute w-full h-[3px] bg-white transform transition-all duration-300 ease-in-out ${
                isOpen
                  ? "-rotate-45 top-1/2 -translate-y-1/2"
                  : "rotate-0 top-4"
              }`}
            ></span>
          </button>
        </div>

        {/* Logo */}
        <div className="">
          <Logo />
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-6 justify-center">
          <NavLinks />
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <NavButton />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#3F4250] px-4 py-4 absolute w-full h-auto">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default Navbar;