import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser  } from 'react-icons/fa';
import logo from '../Assets/Images/achieversIT.png';
import { useCart } from './CartContext';
import './Header.css'

const Header = () => {

  const { cartItems } = useCart();

  // Get the cart count by calculating the length of the cartItems array
  const cartCount = cartItems.length;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> {/* Use Link for the logo */}
          <img src={logo} alt="AchieversIT Logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Use ms-auto to push items to the right */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/"> {/* Use Link for Home */}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop"> {/* Use Link for Shop */}
                Shop
              </Link>
            </li>
            <li className="nav-item">
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
        </li>
          </ul>
        </div>
      </div>
      <div className="d-flex align-items-center ms-3"> {/* Add margin to the left */}
        <Link to="/profile" className="d-flex align-items-center mx-3"> {/* Use Link for user icon */}
          <FaUser  size={24} style={{ color: 'black' }} /> {/* User icon in black */}
        </Link>
        <Link to="/cart" className="d-flex align-items-center me-3">
            <div className="cart-icon-container">
              {/* Cart Icon */}
              <FaShoppingCart size={24} style={{ color: 'black' }} />
              
              {/* Cart Count Badge */}
              <span className="cart-count">{cartCount}</span>
            </div>
          </Link>
      </div>
    </nav>
  );
};

export default Header;