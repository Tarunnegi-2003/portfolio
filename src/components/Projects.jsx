import "../styles/cards.css";

export default function Projects() {
  return (
    <section id="projects" className="projects slide">
      <h2>Projects</h2>

      <div className="grid">
        {/* 🔗 E-COMMERCE PROJECT */}
        <a
          href="https://melodic-treacle-c7179e.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="E-Commerce"
            />
            <h4>E-Commerce App</h4>
            <span className="live">Live Demo</span>
          </div>
        </a>

        {/* WEATHER APP */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
            alt="Weather App"
          />
          <h4>Weather App</h4>
        </div>

        {/* BACKEND API */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Backend API"
          />
          <h4>Backend REST API</h4>
        </div>
      </div>
    </section>
  );
}
