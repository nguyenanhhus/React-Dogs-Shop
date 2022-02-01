import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../Contexts/CartContext";
import "./cart.css";

Cart.propTypes = {};

function Cart(props) {
  const { cart, addToCart, total, setTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    addToCart([{}]);
    setTotal(0);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <section className="cart-container">
      <div className="cart-header">CHECKOUT</div>
      <div className="cart-items">
        {cart.slice(1).map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <img src={item.imageUrl} className="cart-item-img" alt="" />
              {item.name} : {item.price} $
            </div>
          );
        })}
        <div className="cart-total">TOTAL: {total} $</div>
      </div>
      <button className="cart-checkout" onClick={handleCheckout}>
        DONE
      </button>
      <button className="cart-gohome" onClick={handleGoHome}>
        RETURN HOME
      </button>
    </section>
  );
}

export default Cart;
