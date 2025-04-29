import React from 'react';
import { Link } from 'react-router-dom';
import primeraImagen from '../assets/img1.jpg';

const HeroBanner = () => {
  return (
    <div className='w-full pt-16'>
      {' '}
      {/*  pt-16 para mobile */}
      <div
        className='relative w-full h-[600px] sm:h-[550px] lg:h-[600px] bg-cover bg-center'
        style={{ backgroundImage: `url(${primeraImagen})` }}
      >
        {/* Overlay oscuro */}
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>

        {/* Contenido principal centrado - ajustado para móviles */}
        <div className='relative h-full flex flex-col items-center justify-start pt-8 sm:justify-center text-center px-4 sm:px-6 md:px-8 z-10'>
          {/* Título principal con más espacio superior en móvil */}
          <h2 className='text-xl sm:text-3xl lg:text-4xl font-medium text-white font-poppins mb-1 sm:mb-2 mt-2'>
            Especialistas en
          </h2>
          <h1 className='font-playfair text-3xl sm:text-5xl lg:text-6xl text-white font-bold mb-6'>
            Neurocirugía y Columna
          </h1>

          {/* Tarjetas de valores - más compactas en móvil */}
          <div className='flex flex-col gap-3 sm:gap-6 w-full max-w-md sm:max-w-4xl mx-auto'>
            {[
              {
                title: 'Excelencia',
                desc: 'Buscamos la perfección en cada solución médica',
              },
              {
                title: 'Innovación',
                desc: 'Tecnología de vanguardia para mejores resultados',
              },
              {
                title: 'Bienestar',
                desc: 'Compromiso con la salud y calidad de vida',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='bg-black bg-opacity-30 backdrop-blur-sm p-3 rounded-lg shadow-lg'
              >
                <h3 className='font-playfair text-yellow-400 text-lg font-semibold mb-1'>
                  {item.title}
                </h3>
                <p className='text-white font-poppins text-sm'>{item.desc}</p>
              </div>
            ))}
          </div>
          <Link
            to='/services'
            from-cyan-700
            to-cyan-800from-cyan-700
            to-cyan-800
            className='mt-5 mb-5 bg-cyan-800 hover:bg-cyan-900 text-white font-poppins font-medium py-2 px-6 rounded-lg shadow-lg transition-all duration-300 w-full max-w-md sm:w-auto'
          >
            Conocer nuestros servicios
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
