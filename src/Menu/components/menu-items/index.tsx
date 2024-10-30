import "./menu-items.styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
import { AppDispatch } from "../../../store";
import { getTotalitems } from "../../../store/cartSlice";
import Button from "../../../components/Button";
import { ShoppingCart, User } from "lucide-react";

interface MenuItems {
  _id: string;
  name: string;
  image: string;
  isVegan: boolean;
  description: string;
  cost: number;
}
function Menu() {
  const [menuItems, setmenuItems] = useState<MenuItems[]>([]);
  const [visibleItems, setVisibleItems] = useState<MenuItems[]>([]);
  const [user, setUser] = useState<string>("");

  const dispatch: AppDispatch = useDispatch();

  const handleAddToCart = (item: MenuItems) => {
    const cartItem = {
      id: item._id,
      name: item.name,
      cost: item.cost,
      image: item.image,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:6005/get-milkItems", {
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
        setmenuItems(data);
      });
    const revealItems = () => {
      const revealed = menuItems.slice(0, visibleItems.length + 1);
      setVisibleItems(revealed);
    };

    const timer = setTimeout(revealItems, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (token) {
      fetch("http://localhost:6005/userDetails", {
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

  const handleUser = () => {
    if (!token) {
      navigate("/login");
    }
  };

  const totalItems = useSelector(getTotalitems);

  const getUserInitials = (name: string): string => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <>
      <header className="menu-header">
        <h1 className="menu-title">Milk Store</h1>

        <div className="user-profile">
          <Link to="/cart" className="cart-link">
            <span className="cart-icon" data-count={totalItems}>
              Cart:
              <ShoppingCart />
            </span>
          </Link>
          <div className="user-initials" onClick={handleUser}>
            {user ? getUserInitials(user) : <User />}
          </div>
        </div>
      </header>
      {/* {user.isLoggedIn ? <p>Welcome, {user.name}</p> : <p>Welcome, Guest!</p>} */}
      <div className="menu-content">
        <div className="product-grid">
          {menuItems.map((item) => (
            <div key={item._id} className="product-card">
              <img
                src={`https://milkify-backend.onrender.com${item.image}`}
                alt={item.name}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-description">{item.description}</p>
                <div className="product-footer">
                  <span className="product-price">{item.cost} ₹/Lt</span>
                  <span
                    className={`product-badge ${
                      item.isVegan ? "vegan" : "non-vegan"
                    }`}
                  >
                    {item.isVegan ? "Vegan" : "Non-Vegan"}
                  </span>
                </div>
                <Button onClick={() => handleAddToCart(item)} variant="default">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
