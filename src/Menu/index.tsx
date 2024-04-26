import Menu from "./Menu";
import MenuNavbar from "./MenuNavbar";
import "./items.styles.css";

function Items() {
  return (
    <>
      <div className="menu">
        <Menu />
      </div>
      <div className="menu-cart"></div>
    </>
  );
}

export default Items;
