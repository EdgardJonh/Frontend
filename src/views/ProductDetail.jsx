import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Simular una llamada a la API
        await new Promise(resolve => setTimeout(resolve, 1000));
        // En una aplicación real, aquí harías una llamada a tu API
        const sampleProduct = {
          id: id,
          name: 'Producto de ejemplo',
          price: 99.99,
          description: 'Esta es una descripción detallada del producto. Aquí puedes incluir todas las características y beneficios del producto.',
          category: 'Electrónica',
          image: 'https://via.placeholder.com/400',
          stock: 10
        };
        setProduct(sampleProduct);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los detalles del producto');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const { addToCart } = useCart();

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value > 0 && value <= product.stock ? value : quantity);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Aquí podrías añadir una notificación o feedback visual
  };

  if (loading) return <div className="text-center mt-8">Cargando detalles del producto...</div>;
  if (error) return <div className="text-center mt-8 text-red-600">{error}</div>;
  if (!product) return <div className="text-center mt-8">Producto no encontrado</div>;

  return (
    <div className="product-detail container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="mb-4">Categoría: <span className="font-semibold">{product.category}</span></p>
          <p className="mb-4">Disponibles: <span className="font-semibold">{product.stock}</span></p>
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2">Cantidad:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max={product.stock}
              className="border rounded p-2 w-16 text-center"
            />
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;