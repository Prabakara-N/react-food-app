import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import "./styles/App.css";

// import { FaEdit } from "react-icons/fa";

const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />

      <main className="mt-24 p-8 w-full">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/" element={<CreateContainer />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
