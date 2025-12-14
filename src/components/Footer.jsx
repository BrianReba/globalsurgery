import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import logo from '../assets/logo-blanco.png';
// NAVIDAD - Remover después de temporada
import logoMain from '../assets/logo-navidad.svg';
// import cadit from '../assets/logo-cadit.png';
// import pistech from '../assets/pistech-nobg.png';
import MapModal from './MapModal';
// NAVIDAD - Remover después de temporada
import ChristmasStars from './seasonal/ChristmasStars';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const linkStyle =
    'text-gray-400 hover:text-white transition-colors duration-200 text-sm';
  const contactLinkStyle = `${linkStyle} inline-flex items-center group`;
  const socialIconStyle =
    'text-gray-400 hover:text-white transition-colors duration-200';

  const whatsappMessage = encodeURIComponent(
    'Hola Pistech, me comunico a través de la web de global, estoy interesado en sus servicios'
  );

  return (
    <footer className='bg-gray-900 text-gray-300 relative overflow-hidden'>
      {/* NAVIDAD */}
      <ChristmasStars variant="dark" />
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
              Soluciones avanzadas en cirugía de columna y neurocirugía
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
              <li>
                <Link
                  to='/certificados'
                  className={linkStyle}
                >
                  Certificados
                </Link>
              </li>
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
            <ul className='space-y-4'>
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
                  href='tel:541145445527'
                  className={contactLinkStyle}
                  aria-label='Llamar a la oficina'
                >
                  <FaPhone
                    size={16}
                    className='mr-2 flex-shrink-0 group-hover:text-cyan-400'
                  />
                  <span>4544-5527</span>
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
              <li>
                <button
                  onClick={() => setIsMapOpen(true)}
                  className={`${contactLinkStyle} leading-relaxed hover:text-white w-full text-left`}
                  aria-label='Ver ubicación en el mapa'
                >
                  <FaMapMarkerAlt
                    size={16}
                    className='mr-2 mt-0.5 flex-shrink-0 text-gray-400 group-hover:text-white'
                  />
                  <span className='break-words text-sm group-hover:underline'>
                    Av Rivadavia 2431, entrada 1 piso 3 oficina 8
                  </span>
                </button>
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

          <div className='mt-4 sm:mt-0 font-semibold'>
            <a
              href={`https://wa.me/+5491138207230?text=${whatsappMessage}`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Contactar a Pistech por WhatsApp'
              className='flex items-center group'
            >
              <span className='text-xs text-gray-500 mr-1 group-hover:text-gray-300 transition-colors duration-200'>
                Desarrollado por PISTECH
              </span>
              <span className='text-xs text-gray-500  group-hover:text-gray-300 transition-colors duration-200'>
                con ❤️
              </span>
            </a>
          </div>
          {/* <a
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
          </a> */}
        </div>
      </div>

      {/* Sección de cierre con logo */}
      <div className='bg-gradient-to-b from-gray-900 via-gray-600 to-gray-500 py-16 relative overflow-hidden'>
        {/* NAVIDAD */}
        <ChristmasStars variant="section" />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='flex justify-center mb-8'>
            <img
              src={logoMain}
              alt='Global Surgery'
              className='h-60 w-auto opacity-95 hover:opacity-100 transition-opacity duration-300'
            />
          </div>
          <p className='text-gray-200 text-base max-w-2xl mx-auto leading-relaxed font-medium'>
            Comprometidos con la excelencia en cirugía de columna y neurocirugía
          </p>
        </div>
      </div>

      {/* Modal del Mapa */}
      <MapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
      />
    </footer>
  );
};

export default Footer;
