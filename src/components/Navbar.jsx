// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/navbar.css";

// const Navbar = () => {
//   return (
//     <header className="navbar">
//       {/* Logo */}
//       <div className="logo">
//         <img src="/ktslogo.jpeg" alt="Krishna Tech Logo" />
//         <span>Krishna Tech</span>
//       </div>

//       {/* Links */}
//       <nav>
//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/services">Services</Link></li>
//           <li><Link to="/portfolio">Portfolio</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>

//       {/* CTA */}
//       <a href="https://wa.me/91XXXXXXXXXX" className="nav-btn">
//         Get Website
//       </a>
//     </header>
//   );
// };



// export default Navbar;





import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="navbar">
      <div className="logo">
        {/* <img src="/ktslogo.jpeg" alt="logo" /> */}
        <span>Krishna Tech</span>
      </div>

      <nav ref={menuRef} className={menu ? "nav active" : "nav"}>
        <ul className="nav-links">
          <li>
            <NavLink to="/" onClick={() => setMenu(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenu(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={() => setMenu(false)}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={() => setMenu(false)}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenu(false)}>Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div className="menu-icon" onClick={() => setMenu(!menu)}>
        {menu ? "✖" : "☰"}
      </div>
    </header>
  );
};

export default Navbar;