import React, { useState } from "react";
import logo from "../assets/img/chicken-grilled-logo.png";
import avatar from "../assets/img/avatar-img.png";
import { motion } from "framer-motion";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
// firebase
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from ".././firebase.config";
import { useStateValue } from "../contexts/StateProvider";
import { actionType } from "../contexts/reducer";
import { type } from "@testing-library/user-event/dist/type";

const Header = () => {
  // onLogin
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  // login
  const logIn = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  // logout
  const logOut = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({ type: actionType.SET_USER, user: null });
  };

  return (
    <header className="w-screen fixed z-50 p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop & tablet */}
      <div className="hidden md:flex h-full w-full items-center justify-between">
        {/* logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 md:w-12 object-cover" />
          <p className="text-headingColor text-xl font-bold"> City</p>
        </Link>
        <div className="flex items-center gap-8">
          {/* menu */}
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
            <li
              className="text-base text-textColor hover:text-headingColor duration-300 transition-all cursor-pointer ease-in-out"
              onClick={() => setIsMenu(false)}
            >
              Home
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor duration-300 transition-all cursor-pointer ease-in-out"
              onClick={() => setIsMenu(false)}
            >
              Menu
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor duration-300 transition-all cursor-pointer ease-in-out"
              onClick={() => setIsMenu(false)}
            >
              About Us
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor duration-300 transition-all cursor-pointer ease-in-out"
              onClick={() => setIsMenu(false)}
            >
              Service
            </li>
          </motion.ul>
          {/* cart img */}
          <div className="relative flex justify-center items-center">
            <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">1</p>
            </div>
          </div>
          {/* avatar img */}
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.7 }}
              src={user ? user.photoURL : avatar}
              alt="profile"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              onClick={logIn}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-100 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 py-2"
              >
                {/* admin only add new item */}
                {user && user.email === "mspk028@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      onClick={() => setIsMenu(false)}
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base rounded-lg"
                    >
                      New Item <MdAdd />{" "}
                    </p>
                  </Link>
                )}

                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base rounded-lg"
                  onClick={logOut}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between w-full h-full md:hidden">
        <div className="relative flex justify-center items-center">
          <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">1</p>
          </div>
        </div>
        {/* logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-10 md:w-12 object-cover rounded-full"
          />
          <p className="text-headingColor text-xl font-bold"> City</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.7 }}
            src={user ? user.photoURL : avatar}
            alt="profile"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            onClick={logIn}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-100 shadow-xl rounded-lg flex flex-col absolute top-12 right-3"
            >
              {/* admin only add new item */}
              {user && user.email === "mspk028@gmail.com" && (
                <Link to={"/createItem"}>
                  <p
                    onClick={() => setIsMenu(false)}
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base rounded-lg"
                  >
                    New Item <MdAdd />{" "}
                  </p>
                </Link>
              )}

              <ul className="flex flex-col">
                <li
                  onClick={() => setIsMenu(false)}
                  className="text-base text-textColor hover:text-headingColor duration-300 transition-all cursor-pointer ease-in-out px-4 py-2 hover:bg-slate-200"
                >
                  Home
                </li>
                <li
                  onClick={() => setIsMenu(false)}
                  className="text-base text-textColor hover:text-headingColor duration-300 transition-all cursor-pointer ease-in-out px-4 py-2 hover:bg-slate-200"
                >
                  Menu
                </li>
                <li
                  onClick={() => setIsMenu(false)}
                  className="text-base text-textColor hover:text-headingColor duration-300 transition-all cursor-pointer ease-in-out px-4 py-2 hover:bg-slate-200"
                >
                  About Us
                </li>
                <li
                  onClick={() => setIsMenu(false)}
                  className="text-base text-textColor hover:text-headingColor duration-300 transition-all cursor-pointer ease-in-out px-4 py-2 hover:bg-slate-200"
                >
                  Service
                </li>
              </ul>

              <p
                className="m-2 shadow-md p-2 flex items-center justify-center bg-slate-200 gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base rounded-lg"
                onClick={logOut}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
