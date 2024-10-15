import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Home() {
  // Estos serían normalmente obtenidos de una API
  const featuredProducts = [
    { id: 1, name: 'Producto 1', price: 19.99, image: 'url-imagen-1' },
    { id: 2, name: 'Producto 2', price: 29.99, image: 'url-imagen-2' },
    { id: 3, name: 'Producto 3', price: 39.99, image: 'url-imagen-3' },
  ];

  const categories = [
    { id: 1, name: 'Electrónica', image: 'url-categoria-1' },
    { id: 2, name: 'Ropa', image: 'url-categoria-2' },
    { id: 3, name: 'Hogar', image: 'url-categoria-3' },
  ];

  return (
    <div className="home">
      <section className="hero bg-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Mi Marketplace</h1>
        <p className="text-xl mb-8">Encuentra los mejores productos al mejor precio</p>
        <Link to="/products" className="bg-white text-blue-600 py-2 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300">
          Ver productos
        </Link>
      </section>

      <section className="featured-products my-16">
        <h2 className="text-3xl font-bold text-center mb-8">Productos destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="categories my-16">
        <h2 className="text-3xl font-bold text-center mb-8">Categorías populares</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => (
            <Link key={category.id} to={`/category/${category.id}`} className="category-card">
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;