import plant from "./../assets/plant.jpg";
import checkmark from "./../assets/checkmark.jpg";
import strength from "./../assets/strength.jpg";
import globe from "./../assets/globe.jpg";

export type cardsType = {
  heading: string;
  content: string;
  image: string;
};

export let cardsArray: Array<cardsType> = [
  {
    heading: "Diverse Selection",
    image: plant,
    content:
      "Explore a wide array of dairy options, including both vegan and non-vegan milk varieties, catering to different dietary preferences and lifestyles",
  },

  {
    heading: " Quality Assurance",
    image: checkmark,
    content:
      " Rest assured of the highest quality standards in every product, sourced from trusted suppliers and farms, ensuring freshness, purity, and nutritional value.",
  },
  {
    heading: " Health and Wellness",
    image: strength,
    content:
      " Prioritize your well-being with our range of milk products, rich in essential nutrients such as calcium, vitamin D, and protein, supporting a balanced and healthy lifestyle. ",
  },
  {
    heading: "Health and Wellness",
    image: globe,
    content:
      " Join us in our commitment to sustainability and environmental stewardship, with eco-friendly packaging options and responsible sourcing practices aimed at minimizing our ecological footprint.",
  },
];
