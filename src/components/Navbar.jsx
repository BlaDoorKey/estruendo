import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-xl font-semibold">
          <div className="flex space-x-4">
            <img
              src="Estrugold.png"
              alt="logo"
              width={70}
              height={15}
            />
            <p>Estruendo</p>
          </div>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
            Inicio
          </Link>
          <Link
            to="/eventos"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
            Eventos
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
            Contacto
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-16 right-0 bg-gray-800 w-full z-10">
              <Link
                to="/"
                className="block text-white p-4 border-b border-gray-700 hover:bg-gray-700 transition duration-300 ease-in-out"
                onClick={toggleMobileMenu}>
                Inicio
              </Link>
              <Link
                to="/eventos"
                className="block text-white p-4 border-b border-gray-700 hover:bg-gray-700 transition duration-300 ease-in-out"
                onClick={toggleMobileMenu}>
                Eventos
              </Link>
              <Link
                to="/contact"
                className="block text-white p-4 hover:bg-gray-700 transition duration-300 ease-in-out"
                onClick={toggleMobileMenu}>
                Contacto
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
