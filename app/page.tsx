"use client";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { MdOutlineAdd } from "react-icons/md";

const Home = () => {
  const array = new Array(10).fill({
    name: "AirPods Max",
    img: "https://media.discordapp.net/attachments/1236035612880932996/1248379001031102574/IMG-20240607-WA0010.jpg?ex=6663730b&is=6662218b&hm=c71ee0c044b1eeeae1c5abf9079e3a3d9504deea2b5c71eed9dc216dc0621888&=&format=webp&width=676&height=676",
    price: 1000,
    description:
      "AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience.",
  });

  console.log(array);
  return (
    <main className="flex items-center justify-center w-full min-h-full bg-green-100">
      <div className="flex flex-row flex-wrap w-full p-4 items-center justify-normal">
        {array.map((item, i) => (
          <div
            key={i}
            className="drop-shadow-xl	 w-80 m-6 rounded-xl pb-4 items-center justify-center flex flex-col duration-700 bg-white hover:-translate-y-6"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-80 mb-3  resize-none  rounded-t-xl"
            />
            <p className="text-lg px-2 w-[90%] text-green-800 text-left font-extrabold  my-3">
              {item.name}
            </p>
            <p className="text-sm px-2 w-[90%] text-green-800 text-left font-medium  mb-6">
              {item.description}
            </p>
            <div className="flex w-[90%] items-center justify-between px-2">
              <p className="w-[40%] text-left text-green-600 font-semibold text-lg">{`$ ${item.price}`}</p>
              <button className="bg-gradient-to-r from-green-400 to-[#b9e645] p-2 w-[60%] rounded-sm text-black font-semibold text-sm font-sans flex  items-center justify-center">
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
