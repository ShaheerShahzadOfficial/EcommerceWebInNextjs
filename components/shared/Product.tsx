/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import { RiShoppingBag2Fill } from "react-icons/ri";

const Product = ({ item, i }: { item: any; i: any }) => {
  console.log(item)
  return (
    <div className="drop-shadow-xl	 w-72 m-3 rounded-xl pb-4 p-2 self-start items-center justify-center flex flex-col duration-700 bg-white hover:scale-105 hover:transform-gpu">
      <Link
        href={`/product/${i}`}
        className="w-full items-center justify-center flex flex-col "
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-72 mb-3 resize-none  rounded-t-xl"
        />
        <p className="text-lg px-2 w-[90%] text-green-700 text-left font-extrabold my-3">
          {item.name}
        </p>
        <p className="text-sm px-2 w-[90%] text-green-700 text-left font-medium  mb-6">
          {item.description}
        </p>
      </Link>
      <div className="flex lg:flex-row w-[90%] items-center justify-between px-2 flex-col">
        <p className="w-[40%] text-center text-cyan-600 font-bold text-lg md:my-0 my-2 md:text-left">{`$ ${item.price}`}</p>
        <button className="bg-gradient-to-r from-green-400 to-cyan-600 p-2  lg:w-[70%] rounded-sm text-white font-semibold text-sm font-sans flex items-center justify-center w-[100%]">
          <div className="flex mr-2 items-center justify-evenly">
            <MdOutlineAdd />
            <RiShoppingBag2Fill />
          </div>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
