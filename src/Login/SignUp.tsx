import { Typography } from "@mui/material";
import "./signUp.styles.css";

function SignUp() {
  return (
    <>
      <div className="signUp-container">
        <div className="signUp-heading">
          <Typography variant="h3" component="div">
            Sign Up
          </Typography>
          <b>Let's get Started with your 30 days Trial!</b>
        </div>
      </div>
    </>
  );
}

export default SignUp;
