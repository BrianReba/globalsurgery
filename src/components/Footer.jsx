import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo-blanco.png';
import cadit from '../assets/logo-cadit.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  // reusable
  const linkStyle =
    'text-gray-400 hover:text-white transition-colors duration-200 text-sm';
  const contactLinkStyle = `${linkStyle} inline-flex items-center group`;
  const socialIconStyle =
    'text-gray-400 hover:text-white transition-colors duration-200';

  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Grid layout  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10'>
          <div className='md:col-span-2 lg:col-span-1'>
            <Link
              to='/login'
              className='inline-block mb-4'
            >
              <img
                className='h-12 w-auto'
                src={logo}
                alt='Global Surgery Logo'
                width='150'
                height='48'
              />
            </Link>
            <p className='text-sm text-gray-400'>
              Soluciones avanzadas en neurocirugía y cirugía de columna.
            </p>
          </div>

          <div>
            <h4 className='text-white font-semibold mb-4 tracking-wide'>
              Enlaces Rápidos
            </h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/'
                  className={linkStyle}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to='/products'
                  className={linkStyle}
                >
                  Productos
                </Link>
              </li>
              {/* <li>
                <Link
                  to='/services'
                  className={linkStyle}
                >
                  Servicios
                </Link>
              </li> */}
              <li>
                <Link
                  to='/contact'
                  className={linkStyle}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-white font-semibold mb-4 tracking-wide'>
              Contacto
            </h4>
            <ul className='space-y-3'>
              <li>
                <a
                  href='https://wa.me/541135646504'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={contactLinkStyle}
                  aria-label='Contactar Principal por WhatsApp'
                >
                  <FaWhatsapp
                    size={16}
                    className='mr-2 flex-shrink-0 group-hover:text-green-500'
                  />
                  <span>+54 11 3564-6504</span>
                </a>
              </li>
              <li>
                <a
                  href='mailto:ventas@globalsurgery.com.ar'
                  className={contactLinkStyle}
                  aria-label='Enviar correo electrónico'
                >
                  <FaEnvelope
                    size={16}
                    className='mr-2 flex-shrink-0 group-hover:text-cyan-400'
                  />
                  <span>ventas@globalsurgery.com.ar</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-white font-semibold mb-4 tracking-wide'>
              Síguenos
            </h4>
            <a
              href='https://www.instagram.com/globalsurgery.ok/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center'
              aria-label='Visitar nuestro perfil de Instagram'
            >
              <FaInstagram
                size={24}
                className={socialIconStyle}
              />
            </a>
          </div>
        </div>

        <div className='mt-10 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left'>
          <div className='mb-4 sm:mb-0'>
            <p className='text-sm text-gray-500 mb-1'>
              © {currentYear} Global Surgery. Todos los derechos reservados.
            </p>
            <Link
              to='/politicas-terminos'
              className='text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200 underline'
            >
              Políticas y Términos
            </Link>
          </div>
          <a
            href='https://www.cadit.com.ar/socios'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Certificación CADIT'
            className='mt-4 sm:mt-0'
          >
            <img
              src={cadit}
              alt='Certificado CADIT'
              className='h-8 w-auto opacity-70 hover:opacity-100 transition-opacity mx-auto sm:mx-0'
              width='100'
              height='32'
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
