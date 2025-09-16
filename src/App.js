import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Minimalist from "./components/Minimalist";
import Timeless from "./components/Timeless";
import "./App.css";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Minimalist />
      <Timeless />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
