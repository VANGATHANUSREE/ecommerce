import React from 'react';
import hero from '../Assets/Images/hero-img.png';
import phone from '../Assets/Images/phone-08.png';
import wireless from '../Assets/Images/wireless-01.png';
import watch from '../Assets/Images/watch-06.png';
import './Slider.css'; 

const Slider = () => {
  return (
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
  );
};

export default Slider;