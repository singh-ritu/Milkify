import Login from "./components/login";
import SignUp from "./components/signup";
import "./index.styles.css";
import { useState, useEffect } from "react";

function Registration() {
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpClicked(true);
  };
  const handleSignUpClose = () => {
    setIsSignUpClicked(false);
  };
  useEffect(() => {
    console.log(isSignUpClicked);
  }, [isSignUpClicked]);
  return (
    <>
      <div>
        {isSignUpClicked ? (
          <div className="signUp">
            <SignUp handleSignUpClose={handleSignUpClose} />
          </div>
        ) : (
          <div className="login">
            <Login onClick={handleSignUpClick} />
          </div>
        )}
      </div>
    </>
  );
}

export default Registration;
