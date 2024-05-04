import logo from "./logo.svg";
import "./App.css";
import Product from "./Product/Product";
import Products from "./Product/Products";
import CartData from "./Cart/CartData";
import Navbar from "./Header/Navbar";
import Baner from "./UI/Baner";
import { useContext } from "react";
import CartContext from "./store/cart-context";

function App() {
  const cartCtx = useContext(CartContext);

  return (
    <div className=" bg-slate-300">
      <Navbar />
      <Baner />
      <Products />
      {cartCtx.isCartVisible && <CartData />}
    </div>
  );
}

export default App;
