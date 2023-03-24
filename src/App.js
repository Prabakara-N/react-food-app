import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, MainContainer, CreateContainer } from "./components";
import { AnimatePresence } from "framer-motion";

import "./styles/App.css";

// import { FaEdit } from "react-icons/fa";

const App = () => {
  return (
    // <AnimatePresence>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />

      <main className="mt-24 p-8 w-full">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
        </Routes>
      </main>
    </div>
    // </AnimatePresence>
  );
};

export default App;
