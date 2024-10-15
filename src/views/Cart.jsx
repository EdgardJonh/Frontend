import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
        <Link to="/products" className="text-blue-600 hover:underline">Continuar comprando</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>
      {cart.map(item => (
        <div key={item.id} className="flex items-center border-b py-4">
          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
              className="bg-gray-200 px-2 py-1 rounded"
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="bg-gray-200 px-2 py-1 rounded"
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-4 text-red-600 hover:text-red-800"
          >
            Eliminar
          </button>
        </div>
      ))}
      <div className="mt-8">
        <p className="text-xl font-semibold">Total: ${getCartTotal().toFixed(2)}</p>
        <div className="mt-4">
          <button
            onClick={clearCart}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 mr-4"
          >
            Vaciar carrito
          </button>
          <Link
            to="/checkout"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Proceder al pago
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;