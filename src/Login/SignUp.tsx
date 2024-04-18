import { TextField, Typography, Button } from "@mui/material";
import "./signUp.styles.css";

function SignUp(props: { handleSignUpClose: () => void }) {
  return (
    <>
      <div className="signUp-container">
        <div className="signUp-box">
          <div className="signUp-heading">
            <Typography variant="h3" component="div">
              Sign Up
            </Typography>
            <b>Let's get Started with your 30 days Trial!</b>
          </div>
          <div className="signUp-inputs">
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
              backgroundColor: "#edf0da",
              color: "#a5aa52",
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
              color: "#edf0da",
              border: "1px solid #edf0da",
            }}
          >
            <b>Sign up with Google</b>
          </Button>
          <div className="signUp-footer">
            <div>
              <span>By Signing Up to create an account I accept</span>
            </div>
            <div>
              <span>Company's Terms of use and Privacy Policies</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
