import React, { useState } from "react";

function Timeless() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-8">
            <img
              src={`${process.env.PUBLIC_URL}/assets/const1.webp`}
              alt="Timeless"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-4">
            <span className="badge bg-light text-dark mb-2">
              Tradition • Innovation
            </span>
            <h2 className="fw-bold">
              Timeless Indian <br /> Construction Charm
            </h2>
            <p className="mt-3">
              From heritage temples and forts to modern metro stations and
              skyscrapers, Indian construction is about blending strength,
              durability, and beauty. We craft spaces that stand the test of
              time while embracing modern engineering.
            </p>
            <button
              className="btn btn-dark mt-3"
              onClick={() => setShowPopup(true)}
            >
              Learn More →
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content colorful-popup">
            <button
              className="popup-close"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>

            {/* Company Image */}
            <img
              src={`${process.env.PUBLIC_URL}/assets/c5.jpg`}
              alt="Company"
              className="popup-main-img"
            />

            {/* Company Info */}
            <h2 className="fw-bold gradient-title mt-3 text-center">
              Ajith Constructions
            </h2>
            <p className="popup-desc text-center">
              Ajith Constructions is a trusted name in Indian architecture and
              construction. With decades of experience, we specialize in
              residential projects, commercial complexes, heritage restoration,
              and smart city infrastructure. Our vision is to blend traditional
              Indian craftsmanship with modern engineering for sustainable,
              future-ready spaces.
            </p>

            {/* Contact Info */}
            <div className="text-center mt-4">
              <h5 className="fw-bold">📍 Address</h5>
              <p>
                No. 123, Anna Salai, <br />
                Chennai, Tamil Nadu, India - 600002
              </p>

              <h5 className="fw-bold">📞 Contact</h5>
              <p>
                Phone: <a href="tel:+919380334317">+91 93803 34317</a> <br />
                Email:{" "}
                <a href="mailto:vinodjayasudha@gmail.com">
                  vinodjayasudha@gmail.com
                </a>
              </p>
            </div>

            {/* Actions */}
            <div className="popup-actions">
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

export default Timeless;
