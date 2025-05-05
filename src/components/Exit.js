import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBoxOpen } from "react-icons/fa";

const Exit = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/"); // Redirect to Get Products instead of Sign In
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        color: "white",
        textAlign: "center",
        padding: "20px",
        animation: "fadeIn 1s ease-in-out",
      }}
    >
      <div className="p-5 rounded shadow-lg" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
        <h1 className="mb-3 fw-bold" style={{ fontSize: "2.5rem" }}>
          👋 Logged Out Successfully!
        </h1>
        <p className="mb-4" style={{ fontSize: "1.2rem" }}>
          Thank you for using <strong>Grab Hub</strong>.<br />
          We hope to serve you again soon!
        </p>

        {/* Redirect to Get Products */}
        <button
          onClick={handleLoginRedirect}
          className="btn btn-outline-light"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            padding: "12px 28px",
            borderRadius: "40px",
            boxShadow: "0 0 18px rgba(255,255,255,0.3)",
            transition: "all 0.3s ease-in-out",
            border: "2px solid #00ffae",
            background: "linear-gradient(90deg, rgba(0,255,174,0.2), transparent)",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0,255,174,0.3)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.transform = "scale(1)";
          }}
          title="Go to Product Page"
        >
          <FaBoxOpen size={20} className="hover-glow" />
          Browse Products
        </button>

        <p className="mt-4 text-light fst-italic" style={{ fontSize: "0.95rem" }}>
          You can continue to explore available products without signing in.
        </p>
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .hover-glow:hover {
          filter: drop-shadow(0 0 6px #00ffae);
        }
      `}</style>
    </div>
  );
};

export default Exit;
