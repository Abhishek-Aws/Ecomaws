import React from "react";
import "./ContactUs.css";
import Navbar from "./Navbar";
import FooterComponent from "./FooterComponent1";


const ContactUs = () => {
  const [formStatus, setFormStatus] = React.useState("Send Message");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, mobile, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      mobile: mobile.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <>
    < Navbar />
      <div className="sec_title position-relative text-center">
        <h2
          style={{
            fontWeight: 600,
            color: "#2c2c2c",
            opacity: 0.11,
            position: "absolute",
            left: "50%",
            fontStyle: "italic",
            marginTop: "-25px",
            transform: "translate(-50%, 0%)",
            WebkitTransform: "translate(-50%, 0%)",
            fontSize: 55,
            fontFamily: "initial",
          }}
        >
          Contact Us
        </h2>
        <h3>Get In Touch</h3>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h4>Address</h4> <br />
              <h4>Make a Call</h4>
              <p>
                Customer Care: <br />
                <br />
                <span>+91 1234567890</span>
              </p>
              <br />
              <h4>Drop A Mail</h4>
              <p>
                Fill out our form and we will contact you as soon as possible.
              </p>
              <p>tempabhishek5117@outlook.com</p>
            </div>
          </div>
          <div className="col-md-6">
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Your Name *
                </label>
                <input
                  className="form-control"
                  placeholder="Your Name"
                  type="text"
                  id="name"
                  required
                  style={{ height: '60px' }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Your Email *
                </label>
                <input
                  className="form-control"
                  placeholder="Your Email"
                  type="email"
                  id="email"
                  style={{ height: '60px' }} 
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="mobile">
                  Mobile No.
                </label>
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Your Phone (optional)"
                  id="mobile"
                  style={{ height: '60px' }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea className="form-control" id="message" style={{ height: '100px' }} required />
              </div>
              <button className="btn btn-brand mt-2 mb-4" type="submit">
                {formStatus}
              </button>
            </form>
          </div>
        </div>
      </div>
      < FooterComponent />
    </>
  );
};
export default ContactUs;
