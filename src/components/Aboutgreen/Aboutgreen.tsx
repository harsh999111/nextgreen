import Image from "next/image";
import React from "react";
import About from "../../../public/About/About.webp";
import About1 from "../../../public/About/About1.webp";
import About2 from "../../../public/About/About2.webp";
import About3 from "../../../public/About/About3.webp";
import About4 from "../../../public/About/About4.webp";

const ABoutgreen = () => {
  return (
    <section className="h-full w-full pt-40 py-20 2xl:px-60 2xl:py-40">
      <div>
        <div className="text-center">
          <h3 className="text-green-950 text-4xl font-bold 2xl:text-6xl">About Us</h3>
        </div>
        <div className="text-center py-4 px-3 2xl:text-2xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            perferendis vitae dolore veniam rem mollitia voluptatum.
          </p>
        </div>
        <div>
          <div className="md:grid md:grid-cols-2 2xl:space-x-10">
            <div className="flex justify-center ">
              <Image src={About} alt="about" className="grid w-72 rounded-xl lg:w-96 2xl:w-[600px] cursor-pointer" />
            </div>

            <div className="hidden md:block space-y-3 2xl:space-y-10">
              <div className="md:flex md:space-x-4">
                <div>
                  <Image
                    src={About1}
                    alt="About"
                    className="grid w-40 rounded-xl lg:w-48  2xl:w-80 cursor-pointer"
                  />
                </div>
                <div>
                  <Image
                    src={About2}
                    alt="About"
                    className="grid w-40 rounded-xl lg:w-48 2xl:w-80 cursor-pointer"
                  />
                </div>
              </div>
              <div className="md:flex md:space-x-4">
                <div>
                  <Image
                    src={About3}
                    alt="About"
                    className="grid w-40 rounded-xl lg:w-48 2xl:w-80 cursor-pointer"
                  />
                </div>
                <div>
                  <Image
                    src={About4}
                    alt="About"
                    className="grid w-40 rounded-xl lg:w-48 2xl:w-80 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ABoutgreen;
