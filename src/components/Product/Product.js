import React from "react";
import "./Product.css";
import Container from "react-bootstrap/Container";

export default function Product({ onAddToCartClick, price, title }) {
  return (
    <Container>
      <div className="Product">
        <h2 className="Product-title">{title}</h2>
        <div className="Product-price">${price}</div>
        <button className="Product-buy-button" onClick={onAddToCartClick}>
          Add to cart
        </button>
      </div>
    </Container>
  );
}
