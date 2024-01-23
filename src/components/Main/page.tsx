import Image from "next/image";
import React from "react";
import Green from "../../../public/Image/nature.webp";


const Main = () => {
  return (
    <section className="px-6  lg:px-20 py-6 space-y-6 2xl:px-48">
      <div className="pt-24 md:px-6 2xl:px-20 2xl:gap-4">

        <div className="md:grid md:grid-cols-2 gap-2 2xl:gap-4  ">

        <div className="2xl:pt-14 lg:pt-12" >
          <div >
            <h1 className="lg:text-5xl 2xl:text-6xl 2xl:pr-9">Empowering sustainability through innovation</h1>
          </div>
          <div className="pt-6">
            <span className="text-base 2xl:text-xl">
              Welcome to NextGreen, where we combine sustainability and
              innovation to revolutionize your business.
            </span>
          </div>
            <div className="md:flex md:gap-2">

          <div className="pt-6">
            <button className="bg-green-400 px-[100px] py-3 md:px-10 md:text-sm  md:py-2 rounded-3xl">
              {" "}
              About Us
            </button>
          </div>
          <div className="pt-3 md:pt-5">
            <button className="bg-gray-300 px-[110px] py-3  md:px-10 md:text-base md:py-2  rounded-3xl">
              {" "}
              Pricing
            </button>
          </div>
            </div>
        </div>
        <div className="hidden md:block">
          <Image src={Green} alt="green"  className="grid h-72 w-96 rounded-xl lg:w-full lg:h-80 2xl:h-96"/>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
