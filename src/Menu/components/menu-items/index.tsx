import { Button, Typography } from "@mui/material";
import "./menu-items.styles.css";
import veganMilk from "../../../assets/veganMilk.jpg";
import nonVeganMilk from "../../../assets/nonVeganMilk.jpg";
import { useEffect, useState } from "react";
import MenuNavbar from "../menu-navbar";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
import { AppDispatch } from "../../../store";

interface MenuItems {
  _id: string;
  name: string;
  category: string;
  description: string;
  cost: number;
}
function Menu() {
  const [menuItems, setmenuItems] = useState<MenuItems[]>([]);
  const [clicked, setIsClicked] = useState(true);

  const handleClick = () => {
    if (clicked === true) setIsClicked(false);
    else setIsClicked(true);
  };

  const dispatch: AppDispatch = useDispatch();

  const handleAddToCart = (item: MenuItems) => {
    const cartItem = {
      id: item._id,
      name: item.name,
      cost: item.cost,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };

  useEffect(() => {
    fetch("http://localhost:6005/get-milkItems")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Response is not ok");
        }
        return res.json();
      })
      .then((data) => {
        setmenuItems(data);
      });
  }, []);

  return (
    <>
      <div>
        <MenuNavbar />
      </div>
      <div className="menu-items">
        <div className="milk-category">
          <div>
            {clicked ? (
              <Typography>
                "Indulge in Nature's Bounty: Savor the Creaminess, Sip the
                Goodness of Vegan Bliss!"
              </Typography>
            ) : (
              <Typography>
                "Rich, creamy, and utterly satisfying, our non-vegan milk is a
                taste of pure indulgence."
              </Typography>
            )}

            <Button
              variant="contained"
              style={{
                borderRadius: "24px",
                backgroundColor: "#edf0da",
                color: "#a5aa52",
                margin: "16px",
              }}
              onClick={handleClick}
            >
              Learn more
            </Button>
          </div>
          {clicked ? (
            <img src={veganMilk} alt="no-img" className="vegan-img" />
          ) : (
            <img src={nonVeganMilk} alt="no-img" className="vegan-img" />
          )}
        </div>

        {menuItems.map((item) => (
          <div className="item-box" key={item._id}>
            <div className="item-details">
              <div className="item-name">
                <Typography variant="h5" component="div">
                  {item.name}
                </Typography>
              </div>
              <div>
                <Typography variant="body2" component="div">
                  " {item.description}"
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                }}
              >
                <div>Cost:{item.cost} INR/Lt</div>
                <div>
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: "24px",
                      backgroundColor: "#edf0da",
                      color: "#a5aa52",
                    }}
                    onClick={() => handleAddToCart(item)}
                  >
                    Add Item
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
