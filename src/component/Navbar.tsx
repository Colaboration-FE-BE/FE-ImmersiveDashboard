import React from 'react';
import logo from '../Image/logo.png'; 

const Navbar = () => {
  return (
    <nav className="bg-gray-100 h-screen w-48 py-4 px-2 fixed top-0 left-0 shadow-md">
      <div className="flex flex-col items-left ">
        <div className="mb-4">
          <img src={logo} alt="Logo" className="h-30 w-30" /> 
        </div>
        <div className="flex flex-col">
          <a href="#" className="text-black relative mb-2 hover:text-gray-300">
            Dashboard
            <span className="absolute w-full h-1 bg-gray-500 bottom-0 left-0 transform scale-x-0 transition-transform origin-left"></span>
          </a>
          <a href="#" className="text-black relative mb-2 hover:text-gray-300">
            Mentee
            <span className="absolute w-full h-1 bg-gray-500 bottom-0 left-0 transform scale-x-0 transition-transform origin-left"></span>
          </a>
          <a href="#" className="text-black relative mb-2 hover:text-gray-300">
            User
            <span className="absolute w-full h-1 bg-gray-500 bottom-0 left-0 transform scale-x-0 transition-transform origin-left"></span>
          </a>
          <a href="#" className="text-black relative mb-2 hover:text-gray-300">
            Class
            <span className="absolute w-full h-1 bg-gray-500 bottom-0 left-0 transform scale-x-0 transition-transform origin-left"></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
