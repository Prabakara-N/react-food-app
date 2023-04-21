import React, { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import Orders from "../components/Orders";
import Modal from "../components/Modal";

const Checkout = ({ form, setForm }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <>
      <Modal isModalOpen={isModalOpen} setisModalOpen={setisModalOpen} />
      <div className="relative bg-checkout py-20 lg:py-52">
        <h1 className="pl-5 lg:pl-12 font-bold text-white text-md lg:text-4xl">
          Checkout
        </h1>
      </div>
      <div className="container p-6 md:p-12 mx-auto">
        <div className="flex flex-col-reverse gap-8 -mt-16 md:mt-0 w-full px-0 mx-auto md:flex-row">
          <CheckoutForm
            userProfile={form}
            setForm={setForm}
            setisModalOpen={setisModalOpen}
          />
          <Orders />
        </div>
      </div>
    </>
  );
};

export default Checkout;
