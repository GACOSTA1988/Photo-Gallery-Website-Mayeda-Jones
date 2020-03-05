import React, { useState } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import { Switch, Route } from "react-router-dom";
import { v4 } from "uuid";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import items from "./api/items";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import logo from "./assests/logo/Logo.png";

// LINE 16-MAPS TROUGH ARRAY OF ITEMS FROM API JS AND PASSES PROPS DOWN INTO PRODUCT COMPONENT
function App() {
  // SET STATE TO ITEMS IN CART AS EMPTY ARRAY
  const [itemsInCart, setItemsInCart] = useState([]);

  // CALLBACK FUNCTIONED WILL HANDLE INCREMENT OF ITEM AND IS PASSED DOWN AS A PROP TO PRODUCT COMPONENT
  const handleAddToCartClick = id => {
    setItemsInCart(itemsInCart => {
      // GETS PASSED DOWN TO CART COMPONENT
      const itemInCart = itemsInCart.find(item => item.id === id);

      // if item is already in cart, update the quantity
      if (itemInCart) {
        return itemsInCart.map(item => {
          if (item.id !== id) return item;
          return { ...itemInCart, quantity: item.quantity + 1 };
        });
      }

      // otherwise, add new item to cart
      // ITEMS COME FROM IMPORTED ARRAY
      const item = items.find(item => item.id === id);
      return [...itemsInCart, { ...item, quantity: 1 }];
    });
  };

  // THIS CALLBACK FUNCTION GETS PASSED DOWN TO CART COMPONENT
  const totalCost = itemsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-header-text">Dreamcast Shop</h1>
      </header>
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
  );
}

export default App;
