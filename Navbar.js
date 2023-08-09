import React from "react";
import { Link } from "react-router-dom"; 
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faSignInAlt,
  faSearch,
  faHeart,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import logoo from './logo.png';
// import AboutUs from "./AboutUs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="image" src={logoo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/products">PRODUCTS</Link>
        </li>
        <li>
        {/* <a href="/aboutus">ABOUT US</a> */}
          <Link to="/AboutUs">ABOUT US</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT US</Link>
        </li>
      </ul>
      <div className="icons">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        <FontAwesomeIcon icon={faUser} size="2x" />
        <FontAwesomeIcon icon={faSignInAlt} size="2x" />
        <FontAwesomeIcon icon={faSearch} size="2x" />
        <FontAwesomeIcon icon={faHeart} size="2x" />
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
      </div>
    </nav>
  );
};

export default Navbar;