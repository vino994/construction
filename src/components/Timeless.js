import React from "react";

function Timeless() {
  return (
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
          <span className="badge bg-light text-dark mb-2">Elegance • Timeless</span>
          <h2 className="fw-bold">Modern Style<br />Timeless Charm</h2>
          <p className="mt-3">
            Discover Poliform's 2024 preview, featuring sofas, chairs, and
            armchairs alongside diverse lifestyle concepts, alongside striking
            tables, coffee tables, and sideboards.
          </p>
          <button className="btn btn-dark mt-3">About Us →</button>
        </div>
      </div>
    </section>
  );
}

export default Timeless;
