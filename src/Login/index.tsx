import Login from "./Login";
import SignUp from "./SignUp";
import "./registration.styles.css";
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
          <SignUp handleSignUpClose={handleSignUpClose} />
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
