import React, { useState } from "react";
import CartContext from "./cart-context";

const ContextProvider = (props) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCartHandler = (cartItemToAdd) => {
    // Check if the product is already in the cart based on its title
    const existingItemIndex = cartItems.findIndex(
      (item) => item.title === cartItemToAdd.title
    );

    if (existingItemIndex !== -1) {
      // If the product already exists in the cart, update its quantity
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1,
      };
      setCartItems(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...cartItemToAdd, quantity: 1 },
      ]);
    }
  };
  console.log(cartItems);
  const onCartVisibleHandler = () => {
    setIsCartVisible((prev) => !prev);
  };

  const cartDetails = {
    isCartVisible: isCartVisible,
    onVisible: onCartVisibleHandler,
    cartItem: cartItems,
    onAddItem: addToCartHandler,
  };

  return (
    <CartContext.Provider value={cartDetails}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
