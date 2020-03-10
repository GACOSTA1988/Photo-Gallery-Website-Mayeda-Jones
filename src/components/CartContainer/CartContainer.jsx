import React, { useState } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import { photos } from "../../api/Photos";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Navbar from "../Navbar/Navbar.jsx";

import "./CartContainer.css";
import Container from "react-bootstrap/Container";

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
      const item = photos.find(item => item.id === id);
      return [...itemsInCart, { ...item, quantity: 1 }];
    });
  };

  const totalCost = itemsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <div className="App">
        <Navbar />
        <main className="App-shop">
          <div className="App-products">
            {photos.map(item => (
              <Product
                key={item.title}
                src={item.src}
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
    </Container>
  );
}
