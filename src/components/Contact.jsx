import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact slide">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-grid">

        <div className="contact-card">
          <MdEmail className="icon email" />
          <p>tarun@gmail.com</p>
        </div>

        <div className="contact-card">
          <MdPhone className="icon phone" />
          <p>+91 9XXXXXXXXX</p>
        </div>

        <div className="contact-card">
          <FaGithub className="icon github" />
          <p>github.com/tarun</p>
        </div>

        <div className="contact-card">
          <FaLinkedin className="icon linkedin" />
          <p>linkedin.com/in/tarun</p>
        </div>

      </div>
    </section>
  );
}
