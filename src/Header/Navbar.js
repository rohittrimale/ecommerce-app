import React, { useContext, useEffect, useState } from "react";
import NavbarButton from "../Buttons/NavbarButton";
import CartButton from "../Buttons/CartButton";
import CartContext from "../store/cart-context";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import CartData from "../Cart/CartData";
import { AuthContext } from "../store/auth-context";

const Navbar = () => {
  const cartCtx = useContext(CartContext);
  const authContext = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(authContext.isLoggedIn);
  const navigate = useNavigate();
  const totalItems = cartCtx.cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    setIsLoggedIn(authContext.isLoggedIn);
  }, [authContext, isLoggedIn, setIsLoggedIn]);

  const cartHandler = () => {
    cartCtx.onVisible();
  };

  const logoutHandler = () => {
    authContext.logout();
    navigate("/login");
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

      {
        <div className="  flex">
          {isLoggedIn && (
            <Link
              onClick={logoutHandler}
              className="my-auto py-1 border p-1 px-4 text-red-500 text-xl rounded-xl border-emerald-400"
            >
              Logout
            </Link>
          )}
          {!isLoggedIn && (
            <Link
              to={"/login"}
              className="my-auto py-1 border p-1 px-4 text-green-500 text-xl rounded-xl border-emerald-400"
            >
              Sign In
            </Link>
          )}
          <div className="md:mr-7" onClick={cartHandler}>
            <CartButton totalItems={totalItems} />
          </div>
          {cartCtx.isCartVisible && <CartData />}
        </div>
      }
    </div>
  );
};

export default Navbar;
