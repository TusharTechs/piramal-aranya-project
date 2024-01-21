import React, { useState } from "react";
import "./Main.css";
import Location from "../../assets/location.png";
import House from "../../assets/house.png";
import Rupee from "../../assets/rupee.png";
import Search from "../../assets/search.png";
import Apartment1 from "../../assets/apartment1.jpg";
import Apartment2 from "../../assets/apartment2.jpg";
import Flat from "../../assets/flat.png";
import Villa from "../../assets/villa.png";
import Plot from "../../assets/plot.png";
import Exclusive from "../../assets/exclusive.png";

const Main = () => {
  const [minBudget, setMinBudget] = useState("Min");
  const [maxBudget, setMaxBudget] = useState("Max");
  const [activeProperty, setActiveProperty] = useState("Flat");
  const [activeBedroom, setActiveBedroom] = useState("2 BHK");

  const handleMinBudgetChange = (e) => {
    setMinBudget(e.target.value);
  };

  const handleMaxBudgetChange = (e) => {
    setMaxBudget(e.target.value);
  };

  return (
    <>
      <div className="projects-section">
        <div className="view-projects">
          <h1>View Projects</h1>
          <h4>Great! Just fill out these last few details</h4>
          <img
            src={Location}
            alt="Location"
            className="project-location-icon"
          />
          <input type="text" placeholder="Search Projects" />
          <img src={Search} alt="Search" className="project-search-icon" />
        </div>
        <div className="project-container">
          <div className="budget-range">
            <h5>Budget</h5>
            <select
              className="min-budget"
              name="Min"
              value={minBudget}
              onChange={handleMinBudgetChange}
            >
              <option value="Min">Min</option>
              <option value="1.00L">1.00L</option>
              <option value="2.00L">2.00L</option>
              <option value="3.00L">3.00L</option>
              <option value="4.00L">4.00L</option>
              <option value="5.00L">5.00L</option>
            </select>
            <select
              className="max-budget"
              name="Max"
              value={maxBudget}
              onChange={handleMaxBudgetChange}
            >
              <option value="Max">Max</option>
              <option value="10.00L">10.00L</option>
              <option value="20.00L">20.00L</option>
              <option value="30.00L">30.00L</option>
              <option value="40.00L">40.00L</option>
              <option value="50.00L">50.00L</option>
            </select>
          </div>
          <div className="property-type">
            <h5>Property Type</h5>
            <div className="select-property">
              <div
                className={`select-property-item ${
                  activeProperty === "Flat" ? "active" : ""
                }`}
                onClick={() => setActiveProperty("Flat")}
              >
                <img src={Flat} alt="Flat" />
                <h6>Flat</h6>
              </div>
              <div
                className={`select-property-item ${
                  activeProperty === "Villa" ? "active" : ""
                }`}
                onClick={() => setActiveProperty("Villa")}
              >
                <img src={Villa} alt="Villa" />
                <h6>House / Villa</h6>
              </div>
              <div
                className={`select-property-item ${
                  activeProperty === "Plot" ? "active" : ""
                }`}
                onClick={() => setActiveProperty("Plot")}
              >
                <img src={Plot} alt="Plot" />
                <h6>Plot</h6>
              </div>
            </div>
          </div>
          <div className="number-of-bedroom">
            <h5>Number of Bedroom</h5>
            <div className="select-bedroom">
              <div
                className={`select-bedroom-item ${
                  activeBedroom === "1 BHK" ? "active" : ""
                }`}
                onClick={() => setActiveBedroom("1 BHK")}
              >
                <p>1 BHK</p>
              </div>
              <div
                className={`select-bedroom-item ${
                  activeBedroom === "2 BHK" ? "active" : ""
                }`}
                onClick={() => setActiveBedroom("2 BHK")}
              >
                <p>2 BHK</p>
              </div>
              <div
                className={`select-bedroom-item ${
                  activeBedroom === "3 BHK" ? "active" : ""
                }`}
                onClick={() => setActiveBedroom("3 BHK")}
              >
                <p>3 BHK</p>
              </div>
              <div
                className={`select-bedroom-item ${
                  activeBedroom === "4 BHK" ? "active" : ""
                }`}
                onClick={() => setActiveBedroom("4 BHK")}
              >
                <p>4 BHK</p>
              </div>
              <div
                className={`select-bedroom-item ${
                  activeBedroom === "4+BHK" ? "active" : ""
                }`}
                onClick={() => setActiveBedroom("4+BHK")}
              >
                <p>4+BHK</p>
              </div>
            </div>
          </div>
          <div className="exclusively-for-piramal">
            <h5>Exclusively for Piramal Members</h5>
            <div className="exclusive-section">
              <div className="exclusive-section-image">
                <img src={Exclusive} alt="Exclusive" />
              </div>
              <div className="exclusive-section-button">
                <button>View Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-wrapper">
        <div className="main-container">
          <div className="main-section">
            <div className="search-section">
              <p>Search Your Configuration</p>
              <div className="search-box">
                <div className="search-item">
                  <div className="search-item-img">
                    <img src={Location} alt="Location" />
                  </div>
                  <div className="search-item-content">
                    <p className="search-item-content-heading">Location</p>
                    <p>South Mumbai</p>
                  </div>
                </div>
                <div className="search-item">
                  <div className="search-item-img">
                    <img src={House} alt="Home" />
                  </div>
                  <div className="search-item-content">
                    <p className="search-item-content-heading">Property Type</p>
                    <p>2 BHK</p>
                  </div>
                </div>
                <div className="search-item">
                  <div className="search-item-img">
                    <img src={Rupee} alt="Rupee" />
                  </div>
                  <div className="search-item-content">
                    <p className="search-item-content-heading">Budget</p>
                    <p>90 L - 1.5 Cr</p>
                  </div>
                </div>
                <div className="search-image">
                  <img src={Search} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="apartments-section">
            <div className="apartment-component">
              <div className="apartment-component-image">
                <img src={Apartment1} alt="" />
              </div>
              <div className="apartment-component-content">
                <h6>MUMBAI</h6>
                <h3>OUR APARTMENTS</h3>
                <p>
                  Presenting Piramal Aranya, a high rise gated sanctuary that
                  offers luxuriant 2, 3 & 4 BHK homes inclusive of advanced
                  wellness technologies, dual-aspect blue and green views and a
                  world-class lifestyle crafted alongside the world’s leading
                  partners at Rani Baug, Byculla, South Mumbai.
                </p>
              </div>
            </div>
            <div className="apartment-component">
              <div className="apartment-component-content">
                <h6>2 BED EXCLUSIVE RESIDENCES</h6>
                <h3>2 BHK - EASTWING</h3>
                <p>
                  • All bedrooms with en-suite bathrooms <br />
                  • Apartments with harbour views <br />• Master bedroom with
                  corner windows offering panoramic views <br />
                  • All shafts on the external face <br />
                  • Kitchen with dry balcony <br />• Ease of combining
                  apartments to create exclusive wing apartment with expansive
                  living & dining area
                </p>
              </div>
              <div className="apartment-component-image">
                <img src={Apartment2} alt="" />
              </div>
            </div>
            <div className="number-section">
              <div className="number-section-item">
                <h4>50+</h4>
                <p>AMENITIES</p>
              </div>
              <div className="number-section-item">
                <h4>250</h4>
                <p>APARTMENTS</p>
              </div>
              <div className="number-section-item">
                <h4>
                  9,290 <span className="sqmt">SQ.MT</span>
                </h4>
                <p>RECREATIONAL SPACE</p>
              </div>
              <div className="number-section-item">
                <h4>1,200</h4>
                <p>SLOT CAR PARKING</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
