import React from "react";
import Image from "next/image";
import img from "../Image/image.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative h-screen flex justify-start items-center h-dvh">
      <Image
        src={img}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        width={400}
        height={400}
      />

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="text-white md:w-1/2 text-center lg:text-start flex flex-col justify-center  items-center lg:items-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
            The best way to predict the future is to create it.
          </h1>
          <p className="text-md font-light md:text-xl text-gray-200 mb-6">
            Inspiring quotes make a difference in peoples lives, giving them a
            new perspective and the courage to move forward.
          </p>
           
          <Link href='/isr'>

            <button className="flex
             items-center  w-auto gap-2 px-6 py-3 bg-blue-900 hover:bg-black text-white rounded-full shadow-lg transition duration-300 ">
              Get a Quote
              <FaLongArrowAltRight />
            </button>
            </Link>
          </div>
        </div>
    </section>
  );
}

export default Hero;
