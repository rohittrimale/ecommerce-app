import React, { useContext } from "react";
import NavbarButton from "../Buttons/NavbarButton";
import CartButton from "../Buttons/CartButton";
import CartContext from "../store/cart-context";
import { Link, NavLink } from "react-router-dom";
import CartData from "../Cart/CartData";

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
      <div className=" flex gap-8 font-serif text-xl md:text-2xl">
        <NavbarButton>
          <NavLink to="/home">Home </NavLink>
        </NavbarButton>
        <NavbarButton>
          <NavLink to="/">Store </NavLink>
        </NavbarButton>
        <NavbarButton>
          <NavLink to="/about">About </NavLink>
        </NavbarButton>
        <NavbarButton>
          <NavLink to="/contactus">Contact Us </NavLink>
        </NavbarButton>
      </div>
      <div className="mr-1 md:mr-7" onClick={cartHandler}>
        <CartButton totalItems={totalItems} />
      </div>
      {cartCtx.isCartVisible && <CartData />}
    </div>
  );
};

export default Navbar;
