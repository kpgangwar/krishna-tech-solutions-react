// import "../styles/footer.css";
// import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-box">

//         {/* Brand */}
//         <div>
//           <h3>Krishna Tech</h3>
//           <p>Website • App • Digital Marketing Solutions</p>

//           {/* Social */}
//           <div className="social">
//   <a href="https://www.facebook.com/profile.php?id=100009201491439" target="_blank" rel="noreferrer">
//     <FaFacebook />
//   </a>

//   <a href="https://www.instagram.com/kpgangwar8909087801" target="_blank" rel="noreferrer">
//     <FaInstagram />
//   </a>

//   <a href="https://www.youtube.com/@krishnapal7411" target="_blank" rel="noreferrer">
//     <FaYoutube />
//   </a>

//   <a href="https://www.linkedin.com/in/krishna-pal-46a12a279/" target="_blank" rel="noreferrer">
//     <FaLinkedin />
//   </a>
// </div>
//         </div>

//         {/* Links */}
//         <div>
//   <h4>Quick Links</h4>

//   <p><Link to="/">Home</Link></p>
//   <p><Link to="/services">Services</Link></p>
//   <p><Link to="/portfolio">Portfolio</Link></p>
//   <p><Link to="/contact">Contact</Link></p>
// </div>

//         {/* Contact */}
//         <div>
//           <h4>Contact</h4>
//           <p>📞 +91 8909087801</p>
//           <p>📧 krishnatech@email.com</p>
//         </div>
//       </div>

//       <button
//   className="scroll-top"
//   onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// >
//   ↑
// </button>

//       <p className="copy">© 2026 Krishna Tech. All Rights Reserved.</p>
//     </footer>
//   );
// };



// export default Footer;




import "../styles/footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  const [show, setShow] = useState(false);

  /* show button on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-box">

        {/* Brand */}
        <div>
          <h3>Krishna Tech</h3>
          <p>Website • App • Digital Marketing Solutions</p>

          {/* Social */}
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100009201491439" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/kpgangwar8909087801" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/@krishnapal7411" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="https://www.linkedin.com/in/krishna-pal-46a12a279/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4>Quick Links</h4>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/services">Services</Link></p>
          <p><Link to="/portfolio">Portfolio</Link></p>
          <p><Link to="/contact">Contact</Link></p>
        </div>

        {/* Contact */}
        <div>
          <h4>Contact</h4>
          <p>📞 +91 8909087801</p>
          <p>📧 krishnatech@email.com</p>
        </div>
      </div>

      {/* Scroll button */}
     {show && (
  <div className="scroll-wrapper">
    <span className="scroll-tooltip">Back to top</span>

    <button
      className="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  </div>
)}

      <p className="copy">© 2026 Krishna Tech. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;