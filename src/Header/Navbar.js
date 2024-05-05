import React, { useContext } from "react";
import NavbarButton from "../Buttons/NavbarButton";
import CartButton from "../Buttons/CartButton";
import CartContext from "../store/cart-context";
import { Link } from "react-router-dom";
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
        <NavbarButton>Home</NavbarButton>
        <NavbarButton>
          <Link to="/">Store </Link>
        </NavbarButton>
        <NavbarButton>
          <Link to="/about">About </Link>
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
