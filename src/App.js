import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Header,
  MainContainer,
  CreateContainer,
  Footer,
  MenuContainer,
} from "./components";
import { AnimatePresence } from "framer-motion";
import "./styles/App.css";
import { useStateValue } from "./contexts/StateProvider";
import { getAllFoodItems } from "./utils/firebasefunctions";
import { actionType } from "./contexts/reducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [{ cartShow }, dispatch] = useStateValue();
  console.log(cartShow);

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
          </Routes>
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default App;
