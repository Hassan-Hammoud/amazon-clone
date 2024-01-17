import React from "react";
import "./Checkout.css";
import { useAuth } from "../../context/GlobalState";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
const Checkout = () => {
  const { user, basket } = useAuth();
  return (
    <>
      <div className="checkout">
        <div className="checkout-left">
          <img src="https://i.ibb.co/QcQWVYR/checkout-Ads.jpg" alt="Ads-img" />
          <div>
            <h3>Hello {user?.email}</h3>
            <h2 className="checkout-title">Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="checkout-right">
          <Subtotal />
        </div>
      </div>
      {basket.length === 0 && (
        <h1 className="emptyBasket-text">No Items In Your Basket, Add Some!</h1>
      )}
    </>
  );
};

export default Checkout;
