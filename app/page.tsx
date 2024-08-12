"use client";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { MdOutlineAdd } from "react-icons/md";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Product,
  Footer,
  FooterBanner,
  Layout,
  HeroBanner,
  NavBar,
  Cart,
} from "@/components/shared";
import { Fragment, useEffect, useState } from "react";
import { client } from "@/lib/client";

const Home = () => {
  const [products, setProducts] = useState([])
  const [banners, setBanners] = useState([])

  useEffect(() => {
    (async () => {
      const query = '*[_type === "product"]';
      setProducts(await client.fetch(query))

      const bannerQuery = '*[_type === "banner"]';
      setBanners(await client.fetch(bannerQuery))
    })();
  }, []);

  const router = useRouter();
  const array = new Array(12).fill({
    name: "AirPods Max",
    img: "data:image/jpeg;base64,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",
    price: 1000,
    description:
      "AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience.",
  });

  return (
    <Fragment>
      <HeroBanner />
      <main className="flex items-start justify-center w-full min-h-full ">
        <div className="flex flex-wrap max-w-full justify-center mx-2 my-auto">
          {products.map((item, i) => (
            <Product i={i} item={item} key={i} />
          ))}
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

// export const getServerSideProps = async () => {
//   const query = '*[_type === "product"]';
//   const products = await client.fetch(query);

//   const bannerQuery = '*[_type === "banner"]';
//   const banners = await client.fetch(bannerQuery);

//   return {
//     props: {
//       products,
//       banners,
//     },
//   };
// };
export default Home;
