import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Logo from "../logo";
import "./inspiration.styles.css";
import { cardsType, cardsArray } from "../../Constants";

function Inspiraton() {
  return (
    <>
      <div className="inspiration-cards">
        {cardsArray.map((card: cardsType) => (
          <div key={card.heading} className="inspirationCard-box">
            <div className="card">
              <div className="card-details">
                <div>
                  <Logo image={card.image} />
                </div>
                <div className="inspirationCard-heading">
                  <Typography variant="h5" component="div">
                    {card.heading}
                  </Typography>
                </div>
                <div className="card-content">
                  <Typography variant="body2">{card.content}</Typography>
                </div>
              </div>
              <div>
                <Button
                  style={{
                    color: "#a5aa52",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Inspiraton;
