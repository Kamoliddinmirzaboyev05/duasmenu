import React from "react";
import "./ProductCard.css";
function ProductCard() {
  return (
    <div className="productCard">
      <div className="productImg">
        <img src="/burger.png" alt="" />
      </div>
      <div className="productInfo">
        <h3>Big burger</h3>
        <div className="productMainInfo">
          <p>
            {" "}
            <i className="fas fa-dollar"></i> 32.000
          </p>
          <p>
            {" "}
            <i className="fas fa-clock"></i> 10 min{" "}
          </p>
        </div>
        <div className="cardBtns">
          <button className="btn productCartBtn">Savatga qo'shish</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
