import Image from "next/image";
import React from "react";
import Feature from '../../../public/About/Feature.webp'

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-green-900 md:w-10 md:h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
        />
      </svg>
    ),
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, earum.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-green-900 md:w-10 md:h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, earum.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-green-900 md:w-10 md:h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
        />
      </svg>
    ),
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, earum.",
  },
];

const AboutFeature = () => {
  return (
    <section className="h-full w-full px-4 py-10  md:px-10 2xl:px-60 ">
        <div className="lg:grid lg:grid-cols-2 lg:space-x-3">

      <div>
        <div>
          <div>
            <h2 className="text-3xl pr-10 font-bold text-green-900 md:text-4xl md:pr-20">
              The features that your company need to grow
            </h2>
          </div>
          <div className="py-8">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              suscipit quidem ducimus eaque qui nam laudantium rem provident?
            </p>
          </div>
        </div>
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex space-x-4">
              <div className="">{feature.icon}</div>
              <div>{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="hidden lg:block">
            <Image src={Feature} alt="Feature" className=" rounded-lg lg:grid lg:w-[500px]"/>
        </div>
      </div>
        </div>
    </section>
  );
};

export default AboutFeature;
