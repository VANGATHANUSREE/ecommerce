import React, { useState } from 'react';
import { newArrivals } from '../Assets/products'; 
import { FaHeart } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; // Import Link
import './BigDiscount.css'; 

const NewArrivals = () => {
  const [cart, setCart] = useState([]); // State for cart

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
          {newArrivals.map(product => (
            <div key={product.id} className="card">
              <Link to={`/product/${product.id}`}> {/* Use Link to navigate */}
                <img 
                  src={product.imgUrl} 
                  className="card-img-top" 
                  alt={product.productName} 
                />
              </Link>
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

export default NewArrivals;