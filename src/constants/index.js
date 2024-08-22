import {
  product1,
  product1Thumbnail,
  product2,
  product2Thumbnail,
  product3,
  product3Thumbnail,
  product4,
  product4Thumbnail,
} from "../assets/images";

const links = ["Collections", "Men", "Women", "About", "Contact"];

const product = {
  company: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 250,
  discount: 50,
};

const thumbnails = [
  product1Thumbnail,
  product2Thumbnail,
  product3Thumbnail,
  product4Thumbnail,
];

const products = [product1, product2, product3, product4];

export { links, product, thumbnails, products };
