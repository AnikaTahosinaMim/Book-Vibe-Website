import React from "react";
import { Link } from "react-router";

const Errorpage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1 style={{ fontSize: "60px", color: "red" }}>404</h1>
      <h2>Oops! Page Not Found 😔</h2>
      <p>
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          🔙 Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Errorpage;
