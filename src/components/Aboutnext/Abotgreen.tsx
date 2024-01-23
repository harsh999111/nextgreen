import React from "react";
import { MdCelebration } from "react-icons/md";
import { TbCube } from "react-icons/tb";
import { IoIosTimer } from "react-icons/io";
import { MdStyle } from "react-icons/md";

const features = [
  {
    icon: <MdCelebration />,
    title: "Professional design",
    description:
      "NextGreen empowers businesses to achieve their goals while minimizing their environmental impact.",
  },
  {
    icon: <TbCube />,
    title: "Versatility",
    description:
      "NextGreen empowers businesses to achieve their goals while minimizing their environmental impact.",
  },
  {
    icon: <IoIosTimer />,
    title: "Time efficiency",
    description:
      "NextGreen empowers businesses to achieve their goals while minimizing their environmental impact.",
  },
  {
    icon: <MdStyle />,
    title: "Style guide",
    description:
      "NextGreen empowers businesses to achieve their goals while minimizing their environmental impact.",
  },
];

const Abotgreen = () => {
  return (
    <section className="h-full w-full py-10 2xl:px-60 2xl:py-40">
      <div className="px-4 md:px-10 ">
        <div>
          <div className="">
            <h2 className="text-green-900 text-3xl font-bold">
              Why NextGreen template{" "}
            </h2>
          </div>
          <div className="py-4 ">
            <p>
              NextGreen empowers businesses to achieve their goals while
              minimizing their environmental impact. With our sustainable
              solutions, you can drive growth and contribute to a greener
              future.
            </p>
          </div>
        </div>

        <div className="space-y-6 lg:flex lg:space-x-2 lg:space-y-0 ">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <div className="text-3xl text-green-900 md:text-5xl">{feature.icon}</div>
              <div className="font-bold text-green-900 md:text-xl">{feature.title}</div>
              <div>{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Abotgreen;
