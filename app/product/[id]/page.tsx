"use client";

import { useState } from "react";
import Rating from "@/components/shared/rating";
import { LuPlusCircle, LuMinusCircle } from "react-icons/lu";

const ProductDetail = () => {
  const array = [
    "https://cdn.discordapp.com/attachments/1236035612880932996/1248379001031102574/IMG-20240607-WA0010.jpg?ex=6668104b&is=6666becb&hm=5b97d1ea5e0add745352784be9ff75407192688621401af1cb07108b7c6639f8&",
    "https://images-ext-1.discordapp.net/external/kjXs901RnO44FVohWQpEISPoPTrMFVhHKbevKJtRpj4/https/i.imgur.com/nsHU59n.png?format=webp&quality=lossless&width=1206&height=676",
    "https://cdn.discordapp.com/attachments/1236035612880932996/1248379001031102574/IMG-20240607-WA0010.jpg?ex=6668104b&is=6666becb&hm=5b97d1ea5e0add745352784be9ff75407192688621401af1cb07108b7c6639f8&",
    "https://images-ext-1.discordapp.net/external/gYVFr4qLyOzy-Lpk-mNnJXPLTkt275Y6IKURM0k-l18/https/i.imgur.com/zSMJGEN.jpeg?format=webp&width=1206&height=676",
    "https://cdn.discordapp.com/attachments/1236035612880932996/1248379001031102574/IMG-20240607-WA0010.jpg?ex=6668104b&is=6666becb&hm=5b97d1ea5e0add745352784be9ff75407192688621401af1cb07108b7c6639f8&",

  ];
  const [CurrentImage, setCurrentImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <main className="flex items-center justify-evenly w-full min-h-screen flex-col md:flex-row ">
      <div className="sm:w-[40%] justify-center w-full p-4 items-end flex flex-col">
        <img
          src={array[CurrentImage]}
          alt="Product Name"
          className="w-full h-72 md:w-96 md:h-96"
        />
        <div className="my-3  md:w-96 w-full flex items-center justify-normal overflow-x-auto">
          {array.map((item: string, i: number) => (
            <img
              key={i}
              className="w-24 m-1 h-24 rounded-md cursor-pointer"
              onClick={() => setCurrentImage(i)}
              src={item}
              alt={`Product Image ${i}`}
            />
          ))}
        </div>
      </div>

      <div className="md:w-[50%] w-[90%]">
        <p className="text-4xl  text-green-700 text-left font-extrabold my-3">
          AirPods Max
        </p>

        <p className="text-sm font-bold md:w-[80%] w-full text-green-700 text-left self-center mb-6 ">
          AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim
          delectus, eveniet et beatae deleniti dolorum omnis dolorem nobis
          minima maiores illo voluptate ea voluptatem ad nulla odio nostrum
          repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sapiente optio consequatur fugit odio placeat, laborum excepturi amet
          fuga veniam culpa esse quasi maiores vitae itaque exercitationem ea
          velit mollitia illo.
        </p>

        <Rating />

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:w-96 w-full">
          <div className="flex items-center w-28 justify-between my-2">
            <button
              disabled={quantity === 10}
              onClick={() => setQuantity(quantity + 1)} 
            >
              <LuPlusCircle className="text-cyan-800 text-3xl" />
            </button>

            <span className="text-2xl  text-green-400 font-bold">{quantity}</span>

            <button
              disabled={quantity === 1}
              onClick={() => setQuantity(quantity - 1)}
            >
              <LuMinusCircle className="text-cyan-800 text-3xl" />
            </button>
          </div>

          <div className="items-center justify-between flex-col my-10">
            <button className="bg-gradient-to-r from-green-400 to-cyan-600 p-2  rounded-sm text-white font-semibold text-sm font-sans flex items-center justify-center w-60">
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
