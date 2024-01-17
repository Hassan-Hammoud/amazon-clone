import React from "react";
import "./Product.css";
import { FaStar } from "react-icons/fa6";

const Product = ({ id, image, price, title, rating }) => {
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <FaStar className="star-rating" />
            ))}
        </div>
      </div>
      <img src={image} alt="product-img" />
      <button>Add To Basket</button>
    </div>
  );
};

export default Product;
