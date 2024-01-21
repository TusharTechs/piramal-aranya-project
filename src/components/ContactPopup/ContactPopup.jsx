import React, { useState } from "react";
import "./ContactPopup.css";
import Home from "../../assets/home.jpg";
import Close from "../../assets/close.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactPopup = ({ onFormSubmit, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const { name, email, mobile } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        onClose();
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
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="contact-popup">
        <div className="image-container">
          <img src={Home} width={500} height={500} alt="Home" />
        </div>
        <div className="form-container">
          <img
            src={Close}
            alt="Close"
            className="close-icon"
            onClick={onClose}
          />
          <form onSubmit={handleSubmit}>
            <h2>Book Site Tour</h2>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="mobile">Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPopup;
