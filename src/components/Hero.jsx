import "../styles/hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Hi, I’m <span>Tarun Negi</span>
        </h1>

        <p>Frontend Developer | React</p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-btn">Projects</a>
          <a href="#contact" className="hero-btn outline">Contact</a>
        </div>
      </div>
    </section>
  );
}

