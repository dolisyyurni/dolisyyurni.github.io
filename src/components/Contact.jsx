import React, { useState } from "react";
import { init, send } from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  init("ZuOK4LvDo0f2WhcST"); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    send("service_g743mtc", "template_jb7a1me", emailParams)
      .then((response) => {
        console.log("Correo enviado exitosamente:", response);
        alert("¡Tu mensaje ha sido enviado!");
        setFormData({
          name: "",
          email: "",
          message: "",
        }); 
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
        alert("Hubo un error al enviar el mensaje, por favor inténtalo nuevamente.");
      });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">FIND ME ON</h2>
      <div className="social-icons">
       
        <a href="https://line.me/ti/p/GrKcxyc5qX" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-line"></i>
        </a>
        <a href="https://instagram.com/dolisyuu" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://ipb.link/linkedin-dolisy" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      <p className="contact-text">
        If you want to get in touch with me, feel free to send a message. I’d love to hear from you!
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3 className="form-title">Contact Me</h3>

        <div className="form-group">
          <label htmlFor="name">NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
