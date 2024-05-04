import React from "react";

const CartContext = React.createContext({
  cartItem: [],
  isCartVisible: false,
  onVisible: () => {},
  onAddItem: (cartItem) => {},
});

export default CartContext;
