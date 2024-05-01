import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import "./login.styles.css";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function Login(props: { onClick: () => void }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <div className="left-container">
            <div className="heading">
              <Typography
                variant="h4"
                component="div"
                style={{ fontWeight: "bolder" }}
              >
                We haven't
              </Typography>
              <Typography
                variant="h4"
                component="div"
                style={{ fontWeight: "bolder" }}
              >
                met before right ?
              </Typography>
              <div style={{ marginTop: "10px" }}>
                <b>Then you should try us!</b>
              </div>
            </div>
            <div className="caption">
              <Typography
                variant="caption"
                component="div"
                style={{ fontWeight: "bold" }}
              >
                "Welcome to our milk family! Your journey to nutritious goodness
                begins here. Sign up today and unlock a world of dairy delights
                tailored just for you. From farm-fresh to innovative plant-based
                alternatives, we're here to delight your taste buds!"
              </Typography>
            </div>
            <Button
              variant="outlined"
              style={{
                borderRadius: "24px",
                width: "60%",
                border: "1px solid #a5aa52 ",
                color: "#a5aa52",
              }}
              onClick={props.onClick}
            >
              SIGN UP
            </Button>
          </div>
          <div className="right-container">
            <div className="sign-in-heading">
              <Typography
                variant="h4"
                component="div"
                style={{ fontWeight: "bolder" }}
              >
                WELCOME HOME!
              </Typography>
            </div>
            <div className="sign-in-form">
              <Box component="form">
                <div className="sign-in-form-details">
                  <TextField
                    variant="standard"
                    label="Username"
                    sx={{ width: "100%", paddingBottom: "10px" }}
                    InputLabelProps={{
                      style: { fontSize: "small" },
                    }}
                  />

                  <TextField
                    variant="standard"
                    label="Password"
                    type="password"
                    sx={{ width: "100%", paddingBottom: "10px" }}
                    InputLabelProps={{
                      style: { fontSize: "small" },
                    }}
                  />
                </div>
                <div className="sign-in-footer">
                  <FormControlLabel
                    control={<Checkbox defaultChecked size="small" />}
                    label="Keep Me Signed In"
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                  />
                  <div>Forgot Password ?</div>
                </div>

                <Button
                  variant="contained"
                  style={{
                    borderRadius: "24px",
                    width: "100%",
                    backgroundColor: "#edf0da",
                    color: "#a5aa52",
                  }}
                  onClick={() => {
                    navigate("/menu");
                  }}
                >
                  SIGN IN
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
