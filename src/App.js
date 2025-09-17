import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Minimalist from "./components/Minimalist";
import Timeless from "./components/Timeless";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div>
      {/* ✅ Navbar always on desktop, hides on mobile when popup is open */}
      {(!isMobile || !popupOpen) && <Navbar setPopupOpenProp={setPopupOpen} />}

      <section id="hero"><Hero /></section>
      <section id="product"><Minimalist /></section>
      <section id="lifestyle"><Timeless /></section>
      <section id="news"><Gallery /></section>
     
      <section id="contact"><Footer setPopupOpenProp={setPopupOpen} /></section>
    </div>
  );
}

export default App;
