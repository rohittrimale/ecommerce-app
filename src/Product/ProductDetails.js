import React from "react";
import { useLocation } from "react-router-dom";
import Review from "./Review";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state.product;

  console.log(product);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>
      <div>
        {/* Display all images */}
        <img
          src={product.imageUrl}
          alt={product.title}
          className="mb-4 rounded-lg"
        />
      </div>
      <div>
        {/* Display reviews */}
        <h3 className="text-xl font-semibold mb-2">Reviews:</h3>
        <div>
          {product.reviews.map((review, index) => (
            <Review
              key={index}
              user={review.user}
              comment={review.comment}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
