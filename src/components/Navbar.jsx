import React, { useState } from "react";
import { avatar, cart, logo, menu, close } from "../assets/images";
import { links } from "../constants";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex justify-between items-center p-6 pt-5">
      <div className="flex items-center gap-x-4">
        <img
          src={!menuOpen ? menu : close}
          alt="menu button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-30"
        />
        <img src={logo} alt="site logo sneakers" />
      </div>

      <div className="flex items-center gap-x-5">
        <img src={cart} alt="cart button" />
        <img src={avatar} alt="Profile icon" className="w-6" />
      </div>

      {/* Translucent Black Background */}
      <div
        className={`top-0 left-0 fixed bg-black ${
          menuOpen ? "opacity-75 z-10" : "opacity-0 -z-10"
        } w-screen h-screen transition`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`top-0 left-0 z-20 fixed flex flex-col gap-y-5 bg-white transition ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } pt-24 pl-6  w-2/3 h-screen font-bold text-lg`}
      >
        {links.map((link) => (
          <a href="#">{link}</a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
