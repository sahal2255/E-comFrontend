import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi"; 
import { Link } from "react-router-dom";

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-amber-800 text-white min-h-20 px-6 flex justify-between items-center">
      <div className="text-xl font-bold">LOGO</div>

      <ul className="hidden md:flex gap-6 text-lg">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/" className="hover:text-gray-400">About</Link></li>
        <li><Link to="/" className="hover:text-gray-400">Contact</Link></li>
        <li><Link to="/" className="hover:text-gray-400">profle</Link></li>

      </ul>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          {isOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>

      <div className={`fixed top-0 right-0 h-full w-2/3 bg-gray-900 shadow-lg transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <button onClick={toggleMenu} className="text-white text-3xl p-4">
          <BiX />
        </button>

        <ul className="flex flex-col gap-6 mt-10 text-xl items-center">
          <li><Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default UserNavbar;
