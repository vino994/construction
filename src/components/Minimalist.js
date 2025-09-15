import React, { useState, useEffect } from "react";
import "../App.css";

function Minimalist() {
  const slides = [
    {
      leftImage: `${process.env.PUBLIC_URL}/assets/const2.webp`,
      stepBadge: "Georgio Interior",
      stepTitle: "Modern Minimalist",
      topBadge: "Aesthetic",
      topText:
        "Please note that attendance is a crucial evaluation factor in your learning journey. We highly encourage you to be present for the class to achieve a better understanding of the concepts being covered.",
      topHeading: "Into a gallery of elegance",
      bottomBadge: "Best Furniture",
      bottomText:
        "Indulge in the artistry of everyday living. Please note that attendance is a crucial evaluation factor in your learning journey.",
      bottomImage: `${process.env.PUBLIC_URL}/assets/const2.webp`,
    },
    {
      leftImage: `${process.env.PUBLIC_URL}/assets/const3.png`,
      stepBadge: "Luxury Designs",
      stepTitle: "Classic Contemporary",
      topBadge: "Premium",
      topText:
        "Discover the fusion of tradition and modern elegance in our curated interiors.",
      topHeading: "A timeless blend",
      bottomBadge: "Elite Choice",
      bottomText:
        "Experience comfort and sophistication with our exclusive collection.",
      bottomImage: `${process.env.PUBLIC_URL}/assets/const3.png`,
    },
    {
      leftImage: `${process.env.PUBLIC_URL}/assets/const1.webp`,
      stepBadge: "Art Deco",
      stepTitle: "Urban Chic",
      topBadge: "Creative",
      topText: "Redefining city living with chic and stylish designs.",
      topHeading: "Vibrant & Bold",
      bottomBadge: "City Living",
      bottomText:
        "Transform your lifestyle with interiors tailored for modern urban spaces.",
      bottomImage: `${process.env.PUBLIC_URL}/assets/const1.webp`,
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="container-fluid my-5">
      <div className="row align-items-start h-50">
        {/* LEFT SIDE */}
        <div className="col-lg-8 position-relative minimalist-left fade-slide">
          <div className="stairs-wrapper">
            <img
              src={slide.leftImage}
              alt="Minimalist"
              className="img minimalist-img"
            />
            <svg
              className="stairs-shape"
              viewBox="0 0 400 400"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 L100,0 Q110,0 110,10 L110,90 Q110,100 120,100
                  L200,100 Q210,100 210,110 L210,190 Q210,200 220,200
                  L300,200 Q310,200 310,210 L310,290 Q310,300 320,300
                  L390,300 Q400,300 400,310 L400,390 Q400,400 390,400
                  L0,400 Z"
                fill="white"
              />
            </svg>
            <div className="stairs-text">
              <span className="badge glass-badge text-dark mb-2">
                {slide.stepBadge}
              </span>
              <h2 className="fw-bold">{slide.stepTitle}</h2>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-4 d-flex flex-column gap-3 minimalist-right">
          {/* Top card */}
          <div className="floating-card top-card shadow-sm p-3 position-relative fade-slide">
            <button className="btn-left w-50 ps-4 pe-4">
              <span className="badge text-dark mb-2">{slide.topBadge}</span>
            </button>
            <p className="minimalist-p pe-5 mt-4 text-justify">{slide.topText}</p>
            <h6 className="fw-bold fs-1">{slide.topHeading}</h6>
            <button className="arrow-btn" onClick={handleNext}>
              ↗
            </button>
          </div>

          {/* Bottom card */}
          <div
            className="floating-card bottom-card shadow-sm p-3 position-relative fade-slide"
            style={{ backgroundImage: `url(${slide.bottomImage})` }}
          >
            <div className="bottom-overlay"></div>
            <button className="btn-left w-50 ps-4 pe-4 mt-4">
              <span className="badge text-light mb-2">{slide.bottomBadge}</span>
            </button>
            <p className="fw-bold fs-5 pe-5 w-75 bottom-text">
              {slide.bottomText}
            </p>
            <div className="arrow-btn1">
              <button onClick={handleNext}>↗</button>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="row text-center mt-5 stats-section fade-slide">
        <div className="col-12 mb-4">
          <span className="badge glass-badge px-3 py-2 shadow-sm">
            Georgio Interior
          </span>
          <h2 className="fw-bold mono-title">Modern Minimalist</h2>
        </div>

        {[
          { number: "500+", label: "Products" },
          { number: "20+", label: "Projects" },
          { number: "50+", label: "Satisfied Customers" },
          { number: "1st", label: "Top in Paris" },
        ].map((stat, i) => (
          <div className="col-6 col-md-3 mt-4" key={i}>
            <div className="stat-card glass-card">
              <h4 className="fw-bold fs-1">{stat.number}</h4>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Minimalist;
