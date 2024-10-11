import React from 'react';
import Link from 'next/link';

const NavLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <Link href="/" className="text-white hover:text-[#ff914d] uppercase font-bold">Home</Link>
      <Link href="/about" className="text-white hover:text-[#ff914d] uppercase font-bold">About</Link>
      <Link href="/contact" className="text-white hover:text-[#ff914d] uppercase font-bold">Contact</Link>
    </div>
  );
};

export default NavLinks;