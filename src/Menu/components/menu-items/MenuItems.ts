import soy from "../../../assets/soy.jpg";
import almond from "../../../assets/Almond.jpg";
import coconut from "../../../assets/coconut.jpg";

export type itemsType = {
  itemType: string;
  image: string;
  name: string;
  details: string;
  price: number;
};

export let itemsArray: Array<itemsType> = [
  {
    itemType: "vegan",
    image: soy,
    name: "Soy Milk",
    details:
      "Derived from soybeans, soy milk is a popular dairy alternative prized for its nutritional profile. It's naturally lactose-free, making it suitable for individuals with lactose intolerance.",
    price: 200,
  },
  {
    itemType: "vegan",
    image: almond,
    name: "Almond Milk",
    details:
      "Made from ground almonds and water, almond milk is known for its delicate, slightly nutty flavor and creamy texture. Almond milk is also naturally rich in vitamin E, an antioxidant that supports skin health and immune function.",
    price: 300,
  },
  {
    itemType: "vegan",
    image: coconut,
    name: "Coconut Milk",
    details:
      " Extracted from the flesh of mature coconuts, coconut milk is prized for its rich, creamy consistency and tropical flavor. It contains healthy fats known as medium-chain triglycerides (MCTs), which are easily absorbed by the body improved heart health and weight managemen",
    price: 250,
  },
];
