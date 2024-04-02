import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Home/Navbar";
import Inspiraton from "./Home/Inspiraton";

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
      </div>
    </>
  );
}

export default App;
