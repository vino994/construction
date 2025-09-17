import React, { useState } from "react";
import "../App.css";

function Gallery() {
  const slides = [
    {
      title: "Residential Homes",
      image: `${process.env.PUBLIC_URL}/assets/const2.webp`,
      desc: "Affordable and luxury Indian homes designed with vastu and modern comforts.",
      price: "₹25 Lakhs onwards",
    },
    {
      title: "Corporate Towers",
      image: `${process.env.PUBLIC_URL}/assets/const3.png`,
      desc: "High-rise office spaces and IT parks with world-class infrastructure.",
      price: "₹50 Lakhs onwards",
    },
    {
      title: "Temples & Cultural",
      image: `${process.env.PUBLIC_URL}/assets/const1.webp`,
      desc: "Intricate temple constructions and heritage restoration projects.",
      price: "Custom Pricing",
    },
    {
      title: "Smart City Projects",
      image: `${process.env.PUBLIC_URL}/assets/c1.jpg`,
      desc: "Urban infrastructure projects that define the future of Indian cities.",
      price: "Government Tenders",
    },
    {
      title: "Sustainable Homes",
      image: `${process.env.PUBLIC_URL}/assets/c4.jpg`,
      desc: "Eco-friendly, solar-powered homes for the next generation.",
      price: "₹20 Lakhs onwards",
    },
    {
      title: "Retail & Shopping",
      image: `${process.env.PUBLIC_URL}/assets/c5.jpg`,
      desc: "Shopping complexes and malls designed for Indian markets.",
      price: "₹1 Crore onwards",
    },
    {
      title: "Hospitality Projects",
      image: `${process.env.PUBLIC_URL}/assets/c6.jpg`,
      desc: "Luxury hotels and resorts built with cultural elegance.",
      price: "₹5 Crore onwards",
    },
    {
      title: "Bridges & Infrastructure",
      image: `${process.env.PUBLIC_URL}/assets/c7.jpg`,
      desc: "Strong and durable bridges, highways, and public infrastructure.",
      price: "Custom Tenders",
    },
    {
      title: "Industrial Warehouses",
      image: `${process.env.PUBLIC_URL}/assets/c9.jpg`,
      desc: "Robust and scalable warehouses for manufacturing & logistics.",
      price: "₹75 Lakhs onwards",
    },
  ];

  // ✅ State for single item popup
  const [popupOpen, setPopupOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  // ✅ State for "View More" popup
  const [allPopupOpen, setAllPopupOpen] = useState(false);

  const openPopup = (item) => {
    setSelected(item);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelected(null);
  };

  return (
    <section className="container my-5 gallery-section">
      <div className="row mb-4 align-items-start">
        {/* Header on left */}
        <div className="col-lg-6">
          <h2 className="fw-bold gallery-title">
            Explore Our Indian Construction Portfolio
          </h2>
          <p className="gallery-subtext">
            From traditional temple artistry to futuristic smart cities, our
            portfolio showcases the diversity and strength of Indian
            architecture.
          </p>
        </div>
        {/* ✅ View More Button */}
        <div className="col-lg-6 text-lg-end text-start mt-3 mt-lg-0">
          <button
            className="btn stylish-btn"
            onClick={() => setAllPopupOpen(true)}
          >
            View More →
          </button>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="gallery-grid">
        {slides.map((item, i) => (
          <div
            className="gallery-card"
            key={i}
            onClick={() => openPopup(item)}
          >
            <img src={item.image} alt={item.title} className="gallery-img" />
            <div className="gallery-overlay">
              <h5>{item.title}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Single Item Popup */}
      {popupOpen && selected && (
        <div className="popup-overlay">
          <div className="popup-content colorful-popup">
            <button className="popup-close" onClick={closePopup}>
              ✕
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="popup-main-img"
            />
            <h3 className="fw-bold mt-3 gradient-title">{selected.title}</h3>
            <p className="popup-desc">{selected.desc}</p>
            <h4 className="popup-price">{selected.price}</h4>
            <div className="popup-actions">
              <button className="btn stylish-btn">📐 Get Estimate</button>
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

      {/* ✅ All Images Popup */}
      {allPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content colorful-popup">
            <button
              className="popup-close"
              onClick={() => setAllPopupOpen(false)}
            >
              ✕
            </button>
            <h2 className="fw-bold gradient-title text-center">
              Full Project Gallery
            </h2>
            <p className="popup-desc text-center">
              Browse through our complete collection of construction projects.
            </p>

            {/* Grid of all images */}
            <div className="popup-gallery">
              {slides.map((item, i) => (
                <div key={i}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="popup-img"
                  />
                  <h6 className="mt-2">{item.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
