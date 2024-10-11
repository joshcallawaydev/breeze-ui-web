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
            className="focus:outline-none"
          >
            <h1 className="font-semibold text-[#fff]">ICON</h1>
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
