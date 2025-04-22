import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Icon for return button

const AboutUs = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <section className="container mt-5 bg-warning mb-5 rounded p-4 shadow-lg">
      {/* Return Button */}
      <div className="text-start mb-4">
        <button
          className="btn btn-dark d-flex align-items-center gap-2 px-4 py-2"
          onClick={handleReturn}
        >
          <FaArrowLeft /> Return to Products
        </button>
      </div>

      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="fw-bold">About Grab Hub</h1>
          <p className="lead">
            At Grab Hub, we’re dedicated to bringing you delicious, fresh meals with just a few clicks.
            Whether you're craving comfort food or something new, our platform connects you to a wide variety
            of local restaurants and kitchens, delivering great food straight to your door. With convenience,
            quality, and customer satisfaction at the heart of what we do, Grab Hub is here to satisfy your
            hunger, anytime, anywhere.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2 className="fw-bold">Our Story</h2>
          <p>
            Founded in 2025, Grab Hub started with a simple vision:
            Grab Hub aims to make enjoying delicious, high-quality food effortless and convenient, delivering
            fresh meals straight to your door with a few simple clicks. Our vision is to be the go-to platform
            for quick, satisfying meals that cater to every craving, anytime, anywhere.
            Over the year, we've grown into a trusted brand, serving customers with top-notch products and
            excellent service.
          </p>
        </div>

        <div className="col-md-6">
          <h2 className="fw-bold">Why Choose Us?</h2>
          <ul className="list-group">
            <li className="list-group-item">High-Quality Products</li>
            <li className="list-group-item">Affordable Prices</li>
            <li className="list-group-item">Fast & Reliable Delivery</li>
            <li className="list-group-item">Excellent Customer Service</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
