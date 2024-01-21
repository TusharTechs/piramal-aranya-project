import React from "react";
import "./Services.css";
import Call from "../../assets/call.png";
import Security from "../../assets/security.png";
import Ringing from "../../assets/ringing.png";
import Parking from "../../assets/car-parking.png";
import Conference from "../../assets/board-meeting.png";
import AC from "../../assets/air-conditioner.png";
import Cart from "../../assets/shopping-cart.png";
import SPA from "../../assets/massage.png";
import Swimming from "../../assets/swimming.png";

const Services = () => {
  return (
    <div className="service-wrapper">
      <div className="service-container">
        <div className="service-section">
          <h6>ARANYA'S SERVICES</h6>
          <h3>30+ PREMIUM AMENITIES</h3>
          <div className="service-component">
            <div className="service-item">
              <div className="service-item-image">
                <img src={Call} alt="" />
              </div>
              <div className="service-item-content">
                <h5>RECEPTION</h5>
                <p>6 area for receptionist serve 24/7</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-image">
                <img src={Security} alt="" />
              </div>
              <div className="service-item-content">
                <h5>SECURITY</h5>
                <p>Security team with 24/7 camera system</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-image">
                <img src={Ringing} alt="" />
              </div>
              <div className="service-item-content">
                <h5>FIRE ALARM</h5>
                <p>Automatic fire extinguishing system</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-image">
                <img src={Parking} alt="" />
              </div>
              <div className="service-item-content">
                <h5>PARKING</h5>
                <p>Parking area with extra capacity</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-image">
                <img src={Conference} alt="" />
              </div>
              <div className="service-item-content">
                <h5>CONFERENCE ROOM</h5>
                <p>5 conference room setup in each block</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-image">
                <img src={AC} alt="" />
              </div>
              <div className="service-item-content">
                <h5>CONDITIONING</h5>
                <p>ensure ventilation and air conditioning</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-image">
                <img src={Cart} alt="" />
              </div>
              <div className="service-item-content">
                <h5>SUPERMARKET</h5>
                <p>5 supermarket in each block</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-image">
                <img src={SPA} alt="" />
              </div>
              <div className="service-item-content">
                <h5>SPA AND MASSAGE</h5>
                <p>Spa and Massage service for better health</p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-image">
                <img src={Swimming} alt="" />
              </div>
              <div className="service-item-content">
                <h5>4 SEASON POOL</h5>
                <p>5 star indoor swimming 4 seasons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
