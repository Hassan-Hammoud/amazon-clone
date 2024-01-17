import React from "react";
import "./Product.css";
import { FaStar } from "react-icons/fa6";
import { useAuth } from "../../context/GlobalState";

const Product = ({ id, image, price, title, rating }) => {
  const { dispatch, basket } = useAuth();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  console.log(basket);
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
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
};

export default Product;
