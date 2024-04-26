import { Button, Typography } from "@mui/material";
import { itemsArray, itemsType } from "./MenuItems";
import MenuNavbar from "./MenuNavbar";
import "./menu.styles.css";
import Cart from "./Cart";

function Menu() {
  return (
    <>
      <div className="menu-container">
        <div>
          <MenuNavbar />
        </div>
        <div className="menu-items">
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
                  <Typography variant="h4" component="div">
                    {item.name}
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2" component="div">
                    {item.details}
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{item.price} </div>
                  <div>
                    <Button>Add Item</Button>
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
