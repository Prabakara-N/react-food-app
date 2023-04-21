import React from "react";

import { UserAuth } from "../contexts/AuthContext";

import { MdSaveAlt } from "react-icons/md";
import { toast } from "react-toastify";

import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

import { db } from "../utils/firebase";
import { useNavigate, useParams } from "react-router-dom";

const AddProfile = () => {
  const {
    user,
    userName,
    setUserName,
    email,
    setEmail,
    number,
    setNumber,
    address,
    setAddress,
    imageAsset,
  } = UserAuth();

  const { id } = useParams();

  const navigate = useNavigate();

  // saving user details
  const saveDetails = async (e) => {
    e.preventDefault();
    if (userName && email && number && address && user?.uid) {
      if (!id) {
        try {
          await addDoc(collection(db, "userInfo"), {
            userName: userName,
            image: imageAsset,
            email: email,
            number: number,
            address: address,
            userId: user.uid,
          });
          toast.success("Profile Added Successfully");
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          await updateDoc(doc(db, "userInfo", id), {
            userName: userName,
            image: imageAsset,
            email: email,
            number: number,
            address: address,
            userId: user.uid,
          });
          toast.success("Profile Updated Successfully");
        } catch (error) {
          console.log(error);
        }
      }
      navigate(`/userinfo`);
    } else {
      toast.error("All fields are mandatory to fill");
    }
  };

  return (
    <div className="bg-slate-800 w-full h-full flex flex-col min-h-screen justify-center items-center text-white">
      <div className="p-6 rounded-lg bg-slate-900/30 w-[95%] sm:w-[450px]">
        <form onSubmit={saveDetails} className="flex flex-col gap-y-8">
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="py-3 capitalize rounded pl-3 bg-slate-700"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 rounded pl-3 bg-slate-700"
            required
          />
          <input
            type="number"
            placeholder="Mobile Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="py-3 rounded pl-3 bg-slate-700"
          />
          <textarea
            type="text"
            placeholder="Address"
            value={address}
            rows={3}
            onChange={(e) => setAddress(e.target.value)}
            className="py-3 rounded pl-3 bg-slate-700"
          />
          <div>
            <button
              type="submit"
              className="bg-blue-700 py-2 px-3 rounded-lg font-medium inline-flex gap-x-2 items-center"
            >
              Save <MdSaveAlt />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProfile;
