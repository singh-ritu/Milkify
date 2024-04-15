import { TextField, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./signUp.styles.css";

function SignUp(props: { handleSignUpClose: () => void }) {
  return (
    <>
      <div className="signUp-container">
        <div className="signUp-heading">
          <Typography variant="h3" component="div">
            Sign Up
          </Typography>
          <div style={{ margin: "10px" }}>
            <b>Let's get Started with your 30 days Trial!</b>
          </div>
        </div>
        <div className="inputs">
          <TextField
            variant="standard"
            label="Name"
            sx={{ width: "100%", padding: "10px" }}
            InputLabelProps={{
              style: { fontSize: "small", color: "black" },
            }}
          />
          <TextField
            variant="standard"
            label="Email"
            sx={{ width: "100%", padding: "10px" }}
            InputLabelProps={{
              style: { fontSize: "small", color: "black" },
            }}
          />
          <TextField
            variant="standard"
            label="password"
            type="password"
            sx={{ width: "100%", padding: "10px" }}
            InputLabelProps={{
              style: { fontSize: "small", color: "black" },
            }}
          />
        </div>
        <Button
          variant="contained"
          style={{
            borderRadius: "24px",
            width: "100%",
          }}
        >
          SIGN UP
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "8px",
          }}
        >
          <span>Already have an account?</span>
          <div
            style={{ color: "#1976D2", marginLeft: "4px", cursor: "pointer" }}
            onClick={props.handleSignUpClose}
          >
            {" "}
            Log in{" "}
          </div>
        </div>
        <Button
          variant="outlined"
          style={{
            borderRadius: "24px",
            width: "100%",
            margin: "30px 0",
            color: "black",
            border: "1px solid black",
          }}
        >
          <b>Sign up with Google</b>
        </Button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>By Signing Up to create an account I accept</span>
          <span>Company's Terms of use and Privacy Policies</span>
        </div>
      </div>
    </>
  );
}

export default SignUp;
