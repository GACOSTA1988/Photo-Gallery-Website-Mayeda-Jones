import React, { useState } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import { photos } from "../../api/Photos";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./CartContainer.css";
import Container from "react-bootstrap/Container";

export default function CartContainer() {
  const [itemsInCart, setItemsInCart] = useState([]);

  const handleAddToCartClick = (id) => {
    setItemsInCart((itemsInCart) => {
      const itemInCart = itemsInCart.find((item) => item.id === id);

      // if item is already in cart, update the quantity
      if (itemInCart) {
        return itemsInCart.map((item) => {
          if (item.id !== id) return item;
          return { ...itemInCart, quantity: item.quantity + 1 };
        });
      }

      // otherwise, add new item to cart
      const item = photos.find((item) => item.id === id);
      return [...itemsInCart, { ...item, quantity: 1 }];
    });
  };

  const totalCost = itemsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <Container fluid>
      <div className="cartMainScreen">
        <div className="Print">
          <div className="cartHeaderMenuWrapper">
            <p id="cartHeaderText">PRINTS</p>
            <div className="cartDropDownContainer">
              <DropdownButton
                variant=""
                size="lg"
                id="dropdown-item-button"
                title="MENU"
              >
                <Dropdown.Item href="#/" as="a">
                  HOME
                </Dropdown.Item>
                <Dropdown.Item href="#/about" as="a">
                  ABOUT
                </Dropdown.Item>
                <Dropdown.Item href="#/mainGallery" as="a">
                  GALLERY
                </Dropdown.Item>
                <Dropdown.Item href="#/shoppingCart" as="a">
                  PRINTS
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div className="Print-products">
            {photos.map((item) => (
              <Product
                key={item.title}
                src={item.src}
                title={item.title}
                price={item.price}
                onAddToCartClick={() => handleAddToCartClick(item.id)}
              />
            ))}
            <br />
            <br />
          </div>

          <Cart itemsInCart={itemsInCart} totalCost={totalCost} />
          {itemsInCart.length > 0 && (
            <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
              <Elements>
                <CheckoutForm totalCost={totalCost} />
              </Elements>
            </StripeProvider>
          )}
        </div>
      </div>
      <br />
      <br />
    </Container>
  );
}
