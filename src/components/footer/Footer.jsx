import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footerPage">
      <div className="container">
        <div className="footerItem">
          <div className="itemIcon">
            <img src="/public/hotdog.svg" alt="" />
          </div>
          <p>Fast Food</p>
        </div>
        <div className="footerItem">
          <div className="itemIcon">
            <img src="/public/icecream.svg" alt="" />
          </div>
          <p>Muzqaymoqlar</p>
        </div>
        <div className="footerItem">
        <div className="itemIcon">
            <img src="/public/drink.svg" alt="" />
          </div>
          <p>Ichimliklar</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
