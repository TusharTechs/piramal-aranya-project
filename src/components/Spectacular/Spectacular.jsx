import React, { useState } from "react";
import "./Spectacular.css";
import User from "../../assets/user.png";
import Smartphone from "../../assets/smartphone.png";
import Email from "../../assets/email.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Spectacular = ({ onFormSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const { name, email, mobile } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
      };

      const requests = [
        axios.post(
          "https://v1.nocodeapi.com/tushartechs/google_sheets/rbgVFWufopxmxKxl?tabId=Sheet1",
          [[name, email, mobile]]
        ),
        axios.post(
          "https://api.propacity.in/api/v1/webhooks/integration/61cf0d44-1ede-4dfa-b3ce-9834102082/insertLead",
          postData
        ),
      ];

      const [scriptResponse, propacityResponse] = await Promise.all(requests);

      if (propacityResponse.status === 200 && scriptResponse.status === 200) {
        console.log("Form submitted successfully:", formData);
        onFormSubmit();
        navigate("/success");
      } else {
        console.error(
          "Failed to submit form. Script API Response:",
          scriptResponse.data
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div className="spectacular-wrapper">
      <div className="spectacular-container">
        <div className="spectacular-section">
          <h2>SPECTACULAR</h2>
          <h2>SURROUNDINGS</h2>
          <h2>AS FAR AS THE EYE CAN SEE</h2>
          <p>
            Piramal Aranya is an ode to perfection. It balances contemporary
            design with the scenic natural beauty of its environment. Every
            residence invites you to soak in the surroundings, from the endless
            greenery of Rani Baug on the western side and the shimmering Arabian
            Sea on the east. Avyan at Piramal Aranya will be home to something
            truly spectacular with premium dual aspect living
          </p>
          <div className="spectacular-numbers">
            <div>
              <h3>66%</h3>
              <h6>Botanical garden views</h6>
            </div>
            <div>
              <h3>33%</h3>
              <h6>Mumbai harbour and botanical garden views</h6>
            </div>
            <div>
              <h3>66%</h3>
              <h6>Mumbai harbour views</h6>
            </div>
          </div>
          <div className="location-section">
            <h6>LOCATION</h6>
            <h3>NEIGHBORHOOD</h3>
            <div className="location-component">
              <div className="location-item">
                <div className="location-mark location-mark-active">
                  <p>•</p>
                </div>
                <div>
                  <h5>Bhau Daji Lad Museum</h5>
                  <h6>3.5 Km Away</h6>
                </div>
              </div>
              <div className="location-item">
                <div className="location-mark">
                  <p>•</p>
                </div>
                <div>
                  <h5>St. Paul’s Tamil Church</h5>
                  <h6>3.5 Km Away</h6>
                </div>
              </div>
              <div className="location-item">
                <div className="location-mark">
                  <p>•</p>
                </div>
                <div>
                  <h5>Magen David Synagogue</h5>
                  <h6>3.5 Km Away</h6>
                </div>
              </div>
              <div className="location-item">
                <div className="location-mark">
                  <p>•</p>
                </div>
                <div>
                  <h5>Byculla Club − Fire Temple</h5>
                  <h6>3.5 Km Away</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-wrapper">
            <div className="contact-section">
              <h2>CONTACT US</h2>
              <p>
                Please enter details below and we shall get in touch with you
                shortly
              </p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <img src={User} alt="User Icon" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    id="name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <img src={Smartphone} alt="Smartphone Icon" />
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    name="mobile"
                    id="mobile"
                    value={formData.contactNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <img src={Email} alt="Email Icon" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    id="email"
                    value={formData.emailAddress}
                    onChange={handleChange}
                  />
                </div>
                <div className="submit-btn">
                  <button type="submit">SUBMIT</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spectacular;
