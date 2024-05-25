import React, { useContext } from "react";
import ProductPrizing from "./ProductPrizing";
import CartContext from "../../store/cart-context";

const ProductSideCard = ({ product }) => {
  const cartCtx = useContext(CartContext);
  const addCartHandler = (event) => {
    event.preventDefault();
    console.log(cartCtx.cartItem);
    const cartItem = {
      title: product.title,
      price: product.price,
      imageUrl: product.thumbnail,
      quantity: 1,
    };
    cartCtx.onAddItem(cartItem);
  };
  console.log(product);
  return (
    <div className=" ">
      <div className="">
        <div className="flex flex-col gap-3  justify-start items-start">
          <div className="">
            <div className="text-lg text-gray-500">{product.brand}</div>
            <h1 className="text-3xl font-bold text-start ">{product.title}</h1>
          </div>
          <ProductPrizing product={product} />
          <div>
            <div className="text-xl font-semibold">Product Details: </div>
            <p className="text-gray-700 text-base">{product.description}</p>
          </div>
          <div>
            <button
              onClick={addCartHandler}
              className="bg-purple-500  px-6 rounded-xl text-xl"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSideCard;
