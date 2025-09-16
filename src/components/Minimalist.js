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
        "Crafting spaces that harmonize modern aesthetics with timeless elegance.",
      topHeading: "Into a gallery of elegance",
      bottomBadge: "Best Furniture",
      bottomText:
        "Indulge in the artistry of everyday living with curated pieces.",
      bottomImages: [
        `${process.env.PUBLIC_URL}/assets/c2.jpg`,
        `${process.env.PUBLIC_URL}/assets/c3.jpg`,
        `${process.env.PUBLIC_URL}/assets/c1.jpg`,
        `${process.env.PUBLIC_URL}/assets/c4.jpg`,
      ],
      price: "$499",
    },
    {
      leftImage: `${process.env.PUBLIC_URL}/assets/const3.png`,
      stepBadge: "Luxury Designs",
      stepTitle: "Classic Contemporary",
      topBadge: "Premium",
      topText: "Discover the fusion of tradition and modern elegance.",
      topHeading: "A timeless blend",
      bottomBadge: "Elite Choice",
      bottomText:
        "Experience comfort and sophistication with our exclusive collection.",
      bottomImages: [
        `${process.env.PUBLIC_URL}/assets/c5.jpg`,
        `${process.env.PUBLIC_URL}/assets/c6.jpg`,
        `${process.env.PUBLIC_URL}/assets/c7.jpg`,
        `${process.env.PUBLIC_URL}/assets/c8.jpg`,
      ],
      price: "$699",
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
      bottomImages: [
        `${process.env.PUBLIC_URL}/assets/c9.jpg`,
        `${process.env.PUBLIC_URL}/assets/c10.jpg`,
        `${process.env.PUBLIC_URL}/assets/c11.jpg`,
        `${process.env.PUBLIC_URL}/assets/c12.jpg`,
      ],
      price: "$899",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const [fadeMain, setFadeMain] = useState(false);
  const [fadeBottom, setFadeBottom] = useState(false);

  // Popup state
  const [showPopup, setShowPopup] = useState(false);
  const [popupSlide, setPopupSlide] = useState(null);

  const slide = slides[current];
  const bottomImage = slide.bottomImages[bottomIndex];

  // Auto-change bottom images
  useEffect(() => {
    const bottomInterval = setInterval(() => {
      setFadeBottom(true);
      setTimeout(() => {
        setBottomIndex((prev) => (prev + 1) % slide.bottomImages.length);
        setFadeBottom(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(bottomInterval);
  }, [current, slide.bottomImages.length]);

  // Main image change
  const handleMainChange = () => {
    setFadeMain(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setBottomIndex(0);
      setFadeMain(false);
    }, 1000);
  };

  // Open popup from top/bottom badge
  const handleOpenPopup = (slideData) => {
    setPopupSlide(slideData);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupSlide(null);
  };

  return (
    <>
      <section className="container-fluid my-5">
        <div className="row align-items-start h-50">
          {/* LEFT SIDE */}
          <div className="col-lg-8 position-relative minimalist-left">
            <div className="stairs-wrapper">
              <img
                src={slide.leftImage}
                alt={slide.stepTitle}
                className={`img minimalist-img ${
                  fadeMain ? "fade-out" : "fade-in"
                }`}
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
            <div className="floating-card top-card shadow-sm p-3 position-relative">
              <button
                className="btn-left w-50 ps-4 pe-4"
                onClick={() => handleOpenPopup(slide)}
              >
                <span className="badge text-dark mb-2">{slide.topBadge}</span>
              </button>
              <p className="minimalist-p pe-5 mt-4 text-justify">
                {slide.topText}
              </p>
              <h6 className="fw-bold fs-1">{slide.topHeading}</h6>
              <button className="arrow-btn" onClick={handleMainChange}>
                ↗
              </button>
            </div>

            {/* Bottom card */}
          <div className="floating-card bottom-card shadow-sm p-3 position-relative">
  <div
    className={`bottom-bg ${fadeBottom ? "fade-out" : "fade-in"}`}
    style={{ backgroundImage: `url(${bottomImage})` }}
  ></div>

  <div className="bottom-overlay"></div>

  {/* ✅ Button is now clickable */}
  <button
    className="btn-left w-50 ps-4 pe-4 mt-4"
    onClick={() => handleOpenPopup(slide)}
  >
    <span className="badge text-light mb-2">{slide.bottomBadge}</span>
  </button>

  <p className="fw-bold fs-5 pe-5 w-75 bottom-text">
    {slide.bottomText}
  </p>

  <div className="arrow-btn1">
    <button onClick={handleMainChange}>↗</button>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* ✅ POPUP MODAL */}
     {/* ✅ POPUP MODAL */}
{showPopup && popupSlide && (
  <div className="popup-overlay">
    <div className="popup-content colorful-popup">
      <button className="popup-close" onClick={handleClosePopup}>
        ✕
      </button>

      {/* Header */}
      <h2 className="fw-bold mb-3 gradient-title">{popupSlide.stepTitle}</h2>
      <p className="popup-desc">{popupSlide.topText}</p>
      <h4 className="popup-price">{popupSlide.price}</h4>

      {/* Gallery */}
      <div className="popup-gallery">
        {popupSlide.bottomImages.map((img, i) => (
          <img key={i} src={img} alt="" className="popup-img" />
        ))}
      </div>

      {/* Actions */}
      <div className="popup-actions">
        <button className="btn btn-primary stylish-btn">✨ Book Now</button>
        <a href="tel:+919380334317" className="btn stylish-outline">
          📞 Call
        </a>
        <a href="mailto:vinodjayasudha@gmail.com" className="btn stylish-outline">
          ✉ Mail
        </a>
        <div className="social-icons">
          <a href="https://www.instagram.com/ajithkumar_sanjeev/" className="social-link">🌐</a>
          <a href="https://www.facebook.com/profile.php?id=100007252275497" className="social-link">📘</a>
          <a href="#" className="social-link">📸</a>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
}

export default Minimalist;
