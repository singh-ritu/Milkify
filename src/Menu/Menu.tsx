import { Button, Typography } from "@mui/material";
import { itemsArray, itemsType } from "./MenuItems";
import MenuNavbar from "./MenuNavbar";
import "./menu.styles.css";
import Cart from "./Cart";
import veganMilk from "./../assets/veganMilk.jpg";

function Menu() {
  return (
    <>
      <div className="menu-container">
        <div className="menu-items">
          <MenuNavbar />
          <div className="milk-category">
            <div>
              <Typography variant="h6" component="div">
                "Indulge in Nature's Bounty: Savor the Creaminess, Sip the
                Goodness of Vegan Bliss!"
              </Typography>
              <Button
                variant="contained"
                style={{
                  borderRadius: "24px",
                  backgroundColor: "#edf0da",
                  color: "#a5aa52",
                  margin: "16px",
                }}
              >
                Learn more
              </Button>
            </div>

            <img src={veganMilk} alt="no-img" className="vegan-img" />
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
