import React from 'react';
import aboutUsImage from './aboutUsImage1.png'; // Replace with your image file path
import './AboutUs.css'; // Create a CSS file for styling if needed
import Navbar from './Navbar';
import aboutUsImage2 from './aboutUsImage2.png';
import AboutUsFeature from './AboutUsFeature';
import FooterComponent from './FooterComponent1';

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className="about-us-container">
      <div className="about-us-text">
        <h2>We Have Everything You Need ?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
        </p>
        {/* <button className="about-us-button">See More Info</button> */}
        <br/>
        <div>
            <a class="btn btn-dark" href="#" >See More Info</a>
        </div>
      </div>
      <div className="about-us-image">
        <img src={aboutUsImage} alt="About Us" />
      </div>
    </div>
    <div className="about-us-container">
    <div className="about-us-image">
        <img src={aboutUsImage2} alt="About Us" />
      </div>
      <div className="about-us-text">
        <h2>Justin Lisiakir</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
        </p>
        {/* <button className="about-us-button">See More Info</button> */}
        <div>
            <a class="btn btn-dark" href="#" >See More Info</a>
        </div>
      </div>
    </div>
    <AboutUsFeature />
    <FooterComponent />
    </>
  );
};

export default AboutUs;
