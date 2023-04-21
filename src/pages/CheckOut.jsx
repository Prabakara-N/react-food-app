import React, { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import Orders from "../components/Orders";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import Modal from "../components/Modal";

const Checkout = ({ form, setForm }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <>
      <ToastContainer
        position="top-right"
        pauseOnHover={false}
        transition={Slide}
      />
      <Modal isModalOpen={isModalOpen} setisModalOpen={setisModalOpen} />
      <div className="relative">
        <Link to={"/"}>
          <div
            onClick={() => setisModalOpen(false)}
            className="absolute p-[2px] sm:p-1 bottom-6 md:bottom-0 md:left-12 left-3 rounded-full hover:bg-slate-900/20 transition-all duration-300 cursor-pointer"
          >
            <MdKeyboardBackspace className="text-2xl md:text-3xl" />
          </div>
        </Link>
        <h1 className="flex items-center justify-center font-bold text-gray-800 text-md lg:text-3xl">
          Checkout
        </h1>
      </div>
      <div className="container p-6 md:p-12 mx-auto">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
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
