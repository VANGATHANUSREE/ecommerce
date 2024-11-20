import React, { useState } from 'react';
import {  bestSales } from '../Assets/products'; 
import { FaHeart } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa'; 
import './BigDiscount.css'; 
const BestSales = () => {
  const [cart, setCart] = useState([]); // Move useState inside the component

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]); // Add product to the cart array
    console.log('Cart:', [...cart, product]); // Log the cart items after adding
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Half star

    return Array.from({ length: 5 }, (_, index) => {
      if (index < fullStars) {
        return <span key={index} className="star filled">★</span>; // Full star
      } else if (index === fullStars && halfStar) {
        return <span key={index} className="star half-filled">★</span>; // Half star
      } else {
        return <span key={index} className="star">★</span>; // Empty star
      }
    });
  };

  return (
    <div className='container'>
      <div className="discount-products">
        <div className="cards-container">
          { bestSales.map(product => (
            <div key={product.id} className="card">
              <img src={product.imgUrl} className="card-img-top" alt={product.productName} />
              <div className="heart-icon">
                <FaHeart />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <div className="card-rating">
                  {renderStars(product.avgRating)}
                </div>
                <p className="card-price">
                  ${product.price}  
                  <span className='plus-icon' onClick={() => addToCart(product)}>
                    <FaPlus style={{ cursor: 'pointer' }} />
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSales;