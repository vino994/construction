import React, { useState, useEffect } from "react";
import "../App.css";

function Hero() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // ✅ for fade animation

  const gallery = [
    {
      title: "Residential Homes",
      img: `${process.env.PUBLIC_URL}/assets/const2.webp`,
      desc: "We design vastu-compliant Indian homes, blending tradition with modern comforts. From affordable housing to luxury villas, our homes stand for durability and beauty."
    },
    {
      title: "Temple Architecture",
      img: `${process.env.PUBLIC_URL}/assets/c4.jpg`,
      desc: "Intricate temple construction with traditional stone carvings and heritage restoration work, preserving India’s cultural legacy while ensuring long-lasting structures."
    },
    {
      title: "Smart City Projects",
      img: `${process.env.PUBLIC_URL}/assets/c6.jpg`,
      desc: "Urban infrastructure including metro stations, highways, and eco-friendly housing that define India’s smart and sustainable future."
    }
  ];

  // ✅ Auto-slide every 5s with fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // trigger fade-out
      setTimeout(() => {
        setCurrentIndex((prev) =>
          prev === gallery.length - 1 ? 0 : prev + 1
        );
        setFade(true); // trigger fade-in
      }, 600); // duration matches CSS fade
    }, 5000);
    return () => clearInterval(interval);
  }, [gallery.length]);

  // ✅ Manual navigation
  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? gallery.length - 1 : prev - 1
      );
      setFade(true);
    }, 600);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === gallery.length - 1 ? 0 : prev + 1
      );
      setFade(true);
    }, 600);
  };

  return (
    <>
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
          <div className="d-flex flex-column flex-md-row gap-3 glasscard">
            {/* Text Card */}
            <div
              className={`hero-glass-card p-3 flex-fill ${
                fade ? "fade-in" : "fade-out"
              }`}
            >
              <p className="mb-2">{gallery[currentIndex].desc}</p>
              <button
                className="btn btn-dark btn-sm"
                onClick={() => setShowPopup(true)}
              >
                Explore Projects
              </button>
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

          {/* Right Side: Circle Text */}
          <div className="circle-text mt-3 mt-md-0">
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
        </div>
      </section>

      {/* ✅ Popup Modal (Slider) */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content colorful-popup">
            <button
              className="popup-close"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>

            <h2 className="fw-bold gradient-title text-center">
              {gallery[currentIndex].title}
            </h2>
            <img
              src={gallery[currentIndex].img}
              alt={gallery[currentIndex].title}
              className="popup-main-img"
            />
            <p className="popup-desc text-center">
              {gallery[currentIndex].desc}
            </p>

            <div className="d-flex justify-content-between mt-3">
              <button className="btn stylish-outline" onClick={handlePrev}>
                ← Previous
              </button>
              <button className="btn stylish-outline" onClick={handleNext}>
                Next →
              </button>
            </div>

            <div className="popup-actions mt-4">
              <button className="btn stylish-btn">📐 Get Quote</button>
              <a href="tel:+919380334317" className="btn stylish-outline">
                📞 Call
              </a>
              <a
                href="mailto:vinodjayasudha@gmail.com"
                className="btn stylish-outline"
              >
                ✉ Mail
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
