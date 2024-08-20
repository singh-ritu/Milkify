import "./index.style.css";
import Navbar from "./components/Navbar";
import Inspiraton from "./components/inspiration-page";
import ContactUs from "./components/contact-page";
import Intro from "./components/intro-page";

function Home() {
  return (
    <>
      <div className="home">
        <div>
          <Navbar />
        </div>
        <div className="intro-page">
          <Intro />
        </div>
        <div className="inspiration-page">
          <Inspiraton />
        </div>
        <div className="contact-page">
          <ContactUs />
        </div>
      </div>
    </>
  );
}

export default Home;
