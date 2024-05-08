import { Button, Typography } from "@mui/material";
import { itemsArray, itemsType } from "./MenuItems";
import MenuNavbar from "./MenuNavbar";
import "./menu.styles.css";
import Cart from "./Cart";
import veganMilk from "./../assets/veganMilk.jpg";
import nonVeganMilk from "./../assets/nonVeganMilk.jpg";

import { useState } from "react";

function Menu() {
  const [clicked, setIsClicked] = useState(true);
  const handleClick = () => {
    if (clicked === true) setIsClicked(false);
    else setIsClicked(true);
  };
  return (
    <>
      <div className="menu-container">
        <div className="menu-items">
          <MenuNavbar />
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

          {itemsArray.map((item: itemsType) => (
            <div className="item-box">
              <div className="itemImg-container">
                <div
                  className="item-img"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                ></div>
              </div>
              <div className="item-details">
                <div className="item-name">
                  <Typography variant="h5" component="div">
                    {item.name}
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2" component="div">
                    " {item.details}"
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
                  <div>Cost:{item.price} INR/Lt</div>
                  <div>
                    <Button
                      variant="contained"
                      style={{
                        borderRadius: "24px",
                        backgroundColor: "#edf0da",
                        color: "#a5aa52",
                      }}
                    >
                      Add Item
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="menu-cart">
          <Cart />
        </div>
      </div>
    </>
  );
}

export default Menu;
