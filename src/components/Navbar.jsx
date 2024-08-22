import React, { useState } from "react";
import {
  avatar,
  cart,
  logo,
  menu,
  close,
  product1Thumbnail,
  deleteIcon,
} from "../assets/images";
import { links, product } from "../constants";

function Navbar({ cartAmount, setCartAmount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { name, discount, price } = product;

  return (
    <div className="relative flex justify-between items-center p-6 pt-5">
      <div className="flex items-center gap-x-4">
        <img
          src={!menuOpen ? menu : close}
          alt="menu button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-40"
        />

        {/* Logo */}
        <img src={logo} alt="site logo sneakers" />
      </div>

      <div className="flex items-center gap-x-5">
        <img
          src={cart}
          alt="cart button"
          onClick={() => setCartOpen((prev) => !prev)}
        />
        <img src={avatar} alt="Profile icon" className="w-6" />
      </div>

      {/* Translucent Black Background */}
      <div
        className={`top-0 left-0 fixed bg-black ${
          menuOpen ? "opacity-75 z-[25]" : "opacity-0 -z-10"
        } w-screen h-screen transition`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`top-0 left-0 z-30 fixed flex flex-col gap-y-5 bg-white transition ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } pt-24 pl-6  w-2/3 h-screen font-bold text-lg`}
      >
        {links.map((link) => (
          <a href="#" key={link}>
            {link}
          </a>
        ))}
      </div>

      {/* Cart Menu */}
      <div
        className={`top-20 left-0 z-20 absolute px-2 w-full ${
          !cartOpen ? "hidden" : "block"
        }`}
      >
        <div className="relative bg-white pb-[30px] rounded-lg w-full">
          <p className="mb-7 px-6 pt-6 font-bold">Cart</p>
          <div className="border-t" /> {/* Just a line. */}
          {cartAmount <= 0 ? (
            <p className="py-16 font-bold text-center text-neutral-dg-blue">
              Your cart is empty.
            </p>
          ) : (
            <>
              <div className="flex justify-between items-center m-6">
                <img
                  src={product1Thumbnail}
                  alt="product image"
                  className="rounded-sm w-[52px] h-[52px]"
                />
                <div className="text-neutral-dg-blue">
                  <p>{name}</p>
                  <p>
                    ${(price - price * (discount / 100)).toFixed(2)} x{" "}
                    {cartAmount}
                    {"\t"}
                    <span className="font-bold text-black">
                      $
                      {(
                        (price - price * (discount / 100)) *
                        cartAmount
                      ).toFixed(2)}
                    </span>
                  </p>
                </div>
                <img
                  src={deleteIcon}
                  alt="delete icon"
                  onClick={() => setCartAmount(0)}
                />
              </div>

              <div className="bg-primary-orange mx-6 py-3 rounded-lg text-center">
                Checkout
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
