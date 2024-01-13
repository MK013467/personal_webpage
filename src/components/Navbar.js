import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-end items-center">
      <ul className="flex space-x-4">
        <li><a href="#about" className="hover:text-gray-300">About Me</a></li>
        <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;