import React from "react";
import { useStateValue } from "../contexts/StateProvider";

const OrderedProduct = () => {
  const [{ orders }] = useStateValue();
  return (
    <>
      <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
          Customer’s Cart
        </p>
        {orders.map((item) => {
          return (
            <div
              key={item.id}
              className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full shadow-md md:shadow-none"
            >
              <div className="pb-4 md:pb-8 w-full md:w-40">
                <img
                  className="w-full hidden md:block"
                  src={item.imageURL}
                  alt="ordered-img"
                />
                <img
                  className="w-36 mx-auto md:hidden"
                  src={item.imageURL}
                  alt="ordered-img"
                />
              </div>
              <div className="border-b px-4 md:px-0 border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-base xl:text-lg leading-6">
                    $ {item.price}
                  </p>
                  <p className="text-base xl:text-lg leading-6 text-gray-800">
                    {item.qty}
                  </p>
                  <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                    $ {item.price * item.qty}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OrderedProduct;
