import Menu from "./components/menu-items";
import Cart from "./components/cart";
import "./index.styles.css";

function Items() {
  return (
    <>
      <div>
        <div style={{ display: "flex" }}>
          <div className="menu">
            <Menu />
          </div>
          <div className="cart">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
