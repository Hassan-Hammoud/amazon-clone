import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useAuth } from "../../context/GlobalState";
import { getBasketTotal } from "../../context/AppReducer";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const navigate = useNavigate();
  const { basket } = useAuth();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This Order Contains A Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => navigate("/payment")}>Proceed To Checkout</button>
    </div>
  );
};

export default Subtotal;
