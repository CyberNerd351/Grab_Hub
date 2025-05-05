import React, { useState } from "react";
import './navbar.css';
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaPlusCircle,
  FaQuestionCircle,
  FaUserCircle,
  FaSignOutAlt
} from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [showHelpDropdown, setShowHelpDropdown] = useState(false);

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

  const handlePersonIconClick = () => {
    navigate("/signup"); // Navigate to the signup/signin page
  };

  return (
    <>
      <nav className="navbar d-flex align-items-center justify-content-between px-3">
        {/* Logo */}
        <div className="logo">
          GRAB <span>HUB</span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links d-flex align-items-center gap-4 ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)} className="text-white nav-link">
            <FaHome className="me-1" /> HOME
          </Link>
          <Link to="/aboutus" onClick={() => setIsOpen(false)} className="text-white nav-link">
            <FaInfoCircle className="me-1" /> About Us
          </Link>
          <Link to="#" onClick={handleAddProductClick} className="text-white nav-link">
            <FaPlusCircle className="me-1" /> Add Products
          </Link>

          {/* Help Dropdown Trigger */}
          <div className="position-relative">
            <span
              onClick={() => setShowHelpDropdown(!showHelpDropdown)}
              className="text-white nav-link"
              style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            >
              <FaQuestionCircle className="me-1" /> Help
            </span>

            {showHelpDropdown && (
              <div
                className="position-absolute bg-dark p-2 rounded"
                style={{ top: "40px", left: 0, minWidth: "200px", zIndex: 1000 }}
              >
                <Link to="/faq" className="d-block text-white mb-2">📘 FAQs</Link>
                <Link to="/support" className="d-block text-white mb-2">📞 Contact Support</Link>
              </div>
            )}
          </div>
        </div>

        {/* User Account Controls */}
        <div className="right-controls d-flex align-items-center gap-3">
          <FaUserCircle
            size={24}
            className="text-white"
            onClick={handlePersonIconClick}
            style={{ cursor: "pointer" }}
            title="Sign Up / Sign In"
          />
          {isLoggedIn && (
            <>
              <button
                className="btn btn-outline-warning"
                onClick={handleLogout}
                title="Log Out"
              >
                <FaSignOutAlt /> Log Out
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Admin Password Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>🔒 Admin Access</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Enter Admin Password to Continue:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={verifyAdminPassword}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
