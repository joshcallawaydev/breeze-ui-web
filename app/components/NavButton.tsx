import React from "react";

const NavButton: React.FC = () => {
  return (
    <button className="relative px-4 py-2 uppercase text-[#222327] border-2 border-[#222327] rounded-lg bg-[#ff914d] overflow-hidden hover:text-[#222327] transition-all duration-500 ease-out group">
      <span className="relative z-10">Install</span>
      <span className="absolute inset-0 bg-[#f9ba93] transition-transform transform translate-x-[-100%] group-hover:translate-x-0 duration-500 ease-in-out"></span>
    </button>
  );
};

export default NavButton;
