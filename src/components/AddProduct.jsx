import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../api';

function AddProduct() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    imageUrl: '',
    stock: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const newProduct = {
        ...product,
        price: parseFloat(product.price),
        stock: parseInt(product.stock, 10)
      };
      await createProduct(newProduct);
      setMessage('Producto creado exitosamente');
      setProduct({
        name: '',
        description: '',
        price: '',
        category: '',
        imageUrl: '',
        stock: ''
      });
    } catch (error) {
      console.error('Error al crear el producto:', error);
      setMessage('Error al crear el producto');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Agregar Nuevo Producto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>
        <div>
          <label htmlFor="price" className="block mb-1">Precio</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            step="0.01"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="category" className="block mb-1">Categoría</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block mb-1">URL de la imagen</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="stock" className="block mb-1">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Crear Producto
        </button>
      </form>
      {message && <p className="mt-4 text-center font-bold">{message}</p>}
    </div>
  );
}

export default AddProduct;
