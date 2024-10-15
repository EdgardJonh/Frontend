import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';
import Home from './views/Home';
import ProductList from './views/ProductList';
import ProductDetail from './views/ProductDetail';
import Cart from './views/Cart';
import Checkout from './views/Checkout';
import OrderConfirmation from './views/OrderConfirmation';
import Login from './views/Login';
import Register from './views/Register';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/add-product" element={<AddProduct />} />
            </Routes>
          </MainLayout>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
