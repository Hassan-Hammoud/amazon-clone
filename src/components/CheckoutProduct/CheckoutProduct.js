import React from "react";
import "./CheckoutProduct.css";
import { FaStar } from "react-icons/fa6";
import { useAuth } from "../../context/GlobalState";

const CheckoutProduct = ({ id, title, image, price, rating, hiddenButton }) => {
  const { dispatch } = useAuth();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct-image">
        <img src={image} alt="Product-img" />
      </div>
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <FaStar key={i} className="star-rating" />
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
