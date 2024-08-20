import "./navbar.styles.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-heading">
          <Typography variant="h3" component="h2">
            Milkify
          </Typography>
        </div>
        <div className="nav-btns">
          <Button variant="text" style={{ color: "white" }}>
            Milk Shop
          </Button>
          <Button variant="text" style={{ color: "white" }}>
            Inspiration
          </Button>
          <Button variant="text" style={{ color: "white" }}>
            MAbout Milkify
          </Button>
          <Button variant="text" style={{ color: "white" }}>
            Contact
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
