import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1>404 - Page Not Found</h1>
      <p style={{ marginTop: "15px" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <div style={{ marginTop: "40px" }}>
        <Link
          style={{
            textDecoration: "none",
            backgroundColor: "#1A2440",
            color: "#FFF",
            padding: "10px 50px",
          }}
          to={"/"}
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
