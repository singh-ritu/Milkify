import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x INR{item.cost}
            </li>
          ))}
        </ul>
      )}
      <p>Total Items: {totalQuantity}</p>
    </div>
  );
};

export default Cart;
