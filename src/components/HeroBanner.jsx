import React from 'react';
import { Link } from 'react-router-dom';
import primeraImagen from '../assets/img1.jpg';
import logoGlobalSurgery from '../assets/logo-global-surgery.png';

const HeroBanner = () => {
  return (
    <div className='w-full pt-16'>
      {/* pt-16 para mobile */}
      <div
        className='relative w-full h-[600px] sm:h-[550px] lg:h-[600px] bg-cover bg-center'
        style={{ backgroundImage: `url(${primeraImagen})` }}
      >
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/30 to-teal-800/20'></div>
        <div className='absolute bottom-6 right-6 z-5 opacity-25 hover:opacity-50 transition-opacity duration-300'>
          <img
            src={logoGlobalSurgery}
            alt='Global Surgery'
            className='h-12 w-auto sm:h-16 lg:h-20 filter brightness-0 invert'
          />
        </div>
        <div className='relative h-full flex flex-col items-center justify-start pt-8 sm:justify-center text-center px-4 sm:px-6 md:px-8 z-10'>
          <h2 className='text-xl sm:text-3xl lg:text-3xl font-medium text-white/90 font-poppins mb-1 sm:mb-2 mt-2 drop-shadow-lg animate-fade-in-up'>
            Especialistas en
          </h2>
          <h1 className='font-playfair text-3xl sm:text-5xl lg:text-6xl text-white/90 font-semibold mb-8 drop-shadow-lg animate-fade-in-up animation-delay-200'>
            Columna y Neurocirugía
          </h1>
          {/* Tarjetas de valores minimalistas */}
          <div className='flex flex-col gap-4 sm:gap-6 w-full max-w-md sm:max-w-4xl mx-auto'>
            {[
              {
                title: 'Excelencia',
                desc: 'Buscamos la perfección en cada solución médica',
                direction: 'left',
              },
              {
                title: 'Innovación',
                desc: 'Tecnología de vanguardia para mejores resultados',
                direction: 'right',
              },
              {
                title: 'Bienestar',
                desc: 'Compromiso con la salud y calidad de vida',
                direction: 'left',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={` bg-cyan-900/30 border-cyan-400/50 hover:bg-cyan-800/80 hover:border-cyan-300/80 backdrop-blur-md p-4 rounded-lg shadow-xl border  transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slide-in-${item.direction}`}
                style={{
                  animationDelay: `${(index + 1) * 150 + 600}ms`,
                  animationFillMode: 'both',
                }}
              >
                <h3 className='text-white/90 font-playfair text-xl font-medium mb-1 drop-shadow-md'>
                  {item.title}
                </h3>
                <p className='text-cyan-100 font-poppins text-base drop-shadow-sm'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <Link
            to='/certificados'
            className='mt-8 mb-5 bg-cyan-700 hover:bg-cyan-800 text-white font-poppins font-medium py-3 px-8 rounded-lg shadow-lg transition-all duration-300 w-full max-w-md sm:w-auto drop-shadow-lg hover:scale-105 animate-fade-in-up animation-delay-1800'
          >
            Conoce nuestros Certificados
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
