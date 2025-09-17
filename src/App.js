import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Minimalist from "./components/Minimalist";
import Timeless from "./components/Timeless";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="product"><Minimalist /></section>
      <section id="lifestyle"><Timeless /></section>
      <section id="news"><Gallery /></section>
      <section id="projects"><Footer /></section>
    </div>
  );
}

export default App;
