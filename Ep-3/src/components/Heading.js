import React from "react";
import { useState } from "react";
import { Link } from "react-router";

const Heading = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="flex justify-between shadow-lg m-4 bg-amber-200">
      <div className="logo-container">
        <img
          className="w-25"
          src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/33622/optimized_product_thumb_stage.jpg"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button className="login-button" onClick={() => setLogin(!login)}>
            {login ? "logout" : "login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
