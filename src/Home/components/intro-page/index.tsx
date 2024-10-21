import { Button, Typography } from "@mui/material";
import "./intro.styles.css";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();
  return (
    <>
      <div className="intro">
        <div className="intro-details">
          <div className="intro-heading">
            <Typography variant="h3" component="div">
              Pure Perfection in Every Pour!
              <div className="intro-stepper"></div>
            </Typography>
          </div>
          <b>
            " Elevate your senses with milk's unparalleled purity and taste,
            making each pour a moment of pure delight."
          </b>
          <div>
            <Button
              style={{
                margin: "20px",
                fontWeight: "bolder",
                color: "white",
                border: "1px solid white",
              }}
              variant="outlined"
              onClick={() => {
                navigate("/menu");
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
