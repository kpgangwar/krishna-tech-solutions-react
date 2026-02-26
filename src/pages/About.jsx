import { Helmet } from "react-helmet";
import "../styles/about.css";

const About = () => {
  return (
    <>
    <Helmet>
  <title>About Krishna Tech | Digital Agency Bareilly</title>
  <meta name="description" content="Krishna Tech ek trusted digital agency hai jo modern website aur marketing services provide karti hai." />
</Helmet>
      <section className="about">
        <div className="about-text">
          <h1>About Krishna Tech</h1>

          <p>
            Krishna Tech ek digital agency hai jo website, app aur digital marketing
            solutions provide karti hai. Hamara goal businesses ko online grow
            karna hai modern aur responsive design ke saath.
          </p>
        </div>

        <div className="about-img">
          <img src="/images/hero.jpg" alt="about" />
        </div>
      </section>

      {/* Mission Vision */}
      <section className="mission">
        <div className="mission-card">
          <h3>🎯 Our Mission</h3>
          <p>
            Hamara mission affordable aur modern digital solutions provide karna
            hai jisse har business online grow kar sake.
          </p>
        </div>

        <div className="mission-card">
          <h3>🚀 Our Vision</h3>
          <p>
            Hamara vision ek trusted digital brand banna hai jo innovation aur
            quality service ke liye jana jaye.
          </p>
        </div>
      </section>

      {/* Team */}
<section className="team">
  <h2>Our Team</h2>

  <div className="team-grid">
    <div className="team-card">
      <img src="/images/project1.png" alt="team" />
      <h4>Krishna Pal</h4>
      <p>Founder & Developer</p>
    </div>

    <div className="team-card">
      <img src="/images/project2.png" alt="team" />
      <h4>Designer</h4>
      <p>UI/UX Specialist</p>
    </div>

    <div className="team-card">
      <img src="/images/project1.png" alt="team" />
      <h4>Marketing Expert</h4>
      <p>Digital Marketer</p>
    </div>
  </div>
</section>

{/* Stats */}
<section className="stats">
  <div>
    <h3>50+</h3>
    <p>Projects Completed</p>
  </div>

  <div>
    <h3>30+</h3>
    <p>Happy Clients</p>
  </div>

  <div>
    <h3>3+</h3>
    <p>Years Experience</p>
  </div>
</section>

{/* CTA */}
<section className="about-cta">
  <h2>Let’s Build Your Dream Website</h2>
  <a href="https://wa.me/918909087801">Get Started</a>
</section>


    </>
  );
};

export default About;