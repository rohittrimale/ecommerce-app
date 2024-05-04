import React, { useContext } from "react";
import NavbarButton from "../Buttons/NavbarButton";
import CartButton from "../Buttons/CartButton";
import CartContext from "../store/cart-context";

const Navbar = () => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);
  const totalItems = cartCtx.cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartHandler = () => {
    cartCtx.onVisible();
  };

  return (
    <div className="flex bg-slate-800 text-white p-2 justify-between">
      <div></div>
      <div className=" flex gap-8 font-serif text-2xl ">
        <NavbarButton>Home</NavbarButton>
        <NavbarButton>Store</NavbarButton>
        <NavbarButton>About </NavbarButton>
      </div>
      <div className="mr-7" onClick={cartHandler}>
        <CartButton totalItems={totalItems} />
      </div>
    </div>
  );
};

export default Navbar;
