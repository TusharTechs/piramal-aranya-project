import React from "react";
import "./Footer.css";
import Phone from "../../assets/phone.png";
import Twitter from "../../assets/twitter.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import FooterLogo from "../../assets/footer-logo.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-section">
          <p>Call Us</p>
          <div className="call-us">
            <img src={Phone} alt="" />
            <h2 className="call-number">+ 022 506 47538</h2>
          </div>
          <div className="social-media-icons">
            <img className="twitter-icon" src={Twitter} alt="Twitter" />
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
          </div>
          <div className="copyright">
            <img src={FooterLogo} alt="" />
            <p>
              © 2023 <span className="piramal-text">Piramal.</span> ALL RIGHTS
              RESERVED.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
