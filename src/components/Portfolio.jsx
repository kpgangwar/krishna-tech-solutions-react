import { useState } from "react";
import "../styles/portfolio.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      img: "/images/portfolio/shop2.jpg",
      
      title: "Business Website",
      category: "Website",
      link: "https://artificial-flower-house.netlify.app",
    },
    {
      img: "/images/portfolio/shop1.jpeg",
      title: "Salon Website",
      category: "Website",
      link: "https://dream-makeover.netlify.app",
    },
    {
      img: "/images/portfolio/techlogo.jpeg",
      title: "App UI",
      category: "App",
      link: "https://krishna-tech-solutions.netlify.app/",
    },
  ];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="portfolio">
      <h2>Our Latest Work</h2>

      {/* Filter buttons */}
      <div className="filters">
        {["All", "Website", "App"].map((btn) => (
          <button
            key={btn}
            className={filter === btn ? "active" : ""}
            onClick={() => setFilter(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="portfolio-grid">
        {filtered.map((item, i) => (
          <div className="portfolio-card" key={i}>
            <img src={item.img} alt={item.title} />

            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <button
                className="view-btn"
                onClick={() => window.open(item.link, "_blank")}
              >
                View Live <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;


