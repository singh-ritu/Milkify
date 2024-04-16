import { Typography, Button } from "@mui/material";
import "./card.styles.css";
import { menuCards, menuCardsArray } from "./MenuCardConstants";

function Cards() {
  return (
    <>
      <div className="menu-cards">
        {menuCardsArray.map((card: menuCards) => (
          <div className="menu-card">
            <div className="menuCard-heading">
              <Typography variant="h4" component="div">
                {card.heading}
              </Typography>
            </div>
            <div className="menuCard-content">
              <b>{card.content}</b>
            </div>
            <div className="menuCard-btn">
              <Button>Explore more</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
