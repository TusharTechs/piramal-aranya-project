import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import WhiteLogo from "../../assets/WhiteLogo.png";
import discover from "../../assets/discover.png";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="header-section">
          <div className="white-logo">
            <img src={WhiteLogo} alt="Logo" />
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <h2>Piramal</h2>
              <h4 style={{ marginTop: "-5px" }}>aranya</h4>
            </div>
          </div>
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="navigation">
            <p>HOME</p>
            <p>OVERVIEW</p>
            <p>AMENITIES</p>
            <p>GALLERY</p>
            <p>CONTACT</p>
          </div>
          <div className="enquire-now-btn">
            <button>ENQURE NOW</button>
          </div>
        </div>
        <div className="project-section">
          <div className="btn_mumbai">
            <button>MUMBAI</button>
          </div>
          <div className="project-aranya">
            <h1>PROJECT</h1>
            <h2>ARANYA</h2>
            <p>Piramal Groups</p>
          </div>
          <div className="discover-image-section">
            <img
              src={discover}
              alt="Discover Our Projects"
              className="discover-image"
            />
            <img
              src={arrow}
              alt="Download Projects"
              className="discover-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
