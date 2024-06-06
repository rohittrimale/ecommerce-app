import React, { useContext, useEffect, useState } from "react";
import CartContext from "./cart-context";
import AuthContextProvider, { AuthContext } from "./auth-context";
import axios from "axios";
const ContextProvider = (props) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const userEmail = useContext(AuthContext);
  const emailWithoutDot = userEmail.email.toString().replace(/[@.]/g, "");
  console.log(userEmail);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `https://crudcrud.com/api/c2091ef6c8cf4edd83d49b767b0533b9/cart${userEmail
            .toString()
            .replace(/[@.]/g, "")}`
        );
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    if (isCartVisible) {
      fetchCartItems();
    }
  }, [isCartVisible, userEmail]);

  const addToCartHandler = async (cartItemToAdd) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.title === cartItemToAdd.title
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1,
      };
      setCartItems(updatedCart);
    } else {
      const cartItemWithQuantity = { ...cartItemToAdd, quantity: 1 };
      console.log(cartItemWithQuantity);
      setCartItems((prevCartItems) => [...prevCartItems, cartItemWithQuantity]);

      try {
        const response = await axios.post(
          `https://crudcrud.com/api/c2091ef6c8cf4edd83d49b767b0533b9/cart${userEmail
            .toString()
            .replace(/[@.]/g, "")}`,
          cartItemWithQuantity
        );
        console.log("Item added to cart:", response.data);
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }
    }
  };

  const removeFromCartHandler = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const onCartVisibleHandler = () => {
    setIsCartVisible((prev) => !prev);
  };

  const cartDetails = {
    isCartVisible: isCartVisible,
    onVisible: onCartVisibleHandler,
    cartItem: cartItems,
    onAddItem: addToCartHandler,
    onRemoveItem: removeFromCartHandler,
  };

  return (
    <AuthContextProvider>
      <CartContext.Provider value={cartDetails}>
        {props.children}
      </CartContext.Provider>
    </AuthContextProvider>
  );
};

export default ContextProvider;
