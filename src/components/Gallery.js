import React, { useState } from "react";
import "../App.css";

function Gallery() {
  const slides = [
    {
      title: "Modern Minimalist",
      image: `${process.env.PUBLIC_URL}/assets/const2.webp`,
      desc: "Crafting spaces that harmonize modern aesthetics with timeless elegance.",
      price: "$499",
    },
    {
      title: "Classic Contemporary",
      image: `${process.env.PUBLIC_URL}/assets/const3.png`,
      desc: "Discover the fusion of tradition and modern elegance.",
      price: "$699",
    },
    {
      title: "Urban Chic",
      image: `${process.env.PUBLIC_URL}/assets/const1.webp`,
      desc: "Redefining city living with chic and stylish designs.",
      price: "$899",
    },
       {
      title: "Modern Minimalist",
      image: `${process.env.PUBLIC_URL}/assets/c1.jpg`,
      desc: "Crafting spaces that harmonize modern aesthetics with timeless elegance.",
      price: "$499",
    },
      {
      title: "Classic Contemporary",
      image: `${process.env.PUBLIC_URL}/assets/c4.jpg`,
      desc: "Discover the fusion of tradition and modern elegance.",
      price: "$699",
    },
       {
      title: "Classic Contemporary",
      image: `${process.env.PUBLIC_URL}/assets/c5.jpg`,
      desc: "Discover the fusion of tradition and modern elegance.",
      price: "$699",
    },
     {
      title: "Modern Minimalist",
      image: `${process.env.PUBLIC_URL}/assets/c6.jpg`,
      desc: "Crafting spaces that harmonize modern aesthetics with timeless elegance.",
      price: "$499",
    },
         {
      title: "Modern Minimalist",
      image: `${process.env.PUBLIC_URL}/assets/c7.jpg`,
      desc: "Crafting spaces that harmonize modern aesthetics with timeless elegance.",
      price: "$499",
    },
         {
      title: "Modern Minimalist",
      image: `${process.env.PUBLIC_URL}/assets/c9.jpg`,
      desc: "Crafting spaces that harmonize modern aesthetics with timeless elegance.",
      price: "$499",
    },
  ];

  const [popupOpen, setPopupOpen] = useState(false);
  const [selected, setSelected] = useState(null);

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
          <h2 className="fw-bold gallery-title">Explore Our Proudly Collection</h2>
          <p className="gallery-subtext">
            Poliform showcases its vision of contemporary architecture, interior
            design trends, and impeccable living at Salone del Mobile Milano 2024.
          </p>
        </div>
        {/* optional right side button */}
        <div className="col-lg-6 text-lg-end text-start mt-3 mt-lg-0">
          <button className="btn stylish-btn">View More →</button>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="gallery-grid">
        {slides.map((item, i) => (
          <div className="gallery-card" key={i} onClick={() => openPopup(item)}>
            <img src={item.image} alt={item.title} className="gallery-img" />
            <div className="gallery-overlay">
              <h5>{item.title}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Popup Modal */}
      {popupOpen && selected && (
        <div className="popup-overlay">
          <div className="popup-content colorful-popup">
            <button className="popup-close" onClick={closePopup}>✕</button>
            <img src={selected.image} alt={selected.title} className="popup-main-img" />
            <h3 className="fw-bold mt-3 gradient-title">{selected.title}</h3>
            <p className="popup-desc">{selected.desc}</p>
            <h4 className="popup-price">{selected.price}</h4>
            <div className="popup-actions">
              <button className="btn stylish-btn">✨ Book Now</button>
              <a href="tel:+1234567890" className="btn stylish-outline">📞 Call</a>
              <a href="mailto:info@example.com" className="btn stylish-outline">✉ Mail</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
