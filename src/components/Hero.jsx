
import { Link } from "react-router-dom";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Grow Your Business with Krishna Tech</h1>
        <p>Website • App • Digital Marketing Solutions</p>

        {/* <div className="hero-btns">
          <button className="primary">Get Free Demo</button>
          <button className="secondary">View Portfolio</button>
        </div> */}
     
     <div className="hero-btns">
  <a
    href="https://wa.me/918909087801?text=Hello Krishna Tech 👋 I want demo"
    target="_blank"
    className="primary"
  >
    Get Free Demo
  </a>

  <Link to="/portfolio" className="secondary">
    View Portfolio
  </Link>
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