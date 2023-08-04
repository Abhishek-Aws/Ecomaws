import React from 'react'
import './Trending.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Trending = ()=> {
  return (
    <div>
    <div className="sec_title position-relative text-center" style={{ marginBottom: '30px', marginTop: '30px' }}>
         <h2
        class="off_title"
        style={{
              fontWeight: 600,
              color: "#2c2c2c",
              opacity: 0.11,
              position: "absolute",
              top: 0,
              left: "50%",
              fontStyle: "italic",
              transform: "translate(-50%, 0%)",
              WebkitTransform: 'translate(-50%, 0%)',
              fontSize: 55,
              fontFamily: "initial",
              lineHeight: 36,
        }}
      >
        Trendy Products
      </h2>
      <h3>Our Trending Products</h3>
    </div>
    <div className="btn-container">
    <button className="btn stretched-link borders">Explore More
    <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
    </button>
    </div>
    </div>
  )
}

export default Trending
