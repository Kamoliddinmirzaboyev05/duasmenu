import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footerPage">
      <div className="container">
        <div className="footerItem">
          <div className="itemIcon">
            <img src="/hotdog.svg" alt="" />
          </div>
          <p>Fast Food</p>
        </div>
        <div className="footerItem">
          <div className="itemIcon">
            <img src="/icecream.svg" alt="" />
          </div>
          <p>Muzqaymoqlar</p>
        </div>
        <div className="footerItem">
        <div className="itemIcon">
            <img src="/drink.svg" alt="" />
          </div>
          <p>Ichimliklar</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
