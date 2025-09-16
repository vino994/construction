import React, { useState, useEffect } from "react";
import "../App.css";
import { FaBars, FaTimes, FaCouch } from "react-icons/fa"; // You can change icon

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar sticky-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a className="navbar-brand fw-bold gradient-logo d-flex align-items-center" href="#">
          <FaCouch className="logo-icon me-2" /> Ajith Sanjeev
        </a>

        {/* Desktop Menu */}
        <ul className="nav-links d-none d-lg-flex">
          <li><a href="#">Product</a></li>
          <li><a href="#">Lifestyle</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Projects</a></li>
        </ul>

        {/* Mobile Toggler */}
        <button className="nav-toggle d-lg-none" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#" onClick={toggleMenu}>Product</a></li>
          <li><a href="#" onClick={toggleMenu}>Lifestyle</a></li>
          <li><a href="#" onClick={toggleMenu}>News</a></li>
          <li><a href="#" onClick={toggleMenu}>Projects</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
