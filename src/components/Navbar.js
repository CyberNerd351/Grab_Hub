import React, { useState } from "react";
import './navbar.css';
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaPlusCircle,
  FaCog,
  FaUserPlus,
  FaSignInAlt,
  FaUser,
  FaSignOutAlt,
  FaLock
} from "react-icons/fa";
import { Modal, Button, FormControl, InputGroup } from "react-bootstrap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate logged in
  const [userName, setUserName] = useState("Peter Nyagaka");
  const [showSettings, setShowSettings] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");

  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/exit");
  };

  const handleAddProductClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const verifyAdminPassword = () => {
    if (adminPassword === "admin") {
      setShowModal(false);
      setAdminPassword("");
      navigate("/addproducts");
    } else {
      alert("❌ Incorrect password. Access denied.");
    }
  };

  return (
    <>
      <nav className="navbar d-flex align-items-center justify-content-between px-3">
        {/* 🌟 Stylized Logo */}
        <div
          className="logo"
          style={{
            fontFamily: "'Cinzel Decorative', cursive",
            fontSize: "2.2rem",
            fontWeight: "bold",
            color: "#FFD700",
            textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
            letterSpacing: "3px",
            userSelect: "none",
          }}
        >
          GRAB <span style={{ color: "#FF4500" }}>HUB</span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links d-flex align-items-center gap-4 ${isOpen ? "open" : ""}`}>
          <Link to='/' onClick={() => setIsOpen(false)} className="text-white nav-link">
            <FaHome className="me-1" /> HOME
          </Link>
          <Link to='/aboutus' onClick={() => setIsOpen(false)} className="text-white nav-link">
            <FaInfoCircle className="me-1" /> About Us
          </Link>
          <Link to="#" onClick={handleAddProductClick} className="text-white nav-link">
            <FaPlusCircle className="me-1" /> Add Products
          </Link>

          {/* ⚙️ Settings Icon now here */}
          <FaCog
            size={24}
            className="settings-icon"
            onClick={() => setShowSettings(!showSettings)}
            style={{
              cursor: 'pointer',
              color: "#fff",
              transition: "transform 0.2s",
            }}
            title="Settings"
            onMouseOver={(e) => (e.currentTarget.style.transform = "rotate(20deg)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "rotate(0deg)")}
          />
        </div>

        {/* Settings Drop-Down */}
        {showSettings && (
          <div
            className="settings-buttons position-absolute bg-dark p-2 rounded"
            style={{ top: "70px", right: "50%", zIndex: 1000 }}
          >
            <Link to='/signup' className="settings-btn text-white d-block mb-2">
              <FaUserPlus className="me-2" /> Sign Up
            </Link>
            <Link to='/signin' className="settings-btn text-white d-block">
              <FaSignInAlt className="me-2" /> Sign In
            </Link>
          </div>
        )}

        {/* User Account Controls on Right */}
        <div className="right-controls d-flex align-items-center gap-3">
          {isLoggedIn && (
            <>
              <span className="user-info text-white d-flex align-items-center">
                <FaUser className="me-1" size={20} />
                {userName}
              </span>

              {/* Stylish Logout Button */}
              <button
                className="btn btn-outline-warning"
                onClick={handleLogout}
                title="Log Out"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontWeight: "bold",
                  padding: "8px 14px",
                  borderRadius: "30px",
                  boxShadow: "0 0 10px rgba(255,165,0,0.5)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ffc107")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <FaSignOutAlt /> Log Out
              </button>
            </>
          )}
        </div>
      </nav>

      {/* 🔐 Admin Password Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>🔐 Admin Access Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <InputGroup.Text>
              <FaLock />
            </InputGroup.Text>
            <FormControl
              type="password"
              placeholder="Enter admin password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={verifyAdminPassword}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
