import React from "react";
import { useState } from "react";
import "./RegisterComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"; // Import the chevron-right icon
import Navbar from "./Navbar";
import FooterComponent from "./FooterComponent1";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import usePasswordToggle from "./usePasswordToggle";

const RegisterComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    address1: "",
    address2: "",
    city: "",
    pincode: "",
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

  const handleRegistration = (event) => {
    event.preventDefault();
    // Process the registration form data here
    console.log("Form data submitted:", formData);

    setFormData({
      name: "",
      mobile: "",
      email: "",
      password: "",
      confirmPassword: "",
      address1: "",
      address2: "",
      city: "",
      pincode: "",
    });
  };
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>CREATING A NEW ACCOUNT</h2>
            <br /> <br />
            <h5>ACCOUNT INFORMATION</h5>
            <p>
              When you are new, you can create your account here. Enter your
              details below.
            </p>
            <form onSubmit={handleRegistration}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  id="name"
                  required
                  style={{ height: "55px" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Mobile"
                  id="mobile"
                  style={{ height: "55px" }}
                />
              </div>
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
              {/* <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                  onChange={handleInputChange}
                  value={formData.password}
                  style={{ height: "55px" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  required
                  onChange={handleInputChange}
                  value={formData.confirmPassword}
                  style={{ height: "55px" }}
                />
              </div> */}
              {/* <div className="mb-3 row">
                <div className="col-md-6">
                  <label htmlFor="password" className="form-label">
                    Password<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type={PasswordInputType}
                    className="form-control"
                    id="password"
                    required
                    placeholder="Password"
                    onChange={handleInputChange}
                    value={formData.password}
                    style={{ height: "55px" }}
                  />
                  <span className="password-toggle-icon">{ToggleIcon}</span>
                </div>
                <div className="col-md-6">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    required
                    placeholder="Confirm Password"
                    onChange={handleInputChange}
                    value={formData.confirmPassword}
                    style={{ height: "55px" }}
                  />
                </div>
              </div> */}
              <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password*
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  required
                  onChange={handleInputChange}
                  value={formData.password}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handlePasswordToggle}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password*
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="confirmPassword"
                  required
                  onChange={handleInputChange}
                  value={formData.confirmPassword}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handlePasswordToggle}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div> 

              <div className="mb-3">
                <label htmlFor="address1" className="form-label">
                  Address 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address1"
                  placeholder="Address 1"
                  style={{ height: "55px" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address2" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Address 2"
                  style={{ height: "55px" }}
                />
              </div>
              {/* <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" className="form-control" id="city" style={{ height: '55px' }} />
        </div>
        <div className="mb-3">
          <label htmlFor="pincode" className="form-label">Pincode / Zipcode</label>
          <input type="text" className="form-control" id="pincode" style={{ height: '55px' }} />
        </div> */}
              <div className="mb-3 row">
                <div className="col-md-6">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="City"
                    onChange={handleInputChange}
                    value={formData.city}
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="pincode" className="form-label">
                    Pincode / Zipcode
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pincode"
                    placeholder="Pincode / Zipcode"
                    onChange={handleInputChange}
                    value={formData.pincode}
                    style={{ height: "55px" }}
                  />
                </div>
              </div>
              <br />
              <div className="text-end">
                <button type="submit" className="btn btn-dark">
                  REGISTER <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <h5>I’M ALREADY A CUSTOMER</h5>
            <p>
              Have you been here before? You can login by clicking the button
              below.
            </p>
            <button className="btn btn-dark">
              SIGN IN <FontAwesomeIcon icon={faChevronRight} />
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

export default RegisterComponent;
