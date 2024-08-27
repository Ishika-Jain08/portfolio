import React from "react";

import "../Navbar/Navbar.css";
import logo from "../../assets/Ishika Jain.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h5><img src={logo} alt="" className="logo" />ISHIKA</h5>
        <div className="desktopMenu">
          <Link to="/" className="list-item">Home</Link>
          <Link to="/about" className="list-item">About</Link>
          <Link to="/experience" className="list-item">Experience</Link>
          <Link to="/skills" className="list-item">Skills</Link>
          <Link to="project" className="list-item">Projects</Link>
          <Link to="/achievement" className="list-item">Achievements</Link>
        </div>
        <Link to="/contact" className="contact">Contact</Link>
      </nav>
    </>
  );
};

export default Navbar;
