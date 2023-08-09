import React from "react";
import "./GalleryComponent.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const imageUrls = [
  "image1.jpg", 
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
];

const GalleryComponent = () => {
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
          Instagram Gallery
        </h2>
        <h3>From Instagram</h3>
      </div>
      <div className="gallery-container">
      <div className="row">
        <div className="col-md-12">
          <div className="image-row">
            {imageUrls.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Images ${index + 1}`}
                className="gallery-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GalleryComponent;