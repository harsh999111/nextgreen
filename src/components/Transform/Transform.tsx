import Image from "next/image";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import Transform1 from "../../../public/Image/Transform.webp"
import { RiMoneyDollarBoxFill } from "react-icons/ri";

const Transform = () => {
  return (
    <section className="pt-8 h-full w-full px-6  lg:px-20 py-6 space-y-6 2xl:px-48">
      <div className="lg:grid lg:grid-cols-2 2xl:grid-cols-[1fr,700px] lg:space-x-10 2xl:space-x-20 ">

        <div className="2xl:pl-16 lg:pl-10">
        <div>
          <h1 className="text-3xl md:pr-10 md:text-4xl">
            Transforming businesses with sustainable solutions
          </h1>
        </div>
        <div className="pt-6">
          <h4 className="text-green-900 md:pr-2">
            NextGreen empowers businesses to achieve their goals while
            minimizing their environmental impact. With our sustainable
            solutions, you can drive growth and contribute to a greener future.
          </h4>
        </div>

        <div className="md:grid md:grid-cols-2">
          <div className="first">
            <div className="pt-6 text-3xl text-green-950">
              <FaArrowTrendUp />
            </div>

            <div className="pt-4">
              <h2 className="text-2xl text-green-950 font-semibold">
                Efficence
              </h2>
            </div>

            <div className="pt-2">
              <h3 className="text-green-900">
                Streamline operations and reduce waste with our innovative and
                eco-friendly software.
              </h3>
            </div>
          </div>

          <div className="second">
            <div className="pt-6 text-3xl text-green-900">
              <RiMoneyDollarBoxFill />
            </div>

            <div className="pt-4">
              <h2 className="text-2xl text-green-950 font-semibold">
                Profitability
              </h2>
            </div>

            <div className="pt-2">
              <h3 className="text-green-900">
                Increase your bottom line while making a positive impact on the
                environment.
              </h3>
            </div>
          </div>
        </div>

        <div className="py-8 flex justify-center md:flex md:justify-start">
          <button className="bg-gray-400 px-[60px] py-3 rounded-2xl">
            Explore our solution
          </button>
        </div>
        </div>


        <div className="hidden lg:block">
            <Image src={Transform1} alt="transform1 " className="grid h-[600px] rounded-2xl w-96 2xl:w-[600px]"/>
        </div>
      </div>
    </section>
  );
};

export default Transform;
