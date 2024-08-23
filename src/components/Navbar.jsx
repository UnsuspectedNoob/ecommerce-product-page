import React, { useState } from "react";
import {
  avatar,
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
    <>
      {/* Cart Background Exit on Tap */}
      {cartOpen && (
        <div
          className="top-0 left-0 z-[60] fixed bg-transparent w-full min-h-screen"
          onClick={() => setCartOpen(false)}
        />
      )}

      <div className="relative flex justify-between items-center md:px-0 md:py-8 p-6 pt-5 md:border-b-2 md:border-b-neutral-lg-blue">
        <div className="flex items-center gap-x-4 md:gap-x-14">
          <img
            src={!menuOpen ? menu : close}
            alt="menu button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-40 md:hidden"
          />
          {/* Logo */}
          <img src={logo} alt="site logo sneakers" />
          {/* Desktop Links */}
          <div className="md:flex items-center gap-x-8 hidden text-[15px]">
            {links.map((link) => (
              <a
                href="#"
                key={link}
                className="relative text-neutral-dg-blue hover:text-black cursor-pointer group"
              >
                {link}
                <div className="group-hover:block -bottom-[46px] absolute hidden border-t-4 border-t-primary-orange w-full" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-5 md:gap-x-12">
          {/* Cart Button */}
          <div
            className="relative cursor-pointer group"
            onClick={() => setCartOpen((prev) => !prev)}
          >
            <svg
              width="22"
              height="20"
              className="group-hover:fill-black fill-[#69707D]"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fillRule="nonzero"
              />
            </svg>
            {cartAmount <= 0 ? (
              ""
            ) : (
              <p className="-top-[8px] -right-3 absolute bg-primary-orange px-2 py-0 rounded-full text-[12px] text-white">
                {cartAmount}
              </p>
            )}
          </div>
          <div className="place-items-center md:grid rounded-full ring-primary-orange md:hover:ring-2 md:w-[50px] md:h-[50px] cursor-pointer">
            <img src={avatar} alt="Profile icon" className="w-6 md:w-12" />
          </div>
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
          className={`top-20 md:top-[90px] xl:-right-20 right-0 z-[70] absolute px-2 w-full max-w-[380px] ${
            !cartOpen ? "hidden" : "block"
          }`}
        >
          <div className="relative bg-white shadow-2xl pb-[30px] rounded-lg w-full">
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
                    className="mr-1 rounded-md w-[52px] h-[52px]"
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
                    className="cursor-pointer"
                  />
                </div>
                <a href="https://www.google.com">
                  <div className="bg-primary-orange mx-6 py-4 rounded-lg font-bold text-center text-neutral-vd-blue cursor-pointer">
                    Checkout
                  </div>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
