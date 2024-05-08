import Logo from "../Home/Logo";
import "./cart.styles.css";
import soy from "./../assets/soy.jpg";

function Cart() {
  return (
    <>
      <div className="cart">
        <div className="cart-item">
          <div>
            <Logo image={soy} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <b>Soy Milk</b>
              <p>200 INR/Lt</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
