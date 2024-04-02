import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./inspiration.styles.css";
import coffee from "../assets/coffee.jpg";

function Inspiraton() {
  const card = (
    <React.Fragment>
      <Box
        sx={{
          backgroundImage: `url(${coffee})`,
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <Box
          sx={{
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(255, 255, 255,0.2)",
          }}
        >
          <CardContent sx={{ color: "white" }}>
            <Typography variant="h5" component="div">
              Rise & Shine
            </Typography>

            <Typography variant="body2" sx={{ padding: "10px 0" }}>
              "At Milkify, we believe in starting your day with a burst of
              energy and vitality. Our farm-fresh milk, sourced from local dairy
              farms, is packed with essential nutrients to kickstart your
              morning routine. From creamy lattes to protein-packed smoothies,
              let our milk be the foundation of your daily rituals. Elevate your
              mornings with Milkify."
            </Typography>
            <Typography sx={{ padding: "10px 0" }} variant="body2">
              <Typography variant="h6" component="div">
                Takeaway Message:
              </Typography>
              "Start your day right. Fuel your mornings with the goodness of
              Milkify milk."
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Box>
      </Box>
    </React.Fragment>
  );
  return (
    <>
      <div className="card">
        <Card variant="outlined">{card}</Card>
      </div>
    </>
  );
}

export default Inspiraton;
