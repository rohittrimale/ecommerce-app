import React from "react";

const CartButton = (props) => {
  return (
    <div className=" p-2">
      <div className="absolute right-1 md:right-7 top-0 text-xl  text-emerald-400">
        {props.totalItems}
      </div>
      <button className="border p-1 px-4  text-xl rounded-xl border-emerald-400">
        Cart
      </button>
    </div>
  );
};

export default CartButton;
