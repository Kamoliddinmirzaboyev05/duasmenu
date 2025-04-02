import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footerPage">
      <div className="container">
        <Link to={"/"}>
          <div className="footerItem">
            <div className="itemIcon">
              <img src="/home.svg" alt="" />
            </div>
            <p>Home</p>
          </div>
        </Link>
        <Link to={"/fastfood"}>
          <div className="footerItem">
            <div className="itemIcon">
              <img src="/hotdog.svg" alt="" />
            </div>
            <p>Fast Food</p>
          </div>
        </Link>
        <Link to={"/drinks"}>
          <div className="footerItem">
            <div className="itemIcon">
              <img src="/icecream.svg" alt="" />
            </div>
            <p>Muzqaymoq</p>
          </div>
        </Link>
        <Link to={"/iceream"}>
          <div className="footerItem">
            <div className="itemIcon">
              <img src="/drink.svg" alt="" />
            </div>
            <p>Ichimlik</p>
          </div>
        </Link>
        <Link to={"/user"}>
          <div className="footerItem">
            <div className="itemIcon">
              <img src="/user.svg" alt="" />
            </div>
            <p>Buyurtma</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
