import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ImageSlide from "./components/ImageSlide";
import ProductInfoAndCart from "./components/ProductInfoAndCart";

function App() {
  const [cartAmount, setCartAmount] = useState(0);
  return (
    <div>
      <Navbar cartAmount={cartAmount} setCartAmount={setCartAmount} />

      <div>
        <ImageSlide />
        <ProductInfoAndCart
          cartAmount={cartAmount}
          setCartAmount={setCartAmount}
        />
      </div>
    </div>
  );
}

export default App;
