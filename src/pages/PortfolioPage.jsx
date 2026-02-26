import { useState } from "react";
import { Helmet } from "react-helmet-async"
import "../styles/portfolioPage.css";

const PortfolioPage = () => {

  


  const [filter, setFilter] = useState("All");

  const projects = [
    {
      img: "/images/portfolio/shop1.jpeg",
      title: "Dream Makeover Website",
      category: "Website",
      link: "https://dream-makeover.netlify.app",
    },
    {
      img: "/images/project2.png",
      title: "Business Website",
      category: "Website",
      link: "https://google.com",
    },
    {
      img: "/images/project1.png",
      title: "App UI Design",
      category: "App",
      link: "https://youtube.com",
    },
  ];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>

  <Helmet>
  <title>Website & App Development Services in Bareilly | Krishna Tech Solution</title>

  <meta
    name="description"
    content="Krishna Tech Solution Bareilly me website development, mobile app development, SEO, digital marketing aur Google Ads services provide karta hai business growth ke liye."
  />

  <meta
    name="keywords"
    content="Website Development Bareilly, App Development Bareilly, SEO Services Bareilly, Digital Marketing Bareilly, Krishna Tech Solution"
  />
</Helmet>

    <section className="portfolio-page">
      <h1>Our Portfolio</h1>

      {/* Filter */}
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
           <img loading="lazy" src={item.img} alt={`${item.title} Krishna Tech project`} />

            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <button
                onClick={() => window.open(item.link, "_blank")}
              >
                View Live →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default PortfolioPage;