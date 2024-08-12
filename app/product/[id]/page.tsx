"use client";

import { useState } from "react";
import { LuPlusCircle, LuMinusCircle } from "react-icons/lu";
import ProductRating from "@/components/shared/ProductRating";
import ReactStars from "react-stars";
import Link from "next/link";
import { MdOutlineAdd } from "react-icons/md";
import { RiShoppingBag2Fill } from "react-icons/ri";

const ProductDetail = () => {
  const array = [
    "https://cdn.discordapp.com/attachments/1236035612880932996/1248379001031102574/IMG-20240607-WA0010.jpg?ex=6668104b&is=6666becb&hm=5b97d1ea5e0add745352784be9ff75407192688621401af1cb07108b7c6639f8&",
    "https://images-ext-1.discordapp.net/external/kjXs901RnO44FVohWQpEISPoPTrMFVhHKbevKJtRpj4/https/i.imgur.com/nsHU59n.png?format=webp&quality=lossless&width=1206&height=676",
    "https://cdn.discordapp.com/attachments/1236035612880932996/1248379001031102574/IMG-20240607-WA0010.jpg?ex=6668104b&is=6666becb&hm=5b97d1ea5e0add745352784be9ff75407192688621401af1cb07108b7c6639f8&",
    "https://images-ext-1.discordapp.net/external/gYVFr4qLyOzy-Lpk-mNnJXPLTkt275Y6IKURM0k-l18/https/i.imgur.com/zSMJGEN.jpeg?format=webp&width=1206&height=676",
    "https://cdn.discordapp.com/attachments/1236035612880932996/1248379001031102574/IMG-20240607-WA0010.jpg?ex=6668104b&is=6666becb&hm=5b97d1ea5e0add745352784be9ff75407192688621401af1cb07108b7c6639f8&",
  ];

  const review = [
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xKaQDRmiaG94pbm-BCrgPSZRksQ_BSGxmY3qGxEPI_DYyVLB2QpDM02N81rto21mths&usqp=CAU",
      name: "Sam",
      rating: 5,
      feedBack:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro impedit reiciendis nulla sunt eligendi non dolores ex voluptas similique recusandae quam eveniet autem optio vitae unde sequi saepe, quasi blanditiis!",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQUXqMrzrmkxd3QpxGL5bzgxELsztrL1AgQ&s",
      name: "Alex Bliss",
      rating: 4,
      feedBack:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro impedit reiciendis nulla sunt eligendi non dolores ex voluptas similique recusandae quam eveniet autem optio vitae unde sequi saepe, quasi blanditiis!",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xKaQDRmiaG94pbm-BCrgPSZRksQ_BSGxmY3qGxEPI_DYyVLB2QpDM02N81rto21mths&usqp=CAU",
      name: "justin",
      rating: 3,
      feedBack:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro impedit reiciendis nulla sunt eligendi non dolores ex voluptas similique recusandae quam eveniet autem optio vitae unde sequi saepe, quasi blanditiis!",
    },
  ];

  const ProductArray = new Array(4).fill({
    name: "AirPods Max",
    img: "https://cdn.discordapp.com/attachments/1236035612880932996/1248379001031102574/IMG-20240607-WA0010.jpg?ex=6668104b&is=6666becb&hm=5b97d1ea5e0add745352784be9ff75407192688621401af1cb07108b7c6639f8&",
    price: 1000,
    description:
      "AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience.",
  });
  const [CurrentImage, setCurrentImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <main className="w-full min-h-full">
      <section className="flex items-center justify-evenly w-full min-h-[50%] flex-col md:flex-row ">
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

          <p className="text-sm font-medium md:w-[80%] w-full text-green-700  text-justify self-center mb-6 ">
            AirPods Max combine high-fidelity audio with industry-leading Active
            Noise Cancellation to deliver an unparalleled listening experience.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            enim delectus, eveniet et beatae deleniti dolorum omnis dolorem
            nobis minima maiores illo voluptate ea voluptatem ad nulla odio
            nostrum repudiandae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sapiente optio consequatur fugit odio placeat,
            laborum excepturi amet fuga veniam culpa esse quasi maiores vitae
            itaque exercitationem ea velit mollitia illo.
          </p>

          <ProductRating className="justify-center sm:justify-normal sm:items-center flex flex-row-reverse sm:w-[8.6rem] sm:self-start w-full sm:inline-block" />

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:w-96 w-full">
            <div className="flex self-center items-center w-36 justify-between my-2">
              <button
                disabled={quantity === 10}
                onClick={() => setQuantity(quantity + 1)}
              >
                <LuPlusCircle className="text-cyan-800 text-3xl" />
              </button>

              <span className="text-2xl  text-green-400 font-bold">
                {quantity}
              </span>

              <button
                disabled={quantity === 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <LuMinusCircle className="text-cyan-800 text-3xl" />
              </button>
            </div>

            <div className="items-center justify-center flex flex-col my-10 w-full">
              <button className="bg-gradient-to-r from-green-400 to-cyan-600 p-2  rounded-sm text-white font-semibold text-sm font-sans flex items-center justify-center sm:w-60 w-4/5">
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center w-full flex-col ">
        <div className="flex flex-wrap flex-grow  w-[90%] justify-between  self-center items-center">
          <h1 className="sm:text-2xl text-lg text-cyan-500 font-bold py-10">
            Customer Reviews
          </h1>

          <button className="bg-gradient-to-r from-green-400 to-cyan-600 hover:bg-gradient-to-l hover:duration-1000 text-white p-2 text-sm rounded-sm self-center">
            Write Review
          </button>
        </div>

        <div className="flex flex-row justify-center items-center sm:w-[90%] w-full">
          <div className="flex overflow-x-auto overflow-y-visible w-full items-center">
            {review.map((item, i) => (
              <div
                key={i}
                className="drop-shadow-lg	m-4 min-w-72 max-w-72 rounded-xl pb-4 p-2 items-center justify-center flex flex-col duration-700 bg-white hover:scale-105 hover:transform-gpu"
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-20 h-20 mb-3 resize-none  rounded-full"
                />
                <p className="text-sm px-2 w-[90%] text-green-700 text-center font-extrabold mt-3">
                  {item.name}
                </p>

                <div className="my-2">
                  <ReactStars
                    count={5}
                    value={item.rating}
                    edit={false}
                    size={26}
                    color1="#ccc"
                    color2="#15803d"
                  />
                </div>

                <p className="text-sm px-2 w-[90%] text-green-700 text-left font-medium  mb-6">
                  {item.feedBack}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex items-center w-full flex-col ">
        <h1 className="sm:text-2xl text-lg text-left text-cyan-500 font-bold py-10 w-[90%]">
          Related Products
        </h1>

        <div className="flex flex-row justify-center items-center sm:w-[90%] w-full">
          <div className="flex overflow-x-auto overflow-y-clip w-full items-center justify-center">
            {ProductArray.map((item, i) => (
              <div
                key={i}
                className="drop-shadow-lg min-w-72  max-w-72 m-3 rounded-xl pb-4 p-2 self-start items-center justify-center flex flex-col duration-700 bg-white hover:scale-105 hover:transform-gpu"
              >
                <Link
                  href={`/product/${i}`}
                  className="w-full items-center justify-center flex flex-col "
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-72 mb-3  resize-none  rounded-t-xl"
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
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
