import "./Home.style.css";
import Navbar from "./Navbar";
import Inspiraton from "./Inspiraton";
import ContactUs from "./ContactUs";

function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="intro-page">
        <div className="intro">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            totam, nemo quis soluta deserunt labore natus aperiam aliquid. Totam
            quaerat ad perferendis excepturi fuga! Similique saepe temporibus
            dolore quia labore.
          </span>
        </div>
      </div>
      <div className="inspiration-page">
        <Inspiraton />
      </div>
      <div className="contact-page">
        <ContactUs />
      </div>
    </>
  );
}

export default Home;
