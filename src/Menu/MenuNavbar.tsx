import "./menuNavbar.styles.css";
import { Typography } from "@mui/material";

function MenuNavbar() {
  return (
    <>
      <div className="menu-navbar">
        <div className="menu-navbar-heading">
          <Typography variant="h3" component="h2">
            Milkify
          </Typography>
        </div>
        <div className="navbar-input">
          <input
            type="text"
            placeholder="Find Your Dairy Delight..."
            className="input"
          />
        </div>
      </div>
    </>
  );
}

export default MenuNavbar;
