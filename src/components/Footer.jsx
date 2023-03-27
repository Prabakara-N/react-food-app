import React from "react";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-slate-700 w-full py-3 -mb-5">
      <div className="container mx-auto">
        <p className="text-white text-center text-sm md:text-base">
          Copyright &copy; React Food App 2023. All rights reserved.
        </p>
      </div>
      <div className="mb-7">
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
