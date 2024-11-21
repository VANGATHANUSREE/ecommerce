import React, { useState, useEffect } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { products } from '../Assets/products'; // Adjust the import path accordingly
import { Link } from 'react-router-dom'; 
import { useCart } from './CartContext';
import './BigDiscount.css'; // Make sure to create a CSS file for styling

const Shop = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [showPopup, setShowPopup] = useState(false);
 
   
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // Delay for debounce
    return () => clearTimeout(timer); // Cleanup the timeout
  }, [searchTerm]);
  // UseEffect to update filtered products whenever the category or search term changes
  useEffect(() => {
    filterProducts(selectedCategory, debouncedSearchTerm);
  }, [selectedCategory, debouncedSearchTerm]);

  // Debounce search functionality (to limit number of filters triggered during typing)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // Adjust the delay to your liking
    return () => clearTimeout(timer); // Clean up the timeout on component unmount or before setting a new one
  }, [searchTerm]);

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Function to handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update search term state
  };

  // Function to filter products based on category and search term
  const filterProducts = (category, search) => {
    const filtered = products.filter((product) => {
      const matchesCategory = category ? product.category === category : true;
      const matchesSearch = product.productName.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowPopup(true); // Show the popup message
    setTimeout(() => {
      setShowPopup(false); // Hide the popup after 2 seconds
    }, 2000);
  };

  return (
    <div className="container mt-4">
      <h2>Products</h2>

      {/* Category Dropdown */}
      <div className="btn-group mb-3">
        <button className="btn btn-secondary btn-sm" type="button">
          Categories
        </button>
        <button
          type="button"
          className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" onClick={() => handleCategorySelect('sofa')}>Sofa</a></li>
          <li><a className="dropdown-item" onClick={() => handleCategorySelect('chair')}>Chair</a></li>
          <li><a className="dropdown-item" onClick={() => handleCategorySelect('mobile')}>Mobile</a></li>
          <li><a className="dropdown-item" onClick={() => handleCategorySelect('watch')}>Watch</a></li>
          <li><a className="dropdown-item" onClick={() => handleCategorySelect('wireless')}>Wireless</a></li>
        </ul>
      </div>

      {/* Search Bar */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for products..."
          aria-label="Search for products"
          value={searchTerm}
          onChange={handleSearch} // Update search term state
        />
        <button className="btn btn-outline-secondary" type="button">
          <FaSearch />
        </button>
      </div>

      {/* Display filtered products as cards */}
      <div className="cards-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="card">
              <Link to={`/product/${product.id}`}>
                <img 
                  src={product.imgUrl} 
                  className="card-img-top" 
                  alt={product.productName} 
                  style={{ cursor: 'pointer' }}
                />
              </Link>
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
          ))
        ) : (
          <div className="no-products">No products found.</div>
        )}
      </div>
    </div>
  );
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

export default Shop;
