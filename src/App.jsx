import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ImageSlide from "./components/ImageSlide";
import ProductInfoAndCart from "./components/ProductInfoAndCart";
import LightBox from "./components/LightBox";
import CartProvider from "./contexts/CartProvider";

function App() {
  return (
    <CartProvider>
      <div className="max-w-[1110px]">
        <Navbar />

        <div className="grid lg:grid-cols-2 md:py-14">
          <ImageSlide />
          <LightBox />
          <ProductInfoAndCart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
