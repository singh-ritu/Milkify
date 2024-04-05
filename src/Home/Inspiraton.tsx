import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./inspiration.styles.css";
import coffee from "../assets/coffee.jpg";
import { cardsType, cardsArray } from "./Constants";

function Inspiraton() {
  return (
    <>
      <div className="inspiration-cards">
        {cardsArray.map((card: cardsType) => (
          <div key={card.heading} style={{ width: "300px", margin: "20px" }}>
            <Card
              variant="outlined"
              className="card"
              sx={{
                border: "none",
              }}
            >
              <React.Fragment>
                {/* <Box
              sx={
                {
                  backgroundImage: `url(${coffee})`,
                  backgroundSize: "cover",
                  height: "100%",
                }
              }
            > */}
                {/* <Box
              sx={{
                backdropFilter: "blur(5px)",
                backgroundColor: "rgba(255, 255, 255,0.2)",
              }}
              > */}
                <CardContent className="card-content">
                  <Typography variant="h5" component="div">
                    {card.heading}
                  </Typography>

                  <Typography variant="body2" sx={{ padding: "10px 0" }}>
                    {card.content}
                  </Typography>
                  <Typography sx={{ padding: "10px 0" }} variant="body2">
                    <Typography variant="h6" component="div">
                      Takeaway Message:
                    </Typography>
                    {card.message}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
                {/* </Box> */}
                {/* </Box> */}
              </React.Fragment>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Inspiraton;
