import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mt-5 p-5 rounded shadow-lg"
      style={{
        background: "linear-gradient(to right, #fff, #f8f9fa)",
        border: "1px solid #eaeaea",
      }}
    >
      {/* Back Button */}
      <div className="text-start mb-4">
        <button
          className="btn btn-outline-dark d-flex align-items-center gap-2 px-4 py-2 fw-bold shadow-sm"
          onClick={handleReturn}
        >
          <FaArrowLeft /> Back to Products
        </button>
      </div>

      <h1 className="text-center fw-bold mb-4" style={{ color: "#FF4500" }}>
        Terms & Conditions
      </h1>

      <p className="lead text-muted text-center mx-auto" style={{ maxWidth: "800px" }}>
        Welcome to <strong>Grab Hub</strong>! By using our services, you agree to our policies outlined below.
        Please read them carefully to understand your rights and obligations.
      </p>

      <hr className="my-5" />

      {[
        {
          title: "1. Acceptance of Terms",
          text: `By using Grab Hub’s services, you agree to comply with and be legally bound by these Terms.
           If you do not agree, please discontinue use.`,
        },
        {
          title: "2. Services Offered",
          text: `Grab Hub connects customers with local restaurants and kitchens to provide food delivery.
           We are a platform — not a food preparer.`,
        },
        {
          title: "3. User Responsibilities",
          text: (
            <ul>
              <li>✅ Provide accurate info during sign-up and ordering.</li>
              <li>✅ Keep your credentials safe and secure.</li>
              <li>✅ Use the platform legally and respectfully.</li>
            </ul>
          ),
        },
        {
          title: "4. Payment & Refunds",
          text:
            "Payments are processed securely. Refunds are considered for non-delivery or quality issues, upon verification.",
        },
        {
          title: "5. Delivery Policy",
          text:
            "We strive for on-time delivery, but factors like weather or traffic may cause delays. We’ll keep you informed if so.",
        },
        {
          title: "6. Termination",
          text:
            "Accounts may be suspended or terminated for misuse, fraud, or violations of our terms.",
        },
        {
          title: "7. Modifications",
          text:
            "We may update these terms from time to time. You’ll be notified of significant changes via email or in-app messages.",
        },
      ].map((section, idx) => (
        <div key={idx} className="mt-5">
          <h4 className="fw-bold d-flex align-items-center mb-3" style={{ color: "#343a40" }}>
            <FaRegCheckCircle className="me-2 text-success" /> {section.title}
          </h4>
          <div className="text-muted" style={{ lineHeight: "1.7" }}>{section.text}</div>
        </div>
      ))}

      <div className="mt-5 text-center">
        <p className="text-muted small">📅 Last Updated: April 2025</p>
      </div>
    </motion.section>
  );
};

export default TermsAndConditions;
