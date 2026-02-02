import "../styles/cards.css";

export default function Projects() {
  return (
    <section id="projects" className="projects slide">


      <h2>Projects</h2>

      <div className="grid">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="E-Commerce"
          />
          <h4>E-Commerce App</h4>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
            alt="Weather App"
          />
          <h4>Weather App</h4>
        </div>

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
