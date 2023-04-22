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
  UserInfo,
  AddProfile,
} from "./pages";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./contexts/StateProvider";
import { getAllFoodItems } from "./utils/firebasefunctions";
import { actionType } from "./contexts/reducer";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase.config";

// user initial state
const initialState = {
  userId: null,
  docId: null,
  userName: "",
  email: "",
  number: "",
  address: "",
  city: "",
};

const App = () => {
  const [{ user, cartItems }, dispatch] = useStateValue();
  const [form, setForm] = useState(initialState);

  // getting all the fooditems
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

  // localstorage set item
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // getting user profile
  const fetchUserDetails = async () => {
    if (user && user?.uid) {
      const q = query(
        collection(db, "userInfo"),
        where("userId", "==", user?.uid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.docs.map((doc) => {
        const userData = doc.data();
        if (userData) {
          setForm({
            ...form,
            docId: doc.id,
            userId: userData.userId,
            number: userData.number,
            address: userData.address,
            city: userData.city,
          });
        }
        return doc.id;
      });
    }
  };

  useEffect(() => {
    fetchUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, user?.uid]);

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header clearData={setForm} />
        <ToastContainer
          position="top-right"
          pauseOnHover={false}
          transition={Slide}
        />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/menu" element={<MenuContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
          <Route
            path="/checkout"
            element={<Checkout form={form} setForm={setForm} />}
          />
          <Route path="/userinfo" element={user && <UserInfo form={form} />} />
          <Route
            path="/addprofile"
            element={user && <AddProfile form={form} setForm={setForm} />}
          />
          <Route
            path="/editprofile/:id"
            element={<AddProfile form={form} setForm={setForm} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default App;
