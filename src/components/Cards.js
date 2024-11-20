import React from 'react';
import { FaCar, FaCreditCard, FaShieldAlt, FaHeadphones } from 'react-icons/fa';
import './Cards.css';

const Cards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-3 mb-3">
          <div className="card text-center card-orange">
            <div className="card-body">
              <FaCar size="3em" />
              <h6 className="card-title">Free Shipping</h6>
              <p className="card-text"> Louem ipsum dolor sit amert.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3">
          <div className="card text-center card-blue">
            <div className="card-body">
              <FaCreditCard size="3em" />
              <h6 className="card-title">Safe Payment</h6>
              <p className="card-text"> Louem ipsum dolor sit amert.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3">
          <div className="card text-center card-mustard">
            <div className="card-body">
              <FaShieldAlt size="3em" />
              <h6 className="card-title">Secure Payment</h6>
              <p className="card-text"> Louem ipsum dolor sit amert.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3">
          <div className="card text-center card-lilac">
            <div className="card-body">
              <FaHeadphones size="3em" />
              <h6 className="card-title">Back Guarantee</h6>
              <p className="card-text"> Louem ipsum dolor sit amert.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;