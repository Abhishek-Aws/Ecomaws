import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src="https://aws.amazon.com/images/awslogo.gif" alt="AWS Logo" />
      </div>
      <div className="footer-contact">
        <p>
          <b>Contact Us:</b>
          <br />
          +1 888 555 1212
          <br />
          tempabhishek5117@outlook.com
        </p>
      </div>
      <div className="footer-links">
        <ul>
          {/* <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Your Orders</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">FAQs</a></li> */}
        </ul>
      </div>
      <div className="footer-about">
        <p>
          <b>About Us:</b>
          <br />
          AWS is a leading cloud computing platform that offers a broad set of global compute, storage, database, analytics, application, and deployment services.
        </p>
      </div>
      <div className="footer-copyright">
        © 2023 AWS. Designed By BananaShop
      </div>
    </footer>
  );
};

export default Footer;
