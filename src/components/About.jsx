import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about slide">
      <div className="about-container">
      <div className="about-image">
  <img src="/tarun.jpg" alt="Tarun Negi" />
</div>

        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am Tarun Negi, a frontend developer who loves creating
            clean, modern and responsive websites using React.
          </p>
        </div>

      </div>
    </section>
  );
}

