import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser  } from 'react-icons/fa';
import logo from '../Assets/Images/achieversIT.png';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="AchieversIT Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Use ms-auto to push items to the right */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex align-items-center ms-3"> {/* Add margin to the left */}
            <a href="#" className="d-flex align-items-center mx-3">
              <FaUser  size={24} style={{ color: 'black' }} /> {/* User icon in black */}
            </a>
            <a href="#" className="d-flex align-items-center me-3"> {/* Add margin to the right */}
              <FaShoppingCart size={24} style={{ color: 'black' }} /> {/* Cart icon in black */}
            </a>
          </div>
    </nav>
  );
};

export default Header;