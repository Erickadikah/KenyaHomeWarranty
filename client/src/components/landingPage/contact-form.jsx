import React, { useState } from "react";
import postData from "../../controllers/postData";
import "../../assets/styles/landingPage/contactus.scss";
import { FaTimes } from "react-icons/fa";

export default function ContactUsForm(props) {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    message: "",
  });

  const [apiResponseMessage, setApiResponseMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postData("https://backend-phki.onrender.com/contact", {
      name: formData.customerName,
      email: formData.customerEmail,
      message: formData.message,
    })
      .then(function (res) {
        setApiResponseMessage("Your message has been recieved!");
        setTimeout(() => {
          setApiResponseMessage("");
        }, 3000);
      })
      .catch(function (error) {
        console.log("Error during API call:", error);
      });
  };

  return (
    <section id="contactUs" className="shadow">
      <p className="text-danger"><FaTimes size={14} onClick={props.closeForm}/></p>
      <h5 className="text-center">Get In Touch With Us</h5>
      <p className="text-center"><b>We'll get back immediately</b></p>
      {apiResponseMessage && (
        <div
          className="bg-primary"
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "400px",
            padding: "10px",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            color: "white",
          }}
        >
          {apiResponseMessage}
        </div>
      )}

      <div className="form-container container">
        <form role="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            id="name"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="email"
            id="email"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows={10}
            placeholder="Enter your message here"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
