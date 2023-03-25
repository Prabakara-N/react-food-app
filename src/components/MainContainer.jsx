import React from "react";
import Delivery from "../assets/img/food-delivery.jpg";

const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>{" "}
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nam
          fugit voluptates error ipsa sint quod iure cupiditate reiciendis
          labore, mollitia earum odio, veritatis obcaecati! Aliquam minus eum
          quod consequatur.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 md:w-auto w-full px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-150 ease-in-out"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 bg-blue-400 "></div>
    </div>
  );
};

export default MainContainer;
