import React from 'react';
import { Link } from 'react-router-dom';

function OrderConfirmation() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">¡Gracias por tu compra!</h1>
      <p className="mb-4">Tu pedido ha sido procesado con éxito.</p>
      <p className="mb-8">Recibirás un correo electrónico con los detalles de tu pedido.</p>
      <Link to="/" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Volver a la página principal
      </Link>
    </div>
  );
}

export default OrderConfirmation;