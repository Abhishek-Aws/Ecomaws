import React from 'react'
import "./LatestNews.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Client1 from "./images1.png";
import Client2 from "./image2.png";
import Client3 from "./images2.png";



const newsData = [
    {
      id: 1,
      title: "Let's start bring sale on this saummer ...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Continue Reading ...",
      image: Client1, // Replace with your image URL
    },
    {
      id: 2,
      title: "Let's start bring sale on this saummer ...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Continue Reading ....",
      image: Client2, // Replace with your image URL
    },
    {
      id: 3,
      title: "Let's start bring sale on this saummer ...",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Continue Reading ...",
      image: Client3, // Replace with your image URL
    },
  ];

const  LatestNews = () => {
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
          Latest News
        </h2>
        <h3>New Updates</h3>
      </div>
    <div className="news-container">
      <div className="row">
        {newsData.map((item) => (
          <div className="col-md-4" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="news-image"
            />
            <h2 className="news-title">{item.title}</h2>
            <p className="news-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default  LatestNews;