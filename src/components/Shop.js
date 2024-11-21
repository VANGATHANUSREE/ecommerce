import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Shop = () => {
  return (
    <>
      <div className="container mt-4">
        <h2>Products</h2>
        <div className="btn-group mb-3">
          <button className="btn btn-secondary btn-sm" type="button">
            Small split button
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
            <li><a className="dropdown-item" href="#">Sofa</a></li>
            <li><a className="dropdown-item" href="#">Chair</a></li>
            <li><a className="dropdown-item" href="#">Mobile</a></li>
            <li><a className="dropdown-item" href="#">Watch</a></li>
            <li><a className="dropdown-item" href="#">Wireless</a></li>
          </ul>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products..."
            aria-label="Search for products"
          />
          <button className="btn btn-outline-secondary" type="button">
            <FaSearch /> {/* Use the search icon from react-icons */}
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;