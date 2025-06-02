import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-global-surgery.png';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detector de scroll para cambiar visibilidad de enlaces y logo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Close mobile menu if open after clicking a link
    setIsMenuOpen(false);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-md transition-all duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link
              to='/'
              onClick={handleScrollToTop}
            >
              <img
                className='h-14 sm:h-[4.5rem] w-auto transition-all'
                src={logo}
                alt='Global Surgery Logo'
              />
            </Link>
          </div>

          {/* Menú Desktop con visibilidad condicional */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              to='/'
              onClick={handleScrollToTop}
              className={`font-poppins font-medium text-gray-900 hover:text-red-700 transition-all duration-300 ${
                isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              Inicio
            </Link>
            <Link
              to='/products'
              className={`font-poppins font-medium text-gray-900 hover:text-red-700 transition-all duration-300 ${
                isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              Productos
            </Link>
            <Link
              to='/certificados'
              className={`font-poppins font-medium text-gray-900 hover:text-red-700 transition-all duration-300 ${
                isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              Certificados
            </Link>
            <Link
              to='/contact'
              className='font-poppins bg-cyan-800 hover:bg-cyan-900 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300'
            >
              Contactar
            </Link>
          </div>

          {/* Botón Mobile Menu */}
          <div className='md:hidden flex items-center'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-red-700'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className='sr-only'>Abrir menú</span>
              {/* Icono hamburguesa */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              {/* Icono X */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-white shadow-lg absolute w-full`}
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <Link
            to='/'
            className='font-poppins text-gray-900 hover:text-red-700 block px-3 py-2 text-base font-medium border-b border-gray-200'
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to='/products'
            className='font-poppins text-gray-900 hover:text-red-700 block px-3 py-2 text-base font-medium border-b border-gray-200'
            onClick={() => setIsMenuOpen(false)}
          >
            Productos
          </Link>
          <Link
            to='/certificados'
            className='font-poppins text-gray-900 hover:text-red-700 block px-3 py-2 text-base font-medium border-b border-gray-200'
            onClick={() => setIsMenuOpen(false)}
          >
            Certificados
          </Link>
          <Link
            to='/contact'
            className='font-poppins bg-cyan-800 hover:bg-cyan-900 text-white block px-3 py-2 text-base font-medium rounded-lg mx-3 my-2 text-center'
            onClick={() => setIsMenuOpen(false)}
          >
            Contactar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
