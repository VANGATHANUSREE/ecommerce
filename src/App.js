import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import {Routes,Route } from 'react-router-dom'; // BrowserRouter only in the App component
import ProductDetails from './components/ProductDetails'; // Ensure correct import path for ProductDetails

function App() {
  return (
      <div>
        <Header />
        <Routes> {/* Wrap routes in Routes */}
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/product/:id" element={<ProductDetails />} /> {/* Product details route */}
        </Routes>
        <Footer />
      </div>
  );
}
export default App;
