import React, { useState } from 'react';
import { discountProducts } from '../Assets/products'; 
import { FaHeart } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa'; 
import { Link, useParams } from 'react-router-dom'; // Import useParams hook
import './BigDiscount.css'; 

const DiscountProducts = () => {
  const [cart, setCart] = useState([]);
  const { id } = useParams(); // Use useParams to get the 'id' from the URL

  // Check if 'id' matches any product in 'discountProducts'
  const product = discountProducts.find(item => item.id === parseInt(id)); // Find the product by ID
  
  const [quantity, setQuantity] = useState(1);
  
  // Function to handle adding product to the cart
  const addToCart = (product) => {
    if (product) { // Check if product exists
      setCart(prevCart => [...prevCart, product]);
     
    }
  };

  const handleAddToCart = (product) => {
    addToCart({ id: product.id, name: product.productName, price: product.price, quantity });
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;

    return Array.from({ length: 5 }, (_, index) => {
      if (index < fullStars) {
        return <span key={index} className="star filled">★</span>;
      } else if (index === fullStars && halfStar) {
        return <span key={index} className="star half-filled">★</span>;
      } else {
        return <span key={index} className="star">★</span>;
      }
    });
  };

  return (
    <div className='container'>
      <div className="discount-products">
        <div className="cards-container">
          {discountProducts.map(product => (
            <div key={product.id} className="card">
              <div className="discount-label">
                {product.discount}% OFF
              </div>
              <Link to={`/product/${product.id}`}> {/* Use Link to navigate */} 
                <img 
                  src={product.imgUrl} 
                  className="card-img-top" 
                  alt={product.productName} 
                  style={{ cursor: 'pointer' }} // Change cursor to pointer
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
                  <span className='plus-icon' onClick={() => handleAddToCart(product)}>
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

export default DiscountProducts;
