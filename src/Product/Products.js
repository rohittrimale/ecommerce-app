import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    reviews: [
      { user: "Alice", comment: "Great colors!", rating: 5 },
      { user: "Bob", comment: "Could be better", rating: 3 },
    ],
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    reviews: [{ user: "Charlie", comment: "Amazing!", rating: 5 }],
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    reviews: [{ user: "David", comment: "Good combination", rating: 4 }],
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    reviews: [
      { user: "Emma", comment: "Beautiful shade of blue", rating: 5 },
      { user: "Frank", comment: "Not what I expected", rating: 2 },
    ],
  },
];

const Products = () => {
  return (
    <div className="flex gap-6">
      <div className=" grid grid-cols-1 mx-auto items-center justify-center content-center gap-5 md:grid-cols-2 lg:grid-cols-3">
        {productsArr.map((product) => {
          return (
            <div>
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
