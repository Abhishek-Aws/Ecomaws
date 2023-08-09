import React from 'react';
import './Trending.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Trending = () => {
  return (
    <div>
      <div className="sec_title position-relative text-center mb-3 mt-3">
        <h2
         
          style={{
            fontWeight: 600,
            color: "#2c2c2c",
            opacity: 0.11,
            position: "absolute",
            left: "50%",
            fontStyle: "italic",
            marginTop:"-25px",
            transform: "translate(-50%, 0%)",
            WebkitTransform: 'translate(-50%, 0%)',
            fontSize: 55,
            fontFamily: "initial",
            
          }}
        >
          Trendy Products
        </h2>
        <h3>Our Trending Products</h3>
      </div>
      <div className="btn-container">
        <button className="btn stretched-link borders">
          Explore More <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default Trending;