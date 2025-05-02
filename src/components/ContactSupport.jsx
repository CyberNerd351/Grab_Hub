import React from "react";
import { FaEnvelope, FaPhoneAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import "./contactsupport.css";

const ContactSupport = () => {
  return (
    <div className="contact-support container py-5">
      <h2 className="text-center mb-5 text-primary">Contact Grab Hub Support</h2>

      <div className="row">
        {/* Contact Info */}
        <div className="col-md-8 offset-md-2">
          <div className="p-5 shadow-lg rounded bg-light h-100">
            <h5 className="mb-4 text-center">Support Information</h5>
            <div className="contact-info-box">
              <div className="contact-info-item mb-3">
                <FaEnvelope className="contact-icon text-primary" size={24} />
                <div className="contact-info">
                  <p className="fw-bold">Email</p>
                  <p className="mb-0">support@grabhub.co.ke</p>
                </div>
              </div>
              <div className="contact-info-item mb-3">
                <FaPhoneAlt className="contact-icon text-success" size={24} />
                <div className="contact-info">
                  <p className="fw-bold">Phone</p>
                  <p className="mb-0">+254 117067894</p>
                </div>
              </div>
              <div className="contact-info-item mb-3">
                <FaClock className="contact-icon text-warning" size={24} />
                <div className="contact-info">
                  <p className="fw-bold">Operating Hours</p>
                  <p className="mb-0">Mon - Sat: 8:00am - 6:00pm</p>
                </div>
              </div>
              <div className="contact-info-item">
                <FaMapMarkerAlt className="contact-icon text-danger" size={24} />
                <div className="contact-info">
                  <p className="fw-bold">Our Physical Office</p>
                  <p className="mb-0">Grab Hub HQ, 2nd Floor, Nairobi Tech Tower</p>
                  <p className="mb-0">Ngong Rd, Nairobi, Kenya</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-muted">
                We're here to assist you! Reach out to us through any of the channels above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
