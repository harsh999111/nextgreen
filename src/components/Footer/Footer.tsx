import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="h-full w-full  pt-10">
      <div className="main">
        <div className="bg-green-800 py-10 px-4 rounded-t-xl ">
            <div className="lg:grid lg:grid-cols-2 2xl:px-20">

            <div className="">

          <form className="bg-green-400 grid justify-center py-10 rounded-xl relative bottom-20 ">
            <div>
              <h3 className="text-green-800 text-center text-2xl">
                Talk to a consultant
              </h3>
            </div>

            <div className="grid justify-center space-y-3 py-2">
                <div className="space-y-3 md:flex md:space-y-0 md:space-x-3">

              <div>
                <label htmlFor="name">
                  <input
                    type="text"
                    className="p-2 w-full rounded-lg"
                    placeholder="First Name"
                    id="name"
                  ></input>
                </label>
              </div>
              <div>
                <label htmlFor="name">
                  <input
                    type="text"
                    className="p-2 w-full rounded-lg"
                    placeholder="Surname"
                    id="name"
                  ></input>
                </label>
              </div>
                </div>
              <div>

              <label htmlFor="email">
                <input
                  type="email"
                  className="p-2 w-full rounded-lg"
                  placeholder="Work Email"
                  id="name"
                ></input>
              </label>
              </div>
              <div>

              <label htmlFor="number">
                <input
                  type="text"
                  className="p-2 w-full rounded-lg"
                  placeholder="Phone Number"
                  id="name"
                ></input>
              </label>
              </div>
              <div>

              <label htmlFor="name">
                <input
                  type="text"
                  className="p-2 w-full rounded-lg"
                  placeholder="Company Name"
                  id="name"
                ></input>
              </label>
              </div>
            </div>

            <div className="grid justify-center pt-4">
              <button className="bg-green-800 px-14 text-white py-3">
                Book Demo
              </button>
            </div>
          </form>
            </div>
          <div>

          <div className="secon main py-2 ">
            <div className="grid justify-center">
              <h3 className="text-2xl text-white">
                Next <span className="text-green-600">Green</span>
              </h3>
            </div>
            <div className="text-center py-6 text-white space-y-7 md:grid md:grid-cols-3 md:space-y-0">
                <div>

              <ul className="space-y-2">
                Pages
                <li className="text-sm">Service</li>
                <li className="text-sm">About Us</li>
                <li className="text-sm">Contact Us</li>
                <li className="text-sm">Blog</li>
              </ul>
                </div>
                <div>

              <ul className="space-y-2">
                Resource
                <li className="text-sm">Faq</li>
                <li className="text-sm">Utility Page</li>
                <li className="text-sm">Terms Of use</li>
                <li className="text-sm">Licence</li>
                <li className="text-sm">Cookie Police</li>
              </ul>
                </div>
                <div>

              <ul className="space-y-2">
                Follow Us
                <li className="text-sm">Facebook</li>
                <li className="text-sm">Twitter</li>
                <li className="text-sm">Instagram</li>
                <li className="text-sm">Youtube</li>
              </ul>
                </div>

            </div>
          </div>
          </div>
            </div>
          <hr />
          <div className="py-2 pt-7">
            <div className="md:flex md:justify-between 2xl:px-28">

            <div>

            <h3 className="text-white text-center space-y-3">
              Design By{" "}
              <Link href="/" className="text-green-500">
                DesignFlovour
              </Link>
              Powered by{" "}
              <Link href="/" className="text-green-500">
                Webflow
              </Link>
            </h3>
            </div>
            <div className="">

            <h3 className="text-white text-center">
              @ 2024 NextGreen. All rights reserved
            </h3>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
