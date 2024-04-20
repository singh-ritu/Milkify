import Navbar from "../Home/Navbar";
import Cards from "./MenuCards";
import "./items.styles.css";
function Items() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="items">
        <Cards />
      </div>
    </>
  );
}

export default Items;
