import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-gray-200 flex flex-col">
      <div className="w-full flex justify-center">
        <img className="w-[170px] h-[130px]" src={logo} alt="Logo" />
      </div>

      <div className="bg-black w-full">
        <ul className="flex justify-evenly">
          <li className="p-3 ">
            <Link
              to="/"
              className="font-semibold text-md text-gray-100 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-red-700
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-700 pb-[2px]"
            >
              Inicio
            </Link>
          </li>
          <li className="p-3 ">
            <Link
              to="/products"
              className="font-semibold text-md text-gray-100 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-red-900
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-700 pb-[2px]"
            >
              Productos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
