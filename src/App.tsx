import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Home/Navbar";
import Inspiraton from "./Home/Inspiraton";
import ContactUs from "./Home/ContactUs";

function App() {
  return (
    <>
      <div>
        <div className="get-started-page">
          <Navbar />
          <Home />
        </div>
        <div>
          <Inspiraton />
        </div>
        <div>
          <ContactUs />
        </div>
      </div>
    </>
  );
}

export default App;
