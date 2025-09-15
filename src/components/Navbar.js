import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4">
      <a className="navbar-brand fw-bold" href="#">
        Poliform
      </a>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">Product</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">Lifestyle</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">News</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
