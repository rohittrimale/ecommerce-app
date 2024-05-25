import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Review from "./Review";
import CartContext from "../store/cart-context";
import ProductSpec from "./ProductPage/ProductSpec";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state.product;

  return (
    <div>
      <ProductSpec product={product} />
    </div>
  );
};

export default ProductDetails;
