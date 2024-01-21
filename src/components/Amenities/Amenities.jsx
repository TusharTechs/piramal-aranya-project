import React from "react";
import "./Amenities.css";
import AmenitiesImg from "../../assets/amenities.jpg";
import Advantage1 from "../../assets/advantage1.jpg";
import Advantage2 from "../../assets/advantage2.jpg";
import Advantage3 from "../../assets/advantage3.jpg";
import Advantage4 from "../../assets/advantage4.jpg";

const Amenities = () => {
  return (
    <>
      <div className="amenities-image">
        <img src={AmenitiesImg} alt="Amenities" />
      </div>
      <div className="amenities-wrapper">
        <div className="amenities-container">
          <div className="amenities-section">
            <h6>THE ADVANTAGES</h6>
            <h3>AMENITIES</h3>
            <div className="advantage-component">
              <div className="advantages-item advantages-item-top">
                <h4>1</h4>
                <h5>TOP CLASS</h5>
                <h5>CLUB & FACILITIES</h5>
                <img src={Advantage1} alt="Top class club" />
                <p>
                  With a wide range of active and relaxing hubs, kids as well as
                  adult spaces and curated indoor & outdoor activities, be
                  tempted to try something new every day.
                </p>
              </div>
              <div className="advantages-item advantages-item-bottom">
                <h4>2</h4>
                <h5>TOWER EXCLUSIVE</h5>
                <h5>AMENITIES & FACILITIES</h5>
                <img src={Advantage2} alt="Tower Exclusive" />
                <p>
                  With a wide range of active and relaxing hubs, kids as well as
                  adult spaces and curated indoor & outdoor activities, be
                  tempted to try something new every day.
                </p>
              </div>
              <div className="advantages-item advantages-item-top">
                <h4>3</h4>
                <h5>RECREATIONAL</h5>
                <h5>AMENITIES & FACILITIES</h5>
                <img src={Advantage3} alt="Recreational" />
                <p>
                  With a wide range of active and relaxing hubs, kids as well as
                  adult spaces and curated indoor & outdoor activities, be
                  tempted to try something new every day.
                </p>
              </div>
              <div className="advantages-item advantages-item-bottom">
                <h4>4</h4>
                <h5>MULTIPURPOSE</h5>
                <h5>GAMES ROOM</h5>
                <img src={Advantage4} alt="Games Room" />
                <p>
                  With a wide range of active and relaxing hubs, kids as well as
                  adult spaces and curated indoor & outdoor activities, be
                  tempted to try something new every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenities;
