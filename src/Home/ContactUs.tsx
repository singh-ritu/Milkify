import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./contactUs.styles.css";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function ContactUs() {
  return (
    <>
      <div style={{ backgroundColor: "rgb(163, 149, 94)" }}>
        <div className="form-heading">
          <Typography variant="h4" component="div">
            Get In Touch
          </Typography>
          <Typography variant="body1" component="div">
            <p>
              Have a question, suggestion, or just want to say hello? We'd love
              to hear from you!
            </p>
            Fill out the form below, and one of our team members will get back
            to you as soon as possible.
          </Typography>
        </div>
        <div className="form">
          <Typography variant="h4" component="div">
            Contact Us
          </Typography>
          <div>
            <Box component="form">
              <div className="form-container">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <TextField
                    variant="standard"
                    label=" Your Name"
                    id="standard-basic"
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
                  id="standard-basic"
                  sx={{ padding: "10px" }}
                />
                <TextField
                  variant="standard"
                  label=" Your message"
                  id="standard-basic"
                  placeholder="Write your message here"
                  sx={{ padding: "10px" }}
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  className="submit"
                >
                  Submit
                </Button>
              </div>
            </Box>
            <div className="form-img"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
