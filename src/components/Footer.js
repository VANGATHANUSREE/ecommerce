import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div> 
      <div className="footer">
        <div className="row">
          <div className="col">
            <div className='icon-text '>
           <FaShoppingBag size={24} color="white"  /> 
           <h5>Mart</h5>
           </div>
            <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.<br></br> Auctor libero id et, in <br></br>gravida. Sit diam duis <br></br>mauris nulla cursus.</p>
          </div>
          <div className="col">
            <h6>About Us</h6>
            <a className="text" href="#">Careers</a><br></br>
            <a className="text" href="#">Our Stores</a><br></br>
            <a className="text" href="#">Our Cares</a><br></br>
            <a className="text" href="#">Terms & Conditions</a><br></br>
            <a className="text" href="#">Privacy Policy</a>
          </div>
          <div className="col">
            <h6>Customer Care</h6>
            <a className="text" href="#">Help Center</a><br></br>
            <a className="text" href="#">How to buy</a><br></br>
            <a className="text" href="#">Track Your Order</a><br></br>
            <a className="text" href="#">Corporate and Bulk Purchasing</a><br></br>
            <a className="text" href="#">Returns and Refunds</a>
          </div>
          <div className="col">
            <h6>Contact Us</h6>
            <p>70 Washington Square <br></br> South, New York, NY 10012, <br></br>United States</p><br></br>
            <a className="text" href="#">Email: example@gmail.com</a><br></br>
            <a className="text" href="#">Phone: +1234567829</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;