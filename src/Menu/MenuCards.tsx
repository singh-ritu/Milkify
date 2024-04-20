import { Typography, Button } from "@mui/material";
import "./card.styles.css";
import Logo from "../Home/Logo";
import { menuCards, menuCardsArray } from "./MenuCardConstants";

function Cards() {
  return (
    <>
      <div>
        {menuCardsArray.map((card: menuCards) => (
          <div>
            <div className="menuCard-heading">
              <Typography variant="h4" component="div">
                {card.heading}
              </Typography>
            </div>
            <div className="menu">
              <div className="menu-card">
                <div>
                  <img src={card.bgImg} className="bg-img" />
                </div>
                <div className="menu-details">
                  <div className="menuCard-logo">
                    <Logo image={card.image} />
                  </div>
                  <div className="menuCard-content">
                    <b>{card.content}</b>
                  </div>
                  <div className="menuCard-btn">
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#edf0da",
                        color: "#a5aa52",
                      }}
                    >
                      Explore more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
