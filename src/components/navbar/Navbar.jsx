import React from "react";
import "./Navbar.css";
import { FaHamburger } from "react-icons/fa";
function Navbar() {
  return (
    <div className="navbarPage">
      <nav>
        <div className="container">
          <div className="logo">
            <img src="/public/ds.svg" alt="" />
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
