import React from "react";
import "./Product.css";
import { FaStar } from "react-icons/fa6";

const Product = () => {
  return (
    <div className="product">
      <div className="product-info">
        <p>Title</p>
        <p className="product-price">
          <small>$</small>
          <strong>105</strong>
        </p>
        <div className="product-rating">
          <FaStar className="star-rating" />
          <FaStar className="star-rating" />
          <FaStar className="star-rating" />
          <FaStar className="star-rating" />
          <FaStar className="star-rating" />
        </div>
      </div>
      <img src="https://i.ibb.co/T2tgW1k/amazon-logo.png" alt="m" />
      <button>Add To Basket</button>
    </div>
  );
};

export default Product;
