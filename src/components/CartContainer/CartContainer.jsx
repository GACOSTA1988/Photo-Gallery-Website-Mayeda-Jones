import React, { useState } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import items from "../../api/items";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import logo from "../../Logo.png";
import stars from "../../stars.png";
import "../../App.css";

export default function App() {
  const [itemsInCart, setItemsInCart] = useState([]);

  const handleAddToCartClick = id => {
    setItemsInCart(itemsInCart => {
      const itemInCart = itemsInCart.find(item => item.id === id);

      // if item is already in cart, update the quantity
      if (itemInCart) {
        return itemsInCart.map(item => {
          if (item.id !== id) return item;
          return { ...itemInCart, quantity: item.quantity + 1 };
        });
      }

      // otherwise, add new item to cart
      const item = items.find(item => item.id === id);
      return [...itemsInCart, { ...item, quantity: 1 }];
    });
  };

  const totalCost = itemsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const content = {
    backgroundImage: "url(${stars})"
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-header-text">Josh Mayeda Jones Photography</h1>
      </header>
      <div style={content}>
        <main className="App-shop">
          <div className="App-products">
            {items.map(item => (
              <Product
                key={item.title}
                title={item.title}
                price={item.price}
                onAddToCartClick={() => handleAddToCartClick(item.id)}
              />
            ))}
          </div>
          <Cart itemsInCart={itemsInCart} totalCost={totalCost} />
          {itemsInCart.length > 0 && (
            <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
              <Elements>
                <CheckoutForm totalCost={totalCost} />
              </Elements>
            </StripeProvider>
          )}
        </main>
      </div>
    </div>
  );
}
