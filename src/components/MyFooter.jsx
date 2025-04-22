import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import './MyFooter.css';
import { Link } from "react-router-dom";

const MyFooter = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  // Input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_68vav8p',      // Replace with actual EmailJS service ID
        'template_0bnzxp8',     // Replace with actual EmailJS template ID
        form.current,
        'HoiMtgtjeo9hJLvQP'          // Replace with actual EmailJS public key/user ID
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        () => {
          setStatus("❌ Error sending message. Please try again.");
        }
      );
  };

  // Handlers with prompts
  const handleEmailFocus = () => {
    if (name.trim() === "") {
      alert("Please enter your name first.");
      document.getElementById("name").focus();
    }
  };

  const handleMessageFocus = () => {
    if (email.trim() === "") {
      alert("Please enter your email first.");
      document.getElementById("email").focus();
    }
  };

  return (
    <div className="row text-white justify-content-center mt-2 bg-dark p-4">
      {/* About Us Section */}
      <div className="col-md-4">
        <h3>About Us</h3>
        <p>
          At Grab Hub, we’re dedicated to bringing you delicious, fresh meals with just a few clicks.
          Whether you're craving comfort food or something new, our platform connects you to a wide variety
          of local restaurants and kitchens, delivering great food straight to your door.
        </p>

        <p>At Grab Hub, we bring your favorite meals to your doorstep faster and fresher than ever. With a wide variety of local restaurants, seamless ordering, and unbeatable customer service, we make food delivery easy, reliable, and rewarding. Whether you're at home, work, or on the go — Grab Hub delivers satisfaction in every bite. Choose convenience. Choose quality. Choose Grab Hub.</p>
      </div>

      {/* Contact Us Section */}
      <div className="col-md-4">
        <h3 className="text-white text-center card-header">Contact Us</h3>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Your Name:</label><br />
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Enter your name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />

          <label htmlFor="email">Your Email:</label><br />
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Enter your email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleEmailFocus}
            required
            disabled={!name}
          />
          <br />

          <label htmlFor="message">Your Message:</label><br />
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Leave a comment"
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={handleMessageFocus}
            required
            disabled={!email}
          ></textarea>
          <br />

          <button type="submit" className="send-btn btn btn-warning">Send Message</button>
        </form>
        {status && <p className="mt-3">{status}</p>}
      </div>

      {/* Stay Connected Section */}
      <div className="col-md-4">
        <h3 className="text-white text-center card-header">Stay Connected</h3>
        <br />
        <img src="/images/fb.png" alt="Facebook" style={{ width: '32px', margin: '0 5px' }} />
        <img src="/images/in.png" alt="LinkedIn" style={{ width: '32px', margin: '0 5px' }} />
        <img src="/images/x.png" alt="X (Twitter)" style={{ width: '32px', margin: '0 5px' }} />
        <br /><br />

        <h5>Visit us at:</h5>
        <b>
          Haven Court 2nd Floor, Waiyaki Way<br />
          Opposite St Marks Church, Nairobi, Kenya<br />
          <a href="mailto:peternyagaka5@gmail.com" className="text-white text-decoration-underline">
            peternyagaka5@gmail.com
          </a><br />
          <a href="tel:0117067894" className="text-white text-decoration-underline">
            Phone: 0117067894
          </a>
        </b>

        <p className="p-1 mt-3">Developed by Peter. &copy; 2025. All rights reserved.</p>

        <Link to={"/terms"} className="bg-dark text-white">Terms and Conditions</Link>
       
      </div>
    </div>
  );
};

export default MyFooter;
