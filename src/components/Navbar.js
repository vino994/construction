import React, { useState, useEffect } from "react";
import "../App.css";
import { FaBars, FaTimes, FaCouch } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkText, setDarkText] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        setDarkText(true); // dark text when scrolled
      } else {
        setScrolled(false);
        setDarkText(false); // light text on hero background
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar sticky-top ${scrolled ? "scrolled" : ""} ${
        darkText ? "dark-text" : "light-text"
      }`}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a
          className="navbar-brand fw-bold gradient-logo d-flex align-items-center"
          href="#hero"
        >
          <FaCouch className="logo-icon me-2" /> Ajith Sanjeev
        </a>

        {/* Desktop Menu */}
        <ul className="nav-links d-none d-lg-flex">
          <li><a href="#product">Product</a></li>
          <li><a href="#lifestyle">Lifestyle</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>

        {/* Mobile Toggler */}
        <button className="nav-toggle d-lg-none" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#product" onClick={toggleMenu}>Product</a></li>
          <li><a href="#lifestyle" onClick={toggleMenu}>Lifestyle</a></li>
          <li><a href="#news" onClick={toggleMenu}>News</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
