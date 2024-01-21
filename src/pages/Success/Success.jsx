import React from "react";
import "./Success.css";
import Logo from "../../assets/BlackLogo.png";
import Home from "../../assets/home.jpg";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="success-wrapper">
      <div className="success-container">
        <div className="success-section">
          <div className="navbar">
            <Link to={"/"}>
              <img src={Logo} alt="Logo" />
            </Link>
            <a href="tel:+918197883993">+91-8197883993</a>
          </div>
          <div className="success-image-with-text">
            <div className="success-image">
              <img src={Home} alt="Home" />
            </div>
            <div className="success-content">
              <h4>Thanks for registering!</h4>
              <p>Our experts will get in touch with you shortly</p>
              <Link className="back-to-homepage-link" to={"/"}>
                Back To Homepage
              </Link>
            </div>
          </div>
          <div className="disclaimer">
            <h5>Disclaimer</h5>
            <p>
              This is not the official website of developer, it belongs to the
              authorised channel partner for information & marketing purposes
              only. All rights for logo & images are reserved by the developer.
            </p>
            <p>
              Digital Media planned by{" "}
              <span className="propacity">Propacity</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
