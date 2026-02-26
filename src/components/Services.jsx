import "../styles/services.css";

const Services = () => {
  const data = [
    { icon: "🌐", title: "Web Development" },
    { icon: "📱", title: "App Development" },
    { icon: "📈", title: "Digital Marketing" },
    { icon: "🎨", title: "Graphic Design" },
     { icon: "📢", title: "Google Ads Marketing" },

    // { img: "/images/project1.png", title: "Web Development" },
    // { img: "/images/project2.png", title: "App Development" },
    // { img: "/images/project1.png", title: "Digital Marketing" },
    // { img: "/images/project2.png", title: "Graphic Design" },
    // { img: "/images/project2.png", title: "Google Ads Marketing" }, 


  ];

  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="service-cards">
        {data.map((item, i) => (
          <div className="card" key={i}>
            <span className="icon">{item.icon}</span>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;