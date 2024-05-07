import logo from "./logo.svg";
import "./App.css";
import Products from "./Product/Products";
import CartData from "./Cart/CartData";
import Navbar from "./Header/Navbar";
import Baner from "./UI/Baner";
import React, { useContext } from "react";
import CartContext from "./store/cart-context";
import About from "./Header/About";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Footer from "./footer/Footer";
import ContactUsPage from "./Header/ContactUsPage";

const DefaultLayout = ({ children }) => (
  <>
    <Navbar />
    <Baner />
    {children}
    <Footer />
  </>
);
const MemoizedDefaultLayout = React.memo(DefaultLayout);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MemoizedDefaultLayout>
        <Products />
      </MemoizedDefaultLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <DefaultLayout>
        <About />
      </DefaultLayout>
    ),
  },
  {
    path: "/home",
    element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    ),
  },
  {
    path: "/contactus",
    element: (
      <DefaultLayout>
        <ContactUsPage />
      </DefaultLayout>
    ),
  },
]);

function App() {
  const cartCtx = useContext(CartContext);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
