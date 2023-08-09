import React from "react";
import { useState } from "react";
import "./LoginComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"; // Import the chevron-right icon
import Navbar from "./Navbar";
import FooterComponent from "./FooterComponent1";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import usePasswordToggle from "./usePasswordToggle";

const LoginComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
   
  });
//   const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Process the registration form data here
    console.log("Form data submitted:", formData);

    setFormData({
      email: "",
      password: "",
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
            Have you been here before? Please enter your e-mail address and password. Your saved data will then be retrieved.
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
              <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password<span style={{ color: "red" }}>*</span>
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  required
                  onChange={handleInputChange}
                  value={formData.password}
                  placeholder="Password"
                  style={{ height: "55px" }}
                />
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={handlePasswordToggle}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
            <br/>
            <div className="d-flex justify-content-between align-items-center">
                <span>
                  <a href="#" className="forgot-password-link">
                    Forgot Password?
                  </a>
                </span>
                <button type="submit" className="btn btn-dark">
                  SIGN IN <FontAwesomeIcon icon={faChevronRight} />
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

export default LoginComponent;
