import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
const Header = () => {
  return (
    <>
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cart</a>
        </li>
      </ul>
    </div>
    <div className="d-flex justify-content-end p-3">
    <a href="#" className="d-flex align-items-center">
          <FaUser size={24} />  {/* User icon */}
          <span className="ms-2"></span>
        </a>
        <a href="#" className="d-flex align-items-center mx-3">
          <FaShoppingCart size={24} />  {/* Cart icon */}
          <span className="ms-2"></span>
        </a>
      </div>
  </div>
</nav>
    </div>
    </>

  )
}

export default Header
