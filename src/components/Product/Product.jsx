import React from "react";
import "./Product.css";

// STATELESS FUNCTIONAL COMPONENT
// RECEIVES PROPS PASSED DOWN FROM APP COMPONENT

export default function Product({ onAddToCartClick, price, title }) {
  return (
    <div className="Product">
      <h2 className="Product-title">{title}</h2>
      <div className="Product-price">${price}</div>
      <button className="Product-buy-button" onClick={onAddToCartClick}>
        Add to cart
      </button>
    </div>
  );
}
