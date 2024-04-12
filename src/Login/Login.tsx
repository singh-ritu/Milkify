import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import "./login.styles.css";
import Typography from "@mui/material/Typography";

function Login(props: { onClick: () => void }) {
  return (
    <>
      <div className="parent-container">
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
              <div className="steper"></div>
            </div>
            <p style={{ margin: 0 }}>Then you should try us!</p>
            <div className="caption">
              <Typography variant="caption" component="div">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis laboriosam architecto doloribus voluptatibus temporibus
                soluta et, doloremque sapiente voluptatum nesciunt.
              </Typography>
            </div>
            <Button
              variant="outlined"
              style={{
                borderRadius: "24px",
                width: "60%",
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
                    sx={{ width: "100%", padding: "10px" }}
                    InputLabelProps={{
                      style: { fontSize: "small", color: "black" },
                    }}
                  />

                  <TextField
                    variant="standard"
                    label="Password"
                    type="password"
                    sx={{ width: "100%", padding: "10px" }}
                    InputLabelProps={{
                      style: { fontSize: "small", color: "black" },
                    }}
                  />
                </div>
                <div className="sign-in-footer">
                  <FormControlLabel
                    control={<Checkbox defaultChecked size="small" />}
                    label="Keep Me Signed In"
                  />
                  <div>Forgot Password ?</div>
                </div>
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "24px",
                    width: "100%",
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
