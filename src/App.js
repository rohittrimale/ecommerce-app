import logo from "./logo.svg";
import "./App.css";
import Products from "./Product/Products";
import CartData from "./Cart/CartData";
import Navbar from "./Header/Navbar";
import Baner from "./UI/Baner";
import React, { useContext } from "react";
import CartContext from "./store/cart-context";
import About from "./Header/About";
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Footer from "./footer/Footer";
import ContactUsPage from "./Header/ContactUsPage";
import ProductDetails from "./Product/ProductDetails";

function App() {
  const cartCtx = useContext(CartContext);

  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar />
          <Baner />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/contactus" element={<ContactUsPage />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
