import React from "react";
import { clearCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items) || [];
  const dispatch = useDispatch();
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <div>
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="cart">
                <img
                  src={item.thumbnail}
                  alt="product img"
                  className="product-img"
                />
                <p>{item.title}</p>
                <p>Price: ₹{item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <h2 className="sum">Total Price: ₹{calculateTotal()}</h2>
        <button className="clear-btn" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
