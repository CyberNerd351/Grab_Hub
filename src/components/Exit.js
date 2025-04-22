import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

const Exit = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/");
  };

  return (
    <div className="container text-center mt-5 text-white">
      <h2>You have successfully logged out.</h2>
      <p>
        We hope to see you again soon at <strong>Grab Hub</strong>!
      </p>

      {/* 🌟 Stylish Login Icon Button */}
      <button
        onClick={handleLoginRedirect}
        className="btn btn-outline-success mt-4"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "1.1rem",
          fontWeight: "bold",
          padding: "10px 20px",
          borderRadius: "30px",
          boxShadow: "0 0 12px rgba(0,255,0,0.5)",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(0,255,0,0.2)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = "transparent")
        }
        title="Go to Get Products"
      >
        <FaSignInAlt size={20} />
        Login 
      </button>
    </div>
  );
};

export default Exit;
