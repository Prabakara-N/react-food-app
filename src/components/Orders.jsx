import React from "react";
import { useStateValue } from "../contexts/StateProvider";

const Orders = () => {
  // const { cart, total } = useContext(CartContext);
  const [{ cartItems, modalShow }, dispatch] = useStateValue();
  return (
    <>
      <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
        <div className="pt-12 md:pt-0 2xl:ps-4">
          <h2 className="text-xl font-bold">Order Summary</h2>
          <div className="mt-8">
            {cartItems.map((item) => {
              return (
                <div key={item.id} className="flex flex-col space-y-4">
                  <div className="flex space-x-4 mb-2">
                    <div>
                      <img
                        src={item.image}
                        alt="cart-product"
                        className="w-[100px]"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{item.title}</h2>
                      <span className="text-red-600 font-semibold">
                        Price :{" "}
                      </span>{" "}
                      $ {item.price}
                      <p className="text-sm">
                        Qty :{" "}
                        <span className="font-semibold">{item.amount}</span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex p-4 mt-4 border-b border-gray-300">
            <h2 className="text-xl font-bold">ITEMS ({cartItems.length})</h2>
          </div>
          <div className="flex items-center w-full py-4 text-sm font-semibold lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
            {/* Subtotal : <span className="ml-2">$ {total}</span> */}
          </div>
          <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
            Shipping Tax : <span className="ml-2">$ 10</span>
          </div>
          <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
            {/* Total : <span className="ml-2">$ {total + 10}</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
