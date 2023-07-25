import React from "react";
import mantenimientoImg from "../assets/img-mantenimiento.png";

const Mantenimiento = () => {
  return (
    <div className="bg-violet-900 flex flex-col justify-center items-center h-screen">
      <img className="max-w-[300px] max-h-[300px]" src={mantenimientoImg} />
      <h1 className="text-2xl text-white font-poppins font-bold drop-shadow-2xl">
        Página en construcción
      </h1>
    </div>
  );
};

export default Mantenimiento;
