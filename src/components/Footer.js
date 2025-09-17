import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import emailjs from "emailjs-com";
import "../App.css";

function Footer({ setPopupOpenProp }) {
  // ✅ About Data
  const aboutData = {
    "Our Journey": {
      img: `${process.env.PUBLIC_URL}/assets/c9.jpg`,
      desc: "Ajith Constructions began with a vision to blend Indian tradition with modern engineering. Over the past 25 years, we have completed hundreds of projects across residential, commercial, and heritage sectors, earning trust and recognition nationwide.",
    },
    "Ongoing Projects": {
      img: `${process.env.PUBLIC_URL}/assets/c10.jpg`,
      desc: "We are currently executing projects across India, including metro infrastructure, residential townships, luxury hotels, and heritage restorations. Each project reflects our commitment to quality, safety, and sustainability.",
    },
    "Sustainability": {
      img: `${process.env.PUBLIC_URL}/assets/c11.jpg`,
      desc: "Sustainability is at the heart of everything we do. From using eco-friendly materials to integrating renewable energy systems and water conservation practices, our projects are designed for a greener tomorrow.",
    },
    "Careers": {
      img: `${process.env.PUBLIC_URL}/assets/c12.jpg`,
      desc: "We believe in building not just structures, but careers. Join our diverse team of engineers, architects, and innovators who are shaping India’s construction future. Opportunities are open in design, project management, and field execution.",
    },
    "Contact": {
      img: `${process.env.PUBLIC_URL}/assets/c3.jpg`,
      desc: "We’d love to hear from you! Whether you’re planning your dream home, a commercial space, or a large infrastructure project, Ajith Constructions is here to help. Reach out to us for consultations and estimates.",
    },
  };

  // ✅ Service Data
  const services = {
    "Residential Buildings": {
      img: `${process.env.PUBLIC_URL}/assets/c1.jpg`,
      desc: "We design and build vastu-compliant Indian homes, from affordable housing to luxury villas. Our team integrates sustainable materials, earthquake-resistant structures, and modern interiors that perfectly balance tradition with innovation. With over 500 completed projects, Ajith Constructions ensures high quality workmanship and timely delivery.",
      price: "₹25 Lakhs onwards",
    },
    "Commercial Complexes": {
      img: `${process.env.PUBLIC_URL}/assets/c3.jpg`,
      desc: "From corporate office towers to retail malls, we create modern spaces with cutting-edge engineering. Our projects include IT parks, business hubs, and commercial spaces that prioritize efficiency, safety, and style. Designed for scalability and energy-efficiency, our complexes meet the demands of India's growing economy.",
      price: "₹1 Crore onwards",
    },
    "Heritage Projects": {
      img: `${process.env.PUBLIC_URL}/assets/c4.jpg`,
      desc: "Specialized in restoring temples, palaces, and cultural landmarks, our heritage projects bring back the grandeur of India's architectural legacy. Our skilled artisans work on stone carvings, murals, and domes to preserve history while using modern techniques to strengthen the structures for generations to come.",
      price: "Custom Pricing",
    },
    "Smart City Solutions": {
      img: `${process.env.PUBLIC_URL}/assets/c6.jpg`,
      desc: "We deliver smart city infrastructure including metro stations, housing complexes, water supply systems, and waste management plants. With focus on sustainability and technology, our projects are aligned with India's vision for smart, sustainable, and inclusive urban growth.",
      price: "Government Tenders",
    },
    "Infrastructure Works": {
      img: `${process.env.PUBLIC_URL}/assets/c7.jpg`,
      desc: "Ajith Constructions has played a key role in building highways, bridges, and public infrastructure across India. Our engineering expertise ensures long-lasting durability, safety, and innovative design. These projects serve as the backbone for India’s development and connectivity.",
      price: "Project Based Tenders",
    },
  };

  // ✅ Popup State
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedKey, setSelectedKey] = useState(null);
  const [popupType, setPopupType] = useState(null);

  // ✅ Contact Form State
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // ✅ Success Animation State
  const [successPopup, setSuccessPopup] = useState(false);
  const [sending, setSending] = useState(false);

  const openPopup = (key, type) => {
    setSelectedKey(key);
    setPopupType(type);
    setSelectedItem(type === "about" ? aboutData[key] : services[key]);
    setPopupOpen(true);
    setShowForm(false);

    // Inform App to hide navbar
    if (setPopupOpenProp) setPopupOpenProp(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedItem(null);
    setSelectedKey(null);
    setPopupType(null);
    setShowForm(false);

    // Inform App to show navbar back
    if (setPopupOpenProp) setPopupOpenProp(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_lilibt4",   // ✅ Replace with your EmailJS Service ID
        "template_n1cxwq8",  // ✅ Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          subject: `${popupType === "about" ? "Enquiry" : "Estimate Request"} - ${selectedKey}`,
        },
        "-ofppnO1dVjdcg5jI" // ✅ Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSending(false);
          setFormData({ name: "", email: "", message: "" });
          setShowForm(false);
          setSuccessPopup(true);

          setTimeout(() => {
            setSuccessPopup(false);
            closePopup();
          }, 2500);
        },
        (error) => {
          setSending(false);
          alert("❌ Failed to send message. Try again later.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <footer className="footer-section">
      <div className="container-fluid">
        {/* Footer Top */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h2 className="footer-heading">
              Building the Future of Indian Architecture
            </h2>
            <p className="footer-text">
              With decades of experience in construction and design, we bring
              together heritage, sustainability, and technology to create
              structures that represent India's growth story. Let's build your
              vision together.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/c5.jpg`}
              alt="Footer Visual"
              className="footer-img"
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="row footer-links">
          <div className="col-md-3">
            <h6>About</h6>
            <ul>
              {Object.keys(aboutData).map((item, i) => (
                <li key={i} onClick={() => openPopup(item, "about")}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Construction Services</h6>
            <ul>
              {Object.keys(services).map((service, i) => (
                <li key={i} onClick={() => openPopup(service, "service")}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Social Media</h6>
            <div className="social-icons">
              <a href="https://www.instagram.com/ajithkumar_sanjeev/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100007252275497" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <h6>Newsletter</h6>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required className="newsletter-input" />
              <button type="submit" className="btn stylish-btn">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Brand Bottom */}
        <div className="footer-brand text-center mt-5">
          <h3 className="footer-logo">Ajith Constructions</h3>
          <p className="footer-copy">© {new Date().getFullYear()} Ajith Constructions. All rights reserved.</p>
        </div>
      </div>

      {/* ✅ Popup Modal */}
      {popupOpen && selectedItem && (
        <div className="popup-overlay">
          <div className="popup-content colorful-popup">
            <button className="popup-close" onClick={closePopup}>✕</button>

            <div className="row">
              {/* Left Image */}
              <div className="col-md-5">
                <img src={selectedItem.img} alt="Popup Visual" className="popup-main-img" />
              </div>

              {/* Right Content */}
              <div className="col-md-7">
                <h2 className="fw-bold gradient-title">{selectedKey}</h2>
                <p className="popup-desc">{selectedItem.desc}</p>
                {popupType === "service" && <h4 className="popup-price">{selectedItem.price}</h4>}

                {!showForm && (
                  <>
                    <div className="mt-3">
                      <h5 className="fw-bold">📞 Contact Us</h5>
                      <p>
                        Phone: <a href="tel:+919380334317">+91 93803 34317</a><br />
                        Email: <a href="mailto:vinodjayasudha@gmail.com">vinodjayasudha@gmail.com</a>
                      </p>
                    </div>

                    <div className="popup-actions">
                      <button className="btn stylish-btn" onClick={() => setShowForm(true)}>
                        {popupType === "about" ? "📩 Enquire Now" : "📐 Get Estimate"}
                      </button>
                      <a href="tel:+919380334317" className="btn stylish-outline">📞 Call</a>
                      <a href="mailto:vinodjayasudha@gmail.com" className="btn stylish-outline">✉ Mail</a>
                    </div>
                  </>
                )}

                {showForm && (
                  <form className="mt-4" onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Your Message"
                        rows="4"
                        required
                      />
                    </div>
                    <button type="submit" className="btn stylish-btn w-100" disabled={sending}>
                      {sending ? "⏳ Sending..." : "✅ Submit"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Success Popup */}
      {successPopup && (
        <div className="success-popup">
          <div className="success-box">✅ Message Sent Successfully!</div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
