import Login from "./Login";
import SignUp from "./SignUp";
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
          <Login onClick={handleSignUpClick} />
        )}
      </div>
    </>
  );
}

export default Registration;
