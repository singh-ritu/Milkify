import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./contactUs.styles.css";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function ContactUs() {
  return (
    <>
      <div className="form-heading">
        <Typography variant="h4" component="div" className="heading">
          Get In Touch
        </Typography>
        <Typography variant="body1" component="div" className="heading">
          <p>
            Have a question, suggestion, or just want to say hello? We'd love to
            hear from you!
          </p>
          Fill out the form below, and one of our team members will get back to
          you as soon as possible.
        </Typography>
      </div>
      <div className="form-container">
        <Typography variant="h4" component="div">
          Contact Us
        </Typography>
        <div className="form">
          <Box component="form">
            <div className="form-details">
              <div style={{ display: "flex", alignItems: "center" }}>
                <TextField
                  variant="standard"
                  label=" Your Name"
                  sx={{
                    paddingRight: "20px",
                    width: "50%",
                  }}
                />
                <TextField
                  variant="standard"
                  label=" Your email"
                  id="standard-basic"
                  sx={{ width: "100%", padding: "10px" }}
                />
              </div>
              <TextField
                variant="standard"
                label=" Your Subject"
                sx={{ padding: "10px" }}
              />
              <TextField
                variant="standard"
                label=" Your message"
                placeholder="Write your message here"
                sx={{ padding: "10px" }}
              />
            </div>
            <div>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                style={{
                  backgroundColor: "rgb(109, 89, 150)",
                }}
              >
                Submit
              </Button>
            </div>
          </Box>
          <div className="form-img"></div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
