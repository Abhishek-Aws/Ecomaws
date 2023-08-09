import React from "react";
import "./AboutUsFeature.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Cart from "./redcart.jpg"
import Card from "./redcard.jpg"
import Return from "./redreturn.jpg"
import Support from "./redsupport.jpg"

const features = [
  {
    id: 1,
    text: "FREE SHIPPING\nCapped at $10 per order",
    image: Cart, // Replace with your image URL
  },
  {
    id: 2,
    text: "SECURE PAYMENTS\nUp to 6 months installments",
    image: Card, // Replace with your image URL
  },
  {
    id: 3,
    text: "15-DAYS RETURNS\nShop with full confidence",
    image: Return, // Replace with your image URL
  },
  {
    id: 4,
    text: "24X7 FULLY SUPPORT\nGet friendly support",
    image: Support, // Replace with your image URL
  },
];

const FeatureComponent = () => {
  return (
    <div className="feature-container">
      {features.map((feature) => (
        <div className="feature-item" key={feature.id}>
          <img
            src={feature.image}
            alt={feature.text}
            className="feature-image"
          />
          <p className="feature-text">{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureComponent;