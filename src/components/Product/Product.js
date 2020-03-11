import React from "react";
import "./Product.css";
import Container from "react-bootstrap/Container";

export default function Product({ onAddToCartClick, price, title, src }) {
  const picStyle = {
    width: "45%",
    height: "25%",
    margin: "0 auto",
    padding: "2.5px"
    // textAlign: "left",
    // alignItems: "left",
  };
  return (
    <Container>
      <div className="Product">
        <h2 className="Product-title">{title}</h2>
        <img style={picStyle} src={src} alt={title} />
        <div className="Product-price">${price}</div>
        <button className="Product-buy-button" onClick={onAddToCartClick}>
          Add to cart
        </button>
      </div>
    </Container>
  );
}
