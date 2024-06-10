"use client";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { MdOutlineAdd } from "react-icons/md";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Home = () => {
  const router = useRouter();
  const array = new Array(12).fill({
    name: "AirPods Max",
    img: "https://cdn.discordapp.com/attachments/1236035612880932996/1248379001031102574/IMG-20240607-WA0010.jpg?ex=6668104b&is=6666becb&hm=5b97d1ea5e0add745352784be9ff75407192688621401af1cb07108b7c6639f8&",
    price: 1000,
    description:
      "AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience.",
  });

  return (
    <main className="flex items-center justify-center w-full min-h-full ">
      <div className="flex flex-wrap w-full max-w-full self-center p-4 items-center justify-center">
        {array.map((item, i) => (
          <div
            key={i}
            className="drop-shadow-xl	 w-80 m-5 rounded-xl pb-4 items-center justify-center flex flex-col duration-700 bg-white hover:scale-105 hover:transform-gpu"
          >
            <Link
              href={`/product/${i}`}
              className="w-full items-center justify-center flex flex-col "
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-80 mb-3  resize-none  rounded-t-xl"
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
              <button className="bg-gradient-to-r from-green-400 to-cyan-600 p-2  sm:w-[70%] rounded-sm text-white font-semibold text-sm font-sans flex items-center justify-center w-[100%]">
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
    </main>
  );
};

export default Home;
