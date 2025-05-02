import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import './MyFooter.css';
import { Link } from "react-router-dom";

const MyFooter = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_68vav8p',
        'template_0bnzxp8',
        form.current,
        'HoiMtgtjeo9hJLvQP'
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
    <footer className="my-footer-wrapper py-5 bg-dark w-100">
      <div className="container-fluid px-4">
        <div className="footer-card bg-secondary shadow-lg rounded-4 p-5 text-white">
          <div className="row">

            {/* Why Choose Us */}
            <div className="col-md-4 mb-4">
              <h4 className="text-warning mb-3">Why Choose Grab Hub?</h4>
              <ul className="list-unstyled">
                <li>🚀 <strong>Fast & Reliable:</strong> Prompt delivery every time.</li>
                <li>🍽️ <strong>Huge Selection:</strong> Dine from 100+ restaurants.</li>
                <li>🔐 <strong>Secure Payments:</strong> M-Pesa, cards & more.</li>
                <li>💬 <strong>24/7 Support:</strong> We've always got your back.</li>
                <li>🌟 <strong>Loyal Customers:</strong> Join thousands who trust us.</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-md-4 mb-4">
              <h4 className="text-center text-white card-header bg-warning rounded">Contact Us</h4>
              <form ref={form} onSubmit={sendEmail} className="mt-3">
                <div className="form-group">
                  <label htmlFor="name">Your Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="email">Your Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={handleEmailFocus}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="message">Your Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="form-control"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onFocus={handleMessageFocus}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-warning mt-3 w-100 rounded-pill">
                  Send Message
                </button>
                {status && <p className="mt-3 text-center">{status}</p>}
              </form>
            </div>

            {/* Stay Connected */}
            <div className="col-md-4 mb-4">
              <h4 className="text-center text-white card-header bg-warning rounded">Stay Connected</h4>
              <div className="d-flex justify-content-center mt-3 mb-4">
                <img src="/images/fb.png" alt="Facebook" className="mx-2" style={{ width: '32px' }} />
                <img src="/images/in.png" alt="LinkedIn" className="mx-2" style={{ width: '32px' }} />
                <img src="/images/x.png" alt="X (Twitter)" className="mx-2" style={{ width: '32px' }} />
              </div>

              <h6 className="text-uppercase">Visit Us:</h6>
              <p>
                Grab Hub HQ, 2nd Floor, Nairobi Tech Tower<br />
                Ngong Rd, Nairobi, Kenya
              </p>
              <p>
                <a href="mailto:peternyagaka5@gmail.com" className="text-white d-block">
                  📧 peternyagaka5@gmail.com
                </a>
                <a href="tel:0117067894" className="text-white d-block">
                  📞 0117067894
                </a>
              </p>

              <p className="mt-3">Developed by Peter. &copy; 2025 All rights reserved.</p>
              <Link to="/terms" className="text-white text-decoration-underline">
                Terms and Conditions
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
