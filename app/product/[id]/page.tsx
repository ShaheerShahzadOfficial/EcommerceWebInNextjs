"use client";

import { useState } from "react";

const ProductDetail = () => {
  const array = [
    "https://media.discordapp.net/attachments/1236035612880932996/1248379001031102574/IMG-20240607-WA0010.jpg?ex=6663730b&is=6662218b&hm=c71ee0c044b1eeeae1c5abf9079e3a3d9504deea2b5c71eed9dc216dc0621888&=&format=webp&width=676&height=676",
    "https://images-ext-1.discordapp.net/external/kjXs901RnO44FVohWQpEISPoPTrMFVhHKbevKJtRpj4/https/i.imgur.com/nsHU59n.png?format=webp&quality=lossless&width=1206&height=676",
    "https://images-ext-1.discordapp.net/external/gYVFr4qLyOzy-Lpk-mNnJXPLTkt275Y6IKURM0k-l18/https/i.imgur.com/zSMJGEN.jpeg?format=webp&width=1206&height=676",
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
              className="w-24 m-1 h-24 rounded-md cursor-pointer"
              onClick={() => setCurrentImage(i)}
              src={item}
              alt={`Product Image ${i}`}
            />
          ))}
        </div>
      </div>

      <div className="md:w-[50%] w-[90%]">
        <p className="text-4xl px-2 text-cyan-400 text-left font-extrabold my-3">
          AirPods Max
        </p>

        <p className="text-sm md:w-[80%] w-full text-cyan-400 text-left self-center font-medium  mb-6 ">
          {
            "AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience."
          }
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim
          delectus, eveniet et beatae deleniti dolorum omnis dolorem nobis
          minima maiores illo voluptate ea voluptatem ad nulla odio nostrum
          repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sapiente optio consequatur fugit odio placeat, laborum excepturi amet
          fuga veniam culpa esse quasi maiores vitae itaque exercitationem ea
          velit mollitia illo.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:w-96 w-full">
          <div className="flex items-center w-32 justify-between my-2">
            <button
              className="rounded-full bg-cyan-600 text-white text-xl w-8 h-8 items-center text-center"
              disabled={quantity === 10}
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
            <span className="text-xl text-cyan-500 font-bold">{quantity}</span>
            <button
              className="rounded-full bg-green-400 text-white text-2xl w-8 h-8 items-center text-center"
              disabled={quantity === 1}
              onClick={() => setQuantity(quantity - 1)}
            >
              -
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
