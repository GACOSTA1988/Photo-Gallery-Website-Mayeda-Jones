import React from "react";
import CartItem from "./CartItem/CartItem";
import "./Cart.css";

// CART COMPONENT RECEIVES AN ARRAY OF ITEMS SELECTED

// LINE 16 TURNARY OPERATOR CHECKS TO SEE IF ANYTHING IS IN CART-IF NOTHING IT REUTNRS AN EMPTY CART

// LINE 18_MAPPING OVER ITEMS ARRAY AND PASSING THEM DOWN AS PROPS TO THE CARTITEM COMPONENT

// LINE 27-TOTALCOST IS CALCUTED AND PASSED DOWN FROM APP AS A CALLBACK
export default function Cart({ itemsInCart, totalCost }) {
  return (
    <div className="Cart">
      <h2 className="Cart-title">Your shopping cart</h2>
      {itemsInCart.length > 0 ? (
        <div>
          {itemsInCart.map(item => (
            <CartItem
              key={item.id}
              title={item.title}
              cost={item.price * item.quantity}
              quantity={item.quantity}
            />
          ))}
          <div className="Cart-total-cost">
            Total cost: ${totalCost.toFixed(2)}
          </div>
        </div>
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  );
}
