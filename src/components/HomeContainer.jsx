import React from "react";
import Delivery from "../assets/img/food-delivery.jpg";
import HeroBg from "../assets/img/hero-bg.jpg";
import { heropData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-red-100 px-4 py-1 rounded-full">
          <p className="text-base text-red-500 font-semibold">Bike Delivery</p>
          <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.15rem] text-center lg:text-left font-bold tracking-wide text-headingColor">
          Enjoy{" "}
          <span className="text-red-600 text-[3rem] lg:text-[4.5rem]">
            Delicious Food
          </span>{" "}
          At Your Door Step
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          We offer the best online portal that allows customers to order food
          online without visiting the restaurant...
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-red-500 to-red-600 font-medium md:w-auto w-full px-4 py-2 text-white rounded-xl hover:shadow-lg transition-all duration-150 ease-in-out"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          alt="hero-bg"
          className="ml-auto rounded-t-2xl lg:h-650 h-420  w-full lg:w-auto"
        />
        <div className="w-full h-full top-0 left-0 absolute flex items-center lg:px-32 justify-center py-4 gap-4 flex-wrap">
          {heropData &&
            heropData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                >
                  <img
                    src={item.imageSrc}
                    alt="icecream"
                    className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  />
                  <p className="text-base lg:text-xl mt-2 lg:mt-4 font-semibold text-textColor">
                    {item.name}
                  </p>
                  <p className="text-[12px] lg:text-sm text-gray-100 font-semibold lg:my-3 my-1">
                    {item.decp}
                  </p>
                  <p className="font-semibold text-headingColor">
                    {" "}
                    <span className="text-sm text-red-600">$</span> {item.price}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
