import React from "react";
import Model from "../UI/Model";
const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];
const CartData = () => {
  return (
    <Model className="max-w-[300px] p-4">
      <button className="bg-red-600 absolute top-4 right-4 px-2 font-bold text-white hover:scale-110 duration-500 transition-transform">
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
      <div>
        {cartElements.map((cart) => {
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
