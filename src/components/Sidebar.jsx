import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`bg-gray-100 w-64 p-4 fixed h-full transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
      <button onClick={toggleSidebar} className="md:hidden absolute top-2 right-2">
        Cerrar
      </button>
      <h2 className="text-xl font-bold mb-4">Categorías</h2>
      <ul>
        <li><Link to="/category/electronics" className="block py-2 hover:text-blue-600">Electrónica</Link></li>
        <li><Link to="/category/clothing" className="block py-2 hover:text-blue-600">Ropa</Link></li>
        <li><Link to="/category/home" className="block py-2 hover:text-blue-600">Hogar</Link></li>
        {/* Agrega más categorías según sea necesario */}
      </ul>
    </div>
  );
}

export default Sidebar;