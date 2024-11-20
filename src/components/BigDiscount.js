import React from 'react';
import { discountProducts } from '../Assets/products'; 
import { FaHeart } from 'react-icons/fa'; // Import the heart icon from react-icons
import './BigDiscount.css'; // Import your CSS file

const DiscountProducts = () => {
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
    <>
    <div className='container'>
    <div className="discount-products">
      <div className="cards-container">
        {discountProducts.map(product => (
          <div key={product.id} className="card">
            <div className="discount-label">
              {product.discount}% OFF
            </div>
            <img src={product.imgUrl} className="card-img-top" alt={product.productName} />
            <div className="heart-icon">
              <FaHeart />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              <p className="card-price">
                ${product.price} <span style={{ color: 'red' }}>({product.discount}% off)</span>
              </p>
              <div className="card-rating">
                {renderStars(product.avgRating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default DiscountProducts;
