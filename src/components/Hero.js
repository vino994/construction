import React from "react";
import "../App.css";

function Hero() {
  return (
    <section className="hero-section text-white d-flex flex-column justify-content-between">
      {/* Background Image */}
      <img
        src={`${process.env.PUBLIC_URL}/assets/c11.jpg`}
        alt="background"
        className="hero-img"
      />

      {/* Title */}
      <div className="hero-center-text text-center">
        <h1 className="fw-bold contemporary-text animated-heading">
          Contemporary
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="container-fluid hero-bottom d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end">
        {/* Left Side: Glass Cards */}
        <div className="d-flex flex-column flex-md-row gap-3 glasscard">
          {/* Text Card */}
          <div className="hero-glass-card p-3 flex-fill fade-in-text">
            <p className="mb-2 fade-in-text delay-1">
              Crafting spaces that harmonize modern aesthetics with timeless
              elegance, our contemporary interior designs breathe life into every
              room, redefining the essence of chic living.
            </p>
            <button className="btn btn-dark btn-sm fade-in-text delay-2">
              View More
            </button>
          </div>
          {/* Image Card */}
          <div className="hero-glass-card p-2 flex-shrink-0 fade-in-text delay-3">
            <img
              src={`${process.env.PUBLIC_URL}/assets/c3.jpg`}
              alt="Mini Preview"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Right Side: Circle Text */}
        <div className="circle-text mt-3 mt-md-0 fade-in-text delay-4">
          <svg viewBox="0 0 200 200" className="circle-svg">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text fill="white" fontSize="14" fontWeight="600">
              <textPath href="#circlePath" startOffset="0%">
                • Living • Modern • Spaces • Design • Interior • Spaces • Living • Design •
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
