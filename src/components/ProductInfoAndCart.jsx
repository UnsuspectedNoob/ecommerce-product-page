import React, { useState } from "react";
import { product } from "../constants";
import { cart, minus, plus } from "../assets/images";

function ProductInfoAndCart({ cartAmount, setCartAmount }) {
  const { company, description, discount, name, price } = product;
  const [chooseAmount, setChooseAmount] = useState(0);

  return (
    <div className="flex flex-col gap-y-4 px-6 py-7 place-self-center max-w-xl">
      <p className="font-bold text-neutral-dg-blue text-xs tracking-widest">
        {company.toUpperCase()}
      </p>
      <p className="font-bold text-3xl md:text-5xl">{name}</p>
      <p className="text-[15px] text-neutral-dg-blue md:mt-4 md:text-[18px]">
        {description}
      </p>

      <div className="flex md:flex-col justify-between items-center md:items-start gap-y-3">
        <div className="flex items-center gap-x-4">
          {/* Discounted Price */}
          <p className="font-bold text-3xl">
            ${(price - price * (discount / 100)).toFixed(2)}
          </p>

          {/* Discount */}
          <p className="bg-neutral-vd-blue px-3 rounded-md font-bold text-white">
            {discount}%
          </p>
        </div>

        <s className="font-bold text-neutral-dg-blue">
          <p>${price.toFixed(2)}</p>
        </s>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] gap-y-4 gap-x-4">
        {/* Set Cart Amount */}
        <div className="flex justify-between items-center bg-neutral-lg-blue px-4 py-3 rounded-lg font-bold">
          <div
            className="hover:opacity-75 cursor-pointer self-stretch flex items-center"
            onClick={() => {
              if (chooseAmount >= 1) setChooseAmount((prev) => prev - 1);
            }}
          >
            <img src={minus} alt="minus" className="" />
          </div>

          <p>{chooseAmount}</p>

          <div
            className="hover:opacity-75 cursor-pointer self-stretch flex items-center"
            onClick={() => setChooseAmount((prev) => prev + 1)}
          >
            <img src={plus} alt="plus" className="" />
          </div>
        </div>

        {/* Add Product to Cart */}
        <button
          className="flex justify-center items-center gap-x-4 bg-primary-orange hover:opacity-75 py-3 rounded-lg w-full text-neutral-vd-blue"
          onClick={() => setCartAmount(cartAmount + chooseAmount)}
        >
          {/* Cart Icon */}
          <svg
            width="22"
            height="20"
            className="fill-neutral-vd-blue scale-[.80]"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fillRule="nonzero"
            />
          </svg>

          <p className="font-bold">Add to cart</p>
        </button>
      </div>
    </div>
  );
}

export default ProductInfoAndCart;
