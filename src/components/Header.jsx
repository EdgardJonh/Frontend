import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function Header() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Mi Marketplace</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/products">Productos</Link></li>
            <li>
              <Link to="/cart" className="flex items-center">
                Carrito
                {cartItemsCount > 0 && (
                  <span className="ml-1 bg-red-500 rounded-full px-2 py-1 text-xs">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </li>
            {user ? (
              <>
                <li>Hola, {user.email}</li>
                <li><button onClick={logout}>Cerrar sesión</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login">Iniciar sesión</Link></li>
                <li><Link to="/register">Registrarse</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;