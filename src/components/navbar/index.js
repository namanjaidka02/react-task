import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <button className="navbar-btn">Logout</button>
      </Link>

      <Link to="/cart">
        <i
          className="fa-solid fa-cart-shopping cursor-pointer"
          style={{ color: "#FF5733" }}
        ></i>
      </Link>
    </nav>
  );
};

export default Navbar;
