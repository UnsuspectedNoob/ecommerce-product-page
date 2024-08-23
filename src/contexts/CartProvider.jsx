import React, { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartAmount, setCartAmount] = useState(0);

  return (
    <CartContext.Provider value={{ cartAmount, setCartAmount }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
