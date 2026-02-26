import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Grow Your Business with Krishna Techh</h1>
        <p>Website • App • Digital Marketing Solutions</p>

        <div className="hero-btns">
          <button className="primary">Get Free Demo</button>
          <button className="secondary">View Portfolio</button>
        </div>
      </div>

      <div className="hero-img">
        {/* <img src="/images/image.png" alt="hero" /> */}
        <img loading="lazy" src="/images/image.png" alt="Website developer Bareilly" />
      </div>
    </section>
  );
};

export default Hero;