import React from "react";
import "./home.css";
import Men from "./Men.png";
import Kid from "./Kids.png";
import Women from "./Women.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from "./Navbar";
 import Trending from "./Trending";
import Client from "./Client";
import LatestNews from "./LatestNews";
import GalleryComponent from "./GalleryComponent";
import FeatureComponent from "./FeatureComponent";
import FooterComponent from "./FooterComponent1";
// import ForgetPasswordComponent from "./ForgetPasswordComponent";
//  import ContactUs from "./ContactUs";
// import AboutUs from "./AboutUs";
// import RegisterComponent from "./RegisterComponent";
//  import LoginComponent from "./LoginComponent";



 



const Home = () => {
  return (
    <>
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row no-gutters image-container">
          <div className="col-md-4">
            <div className="image-box">
            <img src={Men} alt="Men" />
            <div className="image-content">
                <h2 className="heading">Mens</h2>
                <button className="shop-button">Shop Mens <FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-box">
              <img src={Kid} alt="Kid" />
              <div className="image-content">
              <h2 className="heading">Kids</h2>
                <button className="shop-button">Shop Kids <FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-box">
              <img src={Women} alt="Women" />
              <div className="image-content">
              <h2 className="heading">Womens</h2>
                <button className="shop-button">Shop Womens<FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
            {/* 
      <Client />
      <NewsUpdates /> */}
    </div>
    <Trending />
    <Client />
    <LatestNews />
    < GalleryComponent />
    <FeatureComponent />
    <FooterComponent />
    {/* <AboutUs /> */}
     {/* <ContactUs />  */}
    {/* <RegisterComponent /> */}
    {/* <LoginComponent /> */}
    {/* <ForgetPasswordComponent /> */}


    </>
  );
};

export default Home;