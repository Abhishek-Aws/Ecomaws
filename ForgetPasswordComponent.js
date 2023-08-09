import React from "react";
import { useState } from "react";
import "./ForgetPasswordComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"; 
import Navbar from "./Navbar";
import FooterComponent from "./FooterComponent1";

const FoergetPasswordComponent = () => {
  const [formData, setFormData] = useState({
    email: "", 
  });


  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Process the registration form data here
    console.log("Form data submitted:", formData);

    setFormData({
      email: "",
    });
  };
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h5>I’M ALREADY A CUSTOMER</h5>
            <p>
                Enter the e-mail address associated with your account, then click Submit. We'll email you the <br/> password.
            </p>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  required
                  style={{ height: "55px" }}
                />
              </div>
            <br/>
            <div className="d-flex justify-content-between align-items-center">
                <span className="text-forget">Have Password? 
                  <a href="#" className="forgot-password-link">
                    Login Here
                  </a>
                </span>
                <button type="submit" className="btn btn-dark">
                  RETRIEVE PASSWORD <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <h5>NOT A CUSTOMER YET?</h5>
            <p>
            Is this your first time here? We will ask you to provide some information in order to <br /> make ordering as safe and easy as possible.
            </p>
            <br/>
            <button className="btn btn-dark">
             CREATE ACCOUNT <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
      <br />
      <br /> <br />
      <FooterComponent />
    </>
  );
};

export default FoergetPasswordComponent;
