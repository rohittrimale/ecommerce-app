import React, { useContext } from "react";
import Model from "../UI/Model";
import CartContext from "../store/cart-context";

const CartData = () => {
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const onClose = () => {
    cartCtx.onVisible();
  };

  if (totalItems === 0) {
    return (
      <Model onClose={onClose}>
        <div className="p-10 text-center text-2xl font-semibold text-red-500">
          Cart Is Empty Please add Items!!!
        </div>
        <button
          onClick={onClose}
          className="bg-red-600 absolute top-4 right-4 px-2 font-bold text-white hover:scale-110 duration-500 transition-transform"
        >
          X
        </button>
      </Model>
    );
  }
  return (
    <Model className="max-w-[300px] p-4" onClose={onClose}>
      <button
        onClick={onClose}
        className="bg-red-600 absolute top-4 right-4 px-2 font-bold text-white hover:scale-110 duration-500 transition-transform"
      >
        X
      </button>
      <h1 className="font-metal-mania text-2xl mb-3  text-center">Cart</h1>

      <div className="grid grid-cols-12 justify-center mx-auto text-xl font-bold font-serif">
        <div className="border-b-2 col-span-5 text-center   border-black mx-2">
          Items
        </div>
        <div className="border-b-2 col-span-2  text-center border-black mx-2">
          Price
        </div>
        <div className="border-b-2 col-span-5  text-center border-black mx-2">
          <div>Quantity</div>
        </div>
      </div>
      <div className="overflow-auto max-h-80">
        {cartCtx.cartItem.map((cart) => {
          console.log(cart);
          return (
            <div className="grid grid-cols-12 justify-center   mx-2 my-4">
              <div className=" flex justify-start gap-2 items-center  border-b-2 col-span-5 py-1 border-black mx-2">
                <img src={cart.imageUrl} alt="img" height={100} width={100} />
                <div>{cart.title}</div>
              </div>
              <div className="border-b-2 col-span-2 text-xl  text-center border-black mx-2">
                {cart.price}
              </div>
              <div className="border-b-2 col-span-5 flex gap-3 justify-center  border-black mx-2">
                <div>
                  <input
                    className="border border-gray-800 text-center w-8 text-xl"
                    value={cart.quantity}
                  />
                </div>
                <div>
                  <button className="bg-red-600 px-2 rounded-lg">Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Model>
  );
};

export default CartData;
