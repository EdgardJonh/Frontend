import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  // Asegúrate de que price sea un número
  const price = typeof product.price === 'number' ? product.price : parseFloat(product.price);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">${isNaN(price) ? '0.00' : price.toFixed(2)}</p>
        <p className="text-sm text-gray-500 mb-4">{product.category}</p>
        <Link to={`/product/${product.id}`} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Ver detalles
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
