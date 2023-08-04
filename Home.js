import React from "react";
import "./Home.css";
import Men from "./Men.png";
import Kid from "./kid.png";
import Women from "./women.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
//import Footer from './Footer';
import Trending from "./Trending";
import Client from "./Client";
import NewsUpdates from "./NewsUpdates";


// import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <div className="image-container">
        <div className="container">
          <h2 className="heading">Men</h2>
          <img src={Men} alt="Men" />
          <button className="shop-button">Shop Mens</button>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        {/* Repeat the container for other images */}
        <div className="container">
          <h2 className="heading">Kid</h2>
          <img src={Kid} alt="Kid" />
          <button className="shop-button">Shop Kids</button>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className="container">
          <h2 className="heading">Women</h2>
          <img src={Women} alt="Women" />
          <button className="shop-button">Shop Women</button>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <Trending />
      <Client />
      <NewsUpdates />
    </div>
  );
};

export default Home;
