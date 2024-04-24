import { Button, Typography } from "@mui/material";
import { itemsArray, itemsType } from "./MenuItems";

function Menu() {
  return (
    <>
      <div className="menu-container">
        <div className="menu-items">
          {itemsArray.map((item: itemsType) => (
            <div className="item-box">
              <div>
                <img src={item.image} className="item-img" />
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
      </div>
    </>
  );
}

export default Menu;
