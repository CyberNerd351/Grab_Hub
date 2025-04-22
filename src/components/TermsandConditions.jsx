import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <section className="container mt-5 bg-light p-5 rounded shadow-lg">
      {/* Return Button */}
      <div className="text-start mb-4">
        <button
          className="btn btn-dark d-flex align-items-center gap-2 px-4 py-2"
          onClick={handleReturn}
        >
          <FaArrowLeft /> Back to Products
        </button>
      </div>

      <h1 className="text-center fw-bold mb-4">Terms & Conditions</h1>

      <p className="lead text-muted">
        Welcome to Grab Hub! By accessing or using our platform, you agree to be bound by the following terms and conditions. Please read them carefully.
      </p>

      <div className="mt-4">
        <h4 className="fw-bold">1. Acceptance of Terms</h4>
        <p>
          By using Grab Hub’s services, you agree to comply with and be legally bound by these Terms. If you do not agree to these terms, you may not use our services.
        </p>
      </div>

      <div className="mt-4">
        <h4 className="fw-bold">2. Services Offered</h4>
        <p>
          Grab Hub connects customers with local restaurants and kitchens to provide food delivery services. We are a technology platform and do not prepare food ourselves.
        </p>
      </div>

      <div className="mt-4">
        <h4 className="fw-bold">3. User Responsibilities</h4>
        <ul>
          <li>Provide accurate information during registration and ordering.</li>
          <li>Keep your account credentials secure.</li>
          <li>Use the service only for lawful purposes.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="fw-bold">4. Payment & Refunds</h4>
        <p>
          All payments must be made through our secure payment gateway. Refunds are provided only in cases of non-delivery or unacceptable quality, subject to review.
        </p>
      </div>

      <div className="mt-4">
        <h4 className="fw-bold">5. Delivery Policy</h4>
        <p>
          We aim to deliver orders on time, but delays may occur due to factors beyond our control. In such cases, we will do our best to keep you informed.
        </p>
      </div>

      <div className="mt-4">
        <h4 className="fw-bold">6. Termination</h4>
        <p>
          We reserve the right to terminate or suspend access to our services for violations of our terms or misuse of the platform.
        </p>
      </div>

      <div className="mt-4">
        <h4 className="fw-bold">7. Modifications</h4>
        <p>
          Grab Hub reserves the right to modify these terms at any time. Users will be notified of significant changes via email or through our platform.
        </p>
      </div>

      <div className="mt-5 text-center">
        <p className="text-muted">Last Updated: April 2025</p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
