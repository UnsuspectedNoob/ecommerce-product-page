import React, { useState } from "react";
import {
  next,
  previous,
  product1,
  product2,
  product3,
  product4,
} from "../assets/images";

function ImageSlide() {
  const products = [product1, product2, product3, product4];
  const [index, setIndex] = useState(0);

  return (
    <div className="relative flex justify-between items-center h-[300px]">
      <img
        src={products[index]}
        alt="product image"
        className="absolute w-full h-full object-cover"
      />

      {/* Left Button */}
      <div
        className="relative z-[5] flex justify-center items-center bg-white ml-4 rounded-full w-10 h-10"
        onClick={() => {
          if (index <= 0) {
            setIndex(3);
          } else {
            setIndex(index - 1);
          }
        }}
      >
        <img src={previous} alt="previous image" className="w-2.5 font-bold" />
      </div>

      {/* Right Button */}
      <div
        className="relative z-[5] flex justify-center items-center bg-white mr-4 rounded-full w-10 h-10"
        onClick={() => {
          if (index >= 3) {
            setIndex(0);
          } else {
            setIndex(index + 1);
          }
        }}
      >
        <img src={next} alt="next image" className="w-2.5 font-bold" />
      </div>
    </div>
  );
}

export default ImageSlide;
