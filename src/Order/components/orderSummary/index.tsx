import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CheckCircle, Package } from "lucide-react";
import Button from "../../../components/Button";
import "./orderSummary.styles.css";

interface SummaryItem {
  _id: string;
  milkItemId: string;
  itemName: string;
  quantity: number;
  itemCost: number;
}

interface OrderSummary {
  userName: string;
  items: SummaryItem[];
  totalPrice: number;
  _id: string;
}

function OrderSummary() {
  const initialValues: OrderSummary = {
    userName: "",
    items: [
      {
        _id: "",
        milkItemId: "",
        itemName: "",
        itemCost: 0,
        quantity: 0,
      },
    ],
    totalPrice: 0,
    _id: "",
  };

  const [orderDetails, setOrderDetails] = useState<OrderSummary>(initialValues);

  const { orderId } = useParams();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`https://milkify-one.vercel.app/get-order/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Response not ok");
        }
        return res.json();
      })
      .then((data) => {
        setOrderDetails(data);
      });
  }, [orderId]);

  const handleLogOut = async () => {
    console.log(token);

    const response = await fetch("https://milkify-one.vercel.app/logOut", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <div className="order-summary-container">
      <div className="order-summary-content">
        <div className="thank-you-message">
          <CheckCircle size={48} className="check-icon" />
          <h1>Thank You for Your Order!</h1>
          <p>
            We're processing your order and will send you a confirmation email
            shortly.
          </p>
        </div>
        <div className="order-details">
          <h2>Order Summary</h2>
          <div className="order-items">
            {orderDetails.items.map((item) => (
              <div key={item._id} className="order-item">
                <Package size={24} className="item-icon" />
                <div className="item-details">
                  <span className="item-name">{item.itemName}</span>
                  <span className="item-quantity">Qty: {item.quantity}</span>
                </div>
                <span className="item-price">
                  ₹{item.itemCost * item.quantity}
                </span>
              </div>
            ))}
          </div>
          <div className="order-total">
            <span>Total</span>
            <span>₹{orderDetails.totalPrice}</span>
          </div>
        </div>
        <div className="action-buttons">
          <Link to="/menu">
            <Button variant="default">Continue Shopping</Button>
          </Link>
        </div>
        <Button variant="default" className="logOut-btn" onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
    </div>
  );
}

export default OrderSummary;
