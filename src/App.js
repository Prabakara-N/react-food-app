import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  MainContainer,
  CreateContainer,
  MenuContainer,
  Error,
  Checkout,
} from "./pages";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./contexts/StateProvider";
import { getAllFoodItems } from "./utils/firebasefunctions";
import { actionType } from "./contexts/reducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  userName: "",
  email: "",
  number: "",
  address: "",
};

const App = () => {
  const [{ cartShow }, dispatch] = useStateValue();
  console.log(cartShow);
  const [form, setForm] = useState(initialState);

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <ToastContainer position="top-center" />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/menu" element={<MenuContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route
              path="/checkout"
              element={<Checkout form={form} setForm={setForm} />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default App;
