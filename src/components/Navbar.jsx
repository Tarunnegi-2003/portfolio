import { useState } from "react";
import ResumeModal from "./ResumeModal";
import "../styles/navbar.css";

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const handleNavClick = (id) => {
    setOpen(false);

    const section = document.getElementById(id);
    if (!section) return;

    // sab sections se active hatao
    document.querySelectorAll(".slide").forEach(sec => {
      sec.classList.remove("active");
    });

    // animation reset
    void section.offsetWidth;

    // active add
    section.classList.add("active");

    // smooth scroll
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar">
  <h1 className="logo">TN</h1>

  <button className="menu-btn" onClick={() => setOpen(!open)}>
    ☰
  </button>

  <ul className={`nav-links ${open ? "open" : ""}`}>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li>
      <button className="resume-link">Resume</button>
    </li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

  <button className="theme-btn">Dark</button>
</nav>

      <ResumeModal show={showResume} setShow={setShowResume} />
    </>
  );
}
