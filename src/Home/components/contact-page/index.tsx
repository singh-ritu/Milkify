import Typography from "@mui/material/Typography";
import "./contactUs.styles.css";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function ContactUs() {
  return (
    <>
      <div className="contactUs-heading">
        <Typography variant="h4" component="div">
          Get In Touch
        </Typography>
        <b>
          Have a question, suggestion, or just want to say hello? We'd love to
          hear from you!
        </b>
        <br />
        <b>
          Fill out the form below, and one of our team members will get back to
          you as soon as possible.
        </b>
      </div>
      <div className="form-container">
        <div className="form">
          <div className="form-details">
            <div className="form-heading">
              <Typography variant="h4" component="div">
                Contact Us
              </Typography>
              <b>Get in Touch and let us know how we can help</b>
            </div>
            <div className="form-inputs">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "20px",
                }}
              >
                <TextField
                  variant="standard"
                  label=" Your Name"
                  sx={{ marginRight: "20px", width: "40%" }}
                  InputLabelProps={{
                    style: { fontSize: "small" },
                  }}
                />
                <TextField
                  variant="standard"
                  label=" Your email"
                  sx={{ width: "60%" }}
                  InputLabelProps={{
                    style: { fontSize: "small" },
                  }}
                />
              </div>
              <TextField
                variant="standard"
                label=" Your Subject"
                sx={{ paddingBottom: "20px" }}
                InputLabelProps={{
                  style: { fontSize: "small" },
                }}
              />
              <TextField
                variant="standard"
                label=" Your message"
                sx={{
                  paddingBottom: "20px",
                }}
                InputLabelProps={{
                  style: { fontSize: "small" },
                }}
              />
            </div>
            <div>
              <Button
                endIcon={<SendIcon />}
                style={{
                  color: "black",
                }}
              >
                Submit
              </Button>
            </div>
          </div>
          <div className="form-img"></div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
