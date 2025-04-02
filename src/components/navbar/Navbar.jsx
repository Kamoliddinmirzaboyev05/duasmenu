import React from "react";
import "./Navbar.css";
import { FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbarPage">
      <nav>
        <div className="container">
          <div className="logo">
            <img src="/ds.svg" alt="" />
          </div>
          <div className="links">
            <Link>Yangiliklar</Link>
            <Link>Lavashlar</Link>
            <Link>Hot doglar</Link>
            <Link>Gamburgerlar</Link>
          </div>
          <div className="bar">
            <FaHamburger />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
