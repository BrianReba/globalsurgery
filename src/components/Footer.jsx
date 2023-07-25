import React from "react";
import logoBlanco from "../assets/logo-blanco.png";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-black py-6 px-10 flex flex-col w-full sm:flex sm:flex-row sm:w-full">
      <div className="flex py-2 mx-auto w-[150px] border-b-2 border-gray-400 border-solid sm:border-b-0 sm:border-r-2 sm:border-gray-400 sm:border-solid sm:px-2 sm:w-1/2">
        <img
          className="w-full h-full sm:w-[150px] mx-auto md:w-[170px]"
          src={logoBlanco}
          alt="Logo"
        />
      </div>
      <div className="pt-4 sm:pt-0 sm:w-1/2 sm:flex sm:flex-col sm:justify-center sm:gap-2">
        <p className="text-white text-center text-sm lg:text-md">
          <ImWhatsapp className="inline-block mr-1" />
          +54 11 3564 6504
        </p>
        <p className="text-white text-center text-sm lg:text-md">
          <ImWhatsapp className="inline-block mr-1" />
          +54 11 3597 2220
        </p>
        <p className="text-sky-200 text-center text-sm underline lg:text-md">
          ventas@globalsurgery.com.ar
        </p>
      </div>
    </div>
  );
};

export default Footer;
