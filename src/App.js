import logo from "./logo.svg";
import "./App.css";
import Products from "./Product/Products";
import CartData from "./Cart/CartData";
import Navbar from "./Header/Navbar";
import Baner from "./UI/Baner";
import { useContext } from "react";
import CartContext from "./store/cart-context";
import About from "./Header/About";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const DefaultLayout = ({ children }) => (
  <>
    <Navbar />
    <Baner />
    {children}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <Products />
      </DefaultLayout>
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
]);

function App() {
  const cartCtx = useContext(CartContext);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
