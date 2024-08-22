import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ImageSlide from "./components/ImageSlide";
import ProductInfoAndCart from "./components/ProductInfoAndCart";
import LightBox from "./components/LightBox";

function App() {
  const [cartAmount, setCartAmount] = useState(0);

  return (
    <div className="max-w-[1110px]">
      <Navbar cartAmount={cartAmount} setCartAmount={setCartAmount} />

      <div className="grid lg:grid-cols-2 md:py-14">
        <ImageSlide />
        <LightBox />
        <ProductInfoAndCart
          cartAmount={cartAmount}
          setCartAmount={setCartAmount}
        />
      </div>
    </div>
  );
}

export default App;
