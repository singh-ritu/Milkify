import Login from "./Login";
import SignUp from "./SignUp";
import { useState, useEffect } from "react";

function index() {
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpClicked(true);
  };
  useEffect(() => {
    console.log(isSignUpClicked);
  }, [isSignUpClicked]);
  return (
    <>
      <div>
        <Login onClick={handleSignUpClick} />
        {isSignUpClicked ? <SignUp /> : "error"}
      </div>
    </>
  );
}

export default index;
