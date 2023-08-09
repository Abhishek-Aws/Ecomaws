import React from "react";
import "./FooterComponent.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";


const FooterComponent = () => {
  return (
    <>
    <footer className="footer-container">
      <div className="row">
        <div className="col-md-4">
          {/* <h5>Logo</h5> */}
          <img src="image.jpg" alt="Logo" /><br/> <br/>
          <p>+91 1234567890</p>
          <p>tempabhishek5117@outlook.com</p>
          <div className="social-icons">
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a href="https://youtube.com">
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </a>
        </div>
        </div>
        <div className="col-md-2">
          <h5>CUSTOMER</h5>
          <p>Home</p>
          <p>Products</p>
          <p>Your Orders</p>
        </div>
        <div className="col-md-3">
          <h5>COMPANY</h5>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Privacy</p>
          <p>FAQs</p>
        </div>
        <div className="col-md-3">
          <h5>ABOUT US</h5>
          <p>aws</p>
        </div>
      </div>
      <hr  className="hrclass"/>
          <p className="copy-text">&copy; 2023 aws. Designed By BananaShop</p>
    </footer>
          {/* <hr />
          <p className="copy-text">&copy; 2023 aws. Designed By BananaShop</p> */}
          </>
  );
};

export default FooterComponent;