import React from "react";
import { useState } from "react";
import { Link } from "react-router";

const Heading = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/33622/optimized_product_thumb_stage.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button className="login-button" onClick={() => setLogin(!login)}>
            {login ? "logout" : "login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
