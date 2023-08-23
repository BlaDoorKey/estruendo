// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#"
          className="text-white font-semibold text-lg">
          <img
            src="Estrugold.png"
            alt="Logo dorado"
            className="h-6"
          />
        </a>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white">
              Hogar
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white">
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white">
              Galería
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
