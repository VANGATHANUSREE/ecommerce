import React from 'react';
import hero from '../Assets/Images/hero-img.png';
import phone from '../Assets/Images/phone-08.png';
import wireless from '../Assets/Images/wireless-01.png';
import watch from '../Assets/Images/watch-07.png';
import { FaCar, FaCreditCard, FaShieldAlt, FaHeadphones } from 'react-icons/fa';
import './Home.css'
import DiscountProducts from './BigDiscount';
import NewArrivals from './NewArrivals';

const Home = () => {
  return (
    <>
    {/* Slider */}
      <div className="container my-4"> 
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000"> 
            <div className="row align-items-center p-3"> 
              <div className="col-md-6">
                <h3>50% Off For Your First Shopping</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                <button className="btn btn-light">Visit Collection</button>
              </div>
              <div className="col-md-6">
                <img src={phone} className="d-block w-100 slider-image" alt="First slide" />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="row align-items-center p-3">
              <div className="col-md-6">
                <h3>50% Off For Your First Shopping</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                <button className="btn btn-light">Visit Collection</button>
              </div>
              <div className="col-md-6">
                <img src={hero} className="d-block w-100 slider-image" alt="Second slide" />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="row align-items-center p-3">
              <div className="col-md-6">
                <h3>50% Off For Your First Shopping</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                <button className="btn btn-light">Visit Collection</button>
              </div>
              <div className="col-md-6">
                <img src={wireless} className="d-block w-100 slider-image" alt="Third slide" />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="row align-items-center p-3">
              <div className="col-md-6">
                <h3>50% Off For Your First Shopping</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                <button className="btn btn-light">Visit Collection</button>
              </div>
              <div className="col-md-6">
                <img src={watch} className="d-block w-100 slider-image" alt="Fourth slide" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Cards */}
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
    <div>
      <h2 className="text-center">Big Discount</h2>
      <DiscountProducts />
    </div>
    <div>
      <h2 className="text-center">New Arrivals</h2>
      <NewArrivals />
    </div>
    <div>
      <h2 className="text-center">Best Sales</h2>
      <DiscountProducts />
    </div>
    


    </>
  )
}

export default Home
