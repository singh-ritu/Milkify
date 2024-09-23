// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../../store";
// import { quantityDecrement, removeFromCart } from "../../../store/cartSlice";
// import { quantityIncrement } from "../../../store/cartSlice";

// function Cart() {
//   const cartItems = useSelector((state: RootState) => state.cart.items);
//   const dispatch = useDispatch();

//   const totalQuantity = useSelector(
//     (state: RootState) => state.cart.totalQuantity
//   );

//   const handleIncrement = (id: string) => {
//     dispatch(quantityIncrement(id));
//   };
//   const handleDecrement = (id: string, quantity: number) => {
//     dispatch(quantityDecrement(id));
//     if (quantity === 1) {
//       dispatch(removeFromCart(id));
//     }
//   };

//   const handleOrder = async () => {
//     try {
//       console.log(cartItems);

//       const newArr = cartItems.map((item) => ({
//         id: item.id,
//         quantity: item.quantity,
//       }));

//       const order = await fetch("http://localhost:6005/order", {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify({
//           items: newArr,
//         }),
//       });
//       const data = await order.json();
//       console.log(data);
//     } catch (error) {
//       console.log("order", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>No items in the cart.</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <>
//               <li key={item.id}>
//                 {item.name} - {item.quantity} x INR{item.cost}
//               </li>
//               <div>
//                 <button onClick={() => handleIncrement(item.id)}>+</button>
//                 {item.quantity}
//                 <button onClick={() => handleDecrement(item.id, item.quantity)}>
//                   -
//                 </button>
//               </div>
//             </>
//           ))}
//           <p>Total Items: {totalQuantity}</p>
//           <button onClick={handleOrder}>Place Your Order</button>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Cart;

import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import "./cart.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { quantityDecrement, removeFromCart } from "../../../store/cartSlice";
import { quantityIncrement } from "../../../store/cartSlice";

// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// type UpdateQuantityFunction = (id: number, newQuantity: number) => void;
// type RemoveItemFunction = (id: number) => void;

// const Cart: React.FC<{
//   cart: CartItem[];
//   updateQuantity: UpdateQuantityFunction;
//   removeItem: RemoveItemFunction;
// }> = ({ cart, updateQuantity, removeItem }) => {
//   const subtotal = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   const tax = subtotal * 0.08; // Assuming 8% tax

//   const total = subtotal + tax;
function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  const handleIncrement = (id: string) => {
    dispatch(quantityIncrement(id));
  };
  const handleDecrement = (id: string, quantity: number) => {
    dispatch(quantityDecrement(id));
    if (quantity === 1) {
      dispatch(removeFromCart(id));
    }
  };

  const handleOrder = async () => {
    try {
      console.log(cartItems);

      const newArr = cartItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      }));

      const order = await fetch("http://localhost:6005/order", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          items: newArr,
        }),
      });
      const data = await order.json();
      console.log(data);
    } catch (error) {
      console.log("order", error);
    }
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Order Details</h1>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">{item.cost.toFixed(2)}INR</p>
                  <div className="cart-item-quantity">
                    <button
                      onClick={() => handleDecrement(item.id, item.quantity)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.id)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-summary-row cart-total">
              <span>Total Products:</span>
              <span>{totalQuantity} Milk Items</span>
            </div>
          </div>
          <div className="cart-actions">
            <Button variant="default" onClick={handleOrder}>
              Proceed to Checkout
            </Button>
            <Link to="/menu">
              <Button variant="outline">Continue Shopping</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
