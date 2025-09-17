import React, { useState, useEffect } from "react";
import "../App.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

function Hero() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const gallery = [
    {
      title: "Residential Homes",
      img: `${process.env.PUBLIC_URL}/assets/const2.webp`,
      desc: "We design vastu-compliant Indian homes, blending tradition with modern comforts. From affordable housing to luxury villas, our homes stand for durability and beauty.",
    },
    {
      title: "Temple Architecture",
      img: `${process.env.PUBLIC_URL}/assets/c4.jpg`,
      desc: "Intricate temple construction with traditional stone carvings and heritage restoration work, preserving India’s cultural legacy while ensuring long-lasting structures.",
    },
    {
      title: "Smart City Projects",
      img: `${process.env.PUBLIC_URL}/assets/c6.jpg`,
      desc: "Urban infrastructure including metro stations, highways, and eco-friendly housing that define India’s smart and sustainable future.",
    },
  ];

  // ✅ Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) =>
          prev === gallery.length - 1 ? 0 : prev + 1
        );
        setFade(true);
      }, 600);
    }, 5000);
    return () => clearInterval(interval);
  }, [gallery.length]);

  return (
    <section className="hero-section text-white d-flex flex-column justify-content-between">
      {/* Background Image */}
      <img
        src={gallery[currentIndex].img}
        alt="background"
        className={`hero-img ${fade ? "fade-in" : "fade-out"}`}
      />

      {/* Dynamic Title */}
      <div className="hero-center-text text-center">
        <h1
          className={`fw-bold contemporary-text animated-heading ${
            fade ? "fade-in" : "fade-out"
          }`}
        >
          {gallery[currentIndex].title}
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="container-fluid hero-bottom d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end">
        {/* 🔥 Left Side: Circle Text */}
        <div className="circle-text mb-3 mb-md-0">
          <svg viewBox="0 0 200 200" className="circle-svg">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text fill="white" fontSize="14" fontWeight="600">
              <textPath href="#circlePath" startOffset="0%">
                • Temples • Homes • Bridges • Smart Cities • Heritage •
                Construction • India •
              </textPath>
            </text>
          </svg>
        </div>

        {/* 🔥 Right Side: Description + Contact */}
        <div className="d-flex flex-column flex-md-row gap-3 glasscard">
          {/* Text Card */}
          <div
            className={`hero-glass-card p-3 flex-fill ${
              fade ? "fade-in" : "fade-out"
            }`}
          >
            <p className="mb-2">{gallery[currentIndex].desc}</p>
            <button
              className="btn btn-dark btn-sm mb-3"
              onClick={() => setShowPopup(true)}
            >
              Explore Projects
            </button>

            {/* Contact Details */}
            <div className="contact-details">
              <p className="d-flex align-items-center gap-2">
                <FaPhoneAlt className="text-warning" />
                <a href="tel:+919380334317" className="text-light">
                  +91 93803 34317
                </a>
              </p>
              <p className="d-flex align-items-center gap-2">
                <FaEnvelope className="text-warning" />
                <a href="mailto:vinodjayasudha@gmail.com" className="text-light">
                  vinodjayasudha@gmail.com
                </a>
              </p>
              <p className="d-flex align-items-center gap-2">
                <FaMapMarkerAlt className="text-warning" />
                <span>Chennai, Tamil Nadu, India</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="hero-social-icons mt-3">
              <a
                href="https://www.instagram.com/ajithkumar_sanjeev/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100007252275497"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Image Card */}
          <div
            className={`hero-glass-card p-2 flex-shrink-0 ${
              fade ? "fade-in" : "fade-out"
            }`}
          >
            <img
              src={gallery[currentIndex].img}
              alt={gallery[currentIndex].title}
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
