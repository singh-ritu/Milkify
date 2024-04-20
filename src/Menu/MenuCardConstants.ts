import plant from "./../assets/plant.jpg";
import nonvegan from "./../assets/nonvegan.jpg";
import photo3 from "./../assets/photo3.jpg";
import photo2 from "./../assets/photo2.jpg";

export type menuCards = {
  heading: string;
  content: string;
  image: string;
  bgImg: string;
};
export let menuCardsArray: Array<menuCards> = [
  {
    heading: "Vegan",
    image: plant,
    content:
      " Indulge in the pure essence of plant-powered goodness with our selection of vegan milk alternatives. Crafted from nature's bounty, our vegan milk offerings provide a nourishing blend of vitamins, minerals, and antioxidants, without any compromise on taste or texture. From creamy almond milk to silky soy milk, each sip embodies the rich diversity of plant-based flavors, inviting you to explore a world of culinary possibilities. ",
    bgImg: photo3,
  },
  {
    heading: "Non-Vegan",
    image: nonvegan,
    content:
      " Indulge in the timeless tradition of dairy delights with our selection of premium non-vegan milk offerings. Sourced from trusted dairy farms, our milk products are a testament to quality, taste, and tradition. Immerse yourself in the rich creaminess of our milk, carefully crafted to deliver a wholesome dose of essential nutrients, including calcium, vitamin D, and protein. From classic cow's milk to decadent cream, each sip evokes a sense of comfort and satisfaction, reminiscent of cherished moments shared around the table.",
    bgImg: photo2,
  },
];
