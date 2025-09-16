import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "../App.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container-fluid">
        <div className="row align-items-center mb-5">
          {/* Left Text */}
          <div className="col-lg-6">
            <h2 className="footer-heading">Engage with Us in Conversation.</h2>
            <p className="footer-text">
              In a global world based on communication, a brand must look beyond
              its borders, open up to new experiences, and dare to be different.
              Meeting the brightest minds of one's time is the most effective way
              to nurture creativity.
            </p>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/const1.webp`}
              alt="Footer Visual"
              className="footer-img"
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="row footer-links">
          <div className="col-md-3">
            <h6>About</h6>
            <ul>
              <li>Our Story</li>
              <li>Store Locator</li>
              <li>Sustainability</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6>Customer Service</h6>
            <ul>
              <li>Prices and Payments</li>
              <li>Shipping</li>
              <li>Return Policy</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3">
            <h6>Social Media</h6>
            <div className="social-icons">
              <a href="https://www.instagram.com/ajithkumar_sanjeev/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100007252275497" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h6>Newsletter</h6>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="newsletter-input"
              />
              <button type="submit" className="btn stylish-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Brand Bottom */}
        <div className="footer-brand text-center mt-5">
          <h3 className="footer-logo">Ajith Sanjeev</h3>
          <p className="footer-copy">© {new Date().getFullYear()} Ajith sajeev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
