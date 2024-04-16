import "./Home.style.css";
import Navbar from "./Navbar";
import Inspiraton from "./Inspiraton";
import ContactUs from "./ContactUs";
import Intro from "./Intro";

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
