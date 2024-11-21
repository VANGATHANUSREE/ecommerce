import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Shop from './components/Shop';
import ProductDetails from './components/ProductDetails'; // Ensure correct import path
import { CartProvider } from './components/CartContext'; // Ensure correct import path

function App() {
  return (
    <CartProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;