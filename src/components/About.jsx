import React from "react";
import imagenManos from "../assets/manos.jpg";

const About = () => {
  return (
    <div className="mt-8 max-w-[700px] lg:max-w-[900px] mx-auto mb-10">
      <div className="w-11/12 mx-auto text-center py-8 px-5">
        <h2 className="text-center font-poppins text-3xl font-bold text-gray-900 py-6">
          ¿Quiénes somos?
        </h2>
        <p className="font-poppins text-black text-md">
          ¡Bienvenidos a Global Surgery! Somos una empresa líder en la industria
          dedicada a proporcionar soluciones avanzadas en el campo de la cirugía
          de columna y neurocirugía. Nuestra pasión por la innovación y el
          compromiso con el bienestar de los pacientes nos impulsan a marcar la
          diferencia en el ámbito de la atención médica..
        </p>
      </div>

      <div className="mx-auto w-11/12 px-4 flex flex-col lg:flex lg:flex-row lg:gap-1 lg:w-full shadow-md shadow-gray-700 rounded-md py-5">
        <div className="p-4 bg-gray-900 rounded-md lg:w-1/3">
          <h2 className="text-white text-center font-playfair text-xl py-3 font-semibold">
            Nuestra misión
          </h2>
          <p className="text-white font-poppins text-center text-md">
            Avanzar en la cirugía de columna y neurocirugía mediante la
            provisión de soluciones de vanguardia.
          </p>
        </div>
        <div className="py-3 lg:w-1/3 lg:py-0">
          <img className=" object-cover" src={imagenManos} alt="manos" />
        </div>
        <div className="p-4 bg-gray-900 rounded-md lg:w-1/3">
          <h2 className="text-white text-center font-playfair text-xl py-3 font-semibold">
            Nuestra visión
          </h2>
          <p className="text-white font-poppins text-center text-md">
            Avanzar en el ámbito de la cirugía y marcar un impacto positivo en
            la atención médica
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto text-center py-8 px-5">
        <h2 className="text-center font-poppins text-3xl font-bold text-gray-900 py-6">
          Nuestros valores
        </h2>
        <p className="font-poppins text-black text-md">
          En Global Surgery, nos regimos por valores fundamentales que guían
          cada aspecto de nuestro negocio: innovación constante, calidad
          excepcional, ética profesional y enfoque centrado en el paciente.
          Estos valores nos permiten brindar soluciones superiores y establecer
          relaciones sólidas con nuestros clientes y socios.
        </p>
      </div>
    </div>
  );
};

export default About;
