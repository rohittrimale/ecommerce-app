import React, { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { product } = props;
  const cartCtx = useContext(CartContext);
  const addCartHandler = (event) => {
    event.preventDefault();
    console.log(cartCtx.cartItem);
    const cartItem = {
      title: product.title,
      id: product.id,
      price: product.price,

      imageUrl: product.thumbnail,

      quantity: 1,
    };
    cartCtx.onAddItem(cartItem);
  };
  return (
    <Link to={`product/${product.id}`} state={{ product: product }}>
      <div className="flex flex-col justify-evenly content-center bg-gray-300 rounded-xl border border-slate-400 p-3 items-center  max-w-72 mx-auto h-96">
        <h3 className="text-xl py-1 font-semibold">{product.title}</h3>

        <div className=" bg-gray-300  overflow-hidden">
          <img
            src={product.thumbnail}
            alt="img"
            width="400"
            className="hover:scale-125 duration-500 transition-transform"
          />
        </div>

        <div className="w-[100%] py-1 flex justify-around my-2 text-lg">
          <div className="font-bold ">${product.price}</div>
          <div className="hover:scale-105 duration-500 transition-transform">
            <button
              onClick={addCartHandler}
              className="text-lg bg-blue-300 px-2 rounded-lg hover:bg-blue-400 duration-500 transition-transform"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
