import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ShoppingCart,
  User,
} from "lucide-react";
import "./cart.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useNavigate } from "react-router-dom";
import {
  quantityDecrement,
  removeFromCart,
  totalOrderPrice,
} from "../../../store/cartSlice";
import { quantityIncrement, clearCart } from "../../../store/cartSlice";
import { BACKEND_URL } from "../../../constants";

//
function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const [user, setUser] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  const handleIncrement = (id: string) => {
    dispatch(quantityIncrement(id));
  };
  const handleDecrement = (id: string) => {
    dispatch(quantityDecrement(id));
  };
  const removeItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(totalOrderPrice());
  }, [dispatch]);

  const handleOrder = async () => {
    try {
      const newArr = cartItems.map((item) => ({
        milkItemId: item.id,
        itemName: item.name,
        quantity: item.quantity,
        itemCost: item.cost,
      }));

      const order = await fetch(`${BACKEND_URL}/order`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({
          items: newArr,
        }),
      });

      if (!order.ok) {
        if (order.status === 401) {
          console.log("unauthorized access no session Id found");
          navigate(`/login`);
        }
        return;
      }
      dispatch(clearCart());
      const data = await order.json();
      const orderId = data._id;
      console.log(data);
      if (data) {
        navigate(`/order/${orderId}`);
      }
    } catch (error) {
      console.log("order", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetch(`${BACKEND_URL}/userDetails`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Response is not ok");
          }
          return res.json();
        })
        .then((data) => {
          setUser(data.name);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, [token]);

  const getUserInitials = (name: string): string => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="cart-container">
      <header className="cart-header">
        <h1 className="cart-title">
          <ShoppingCart className="cart-icon" />
          Your Milk Cart
        </h1>
        <div className="user-profile">
          <div className="user-initials">
            {user ? getUserInitials(user) : <User />}
          </div>
        </div>
      </header>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <ShoppingBag size={64} className="empty-cart-icon" />
          <p>Your cart is empty. Let's add some delicious milk!</p>
          <Link to="/menu" className="go-shopping-link">
            <Button variant="default" className="go-shopping-button">
              <ShoppingCart size={20} className="go-shopping-icon" />
              Go Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={`${BACKEND_URL + item.image}`}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">₹ {item.cost}</p>
                  <div className="cart-item-quantity">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="quantity-btn"
                    >
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="quantity-btn"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-summary-row">
              <span>Total Milk Items:</span>
              <span>{totalQuantity}</span>
            </div>

            <div className="cart-summary-row cart-total">
              <span>Total Order Price:</span>
              <span>₹ {totalPrice}</span>
            </div>
          </div>
          <div className="cart-actions">
            <Button variant="default" onClick={handleOrder}>
              Place Order
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
