import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Minimalist from "./components/Minimalist";
import Timeless from "./components/Timeless";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Minimalist />
      <Timeless />
    </div>
  );
}

export default App;
