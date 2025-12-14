import React, { useState } from 'react';
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// NAVIDAD - Remover después de temporada
import logo from '../assets/logo-navidad.svg';
import PdfUploadStandalone from '../components/PdfUploadStandalone';
import MapModal from '../components/MapModal';

// Componentes personalizados
import FormStatus from '../components/FormStatus';
import SubmitButton from '../components/SubmitButton';
// NAVIDAD - Remover después de temporada
import ChristmasStars from '../components/seasonal/ChristmasStars';

// Custom hook
import useContactForm from '../hooks/useContactForm';

const ContactPage = () => {
  const { form, isSubmitting, submitStatus, sendEmail } = useContactForm();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

  const contactLinkStyle =
    'inline-flex items-center text-gray-600 hover:text-cyan-700 transition-colors duration-200 group text-sm';

  return (
    <div className='bg-gradient-to-br from-gray-50 to-blue-50 min-h-[calc(100vh-64px)] py-20 px-4 sm:px-6 lg:px-8 mt-16 relative overflow-hidden'>
      {/* NAVIDAD */}
      <ChristmasStars variant="section" />
      <div className='max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden relative'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='p-8 md:p-12 lg:p-16 bg-gray-50 border-r border-gray-200'>
            <img
              src={logo}
              alt='Global Surgery Logo'
              className='h-44 w-auto mb-8'
            />
            <h2 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-4'>
              Pongámonos en contacto
            </h2>
            <p className='text-gray-600 mb-8 leading-relaxed'>
              Estamos listos para responder tus preguntas y ayudarte a encontrar
              las mejores soluciones. Utiliza el formulario o contáctanos
              directamente a través de los siguientes canales.
            </p>

            <div className='border-t border-gray-200 pt-6'>
              <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6'>
                Contacto Directo
              </h3>

              {/* Teléfonos */}
              <div className='mb-6'>
                <a
                  href='https://wa.me/541135646504'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={contactLinkStyle}
                  aria-label='Contactar Principal por WhatsApp'
                >
                  <FaWhatsapp
                    size={16}
                    className='mr-2 flex-shrink-0 text-cyan-600 group-hover:text-green-500'
                  />
                  <span>+54 11 3564-6504</span>
                </a>
              </div>

              <div className='mb-6'>
                <a
                  href='tel:541145445527'
                  className={contactLinkStyle}
                  aria-label='Llamar a la oficina'
                >
                  <FaPhone
                    size={16}
                    className='mr-2 flex-shrink-0 text-cyan-600 group-hover:text-cyan-700'
                  />
                  <span>4544-5527 </span>
                </a>
              </div>

              {/* Email */}
              <div className='mb-6'>
                <a
                  href='mailto:ventas@globalsurgery.com.ar'
                  className={contactLinkStyle}
                  aria-label='Enviar correo electrónico'
                >
                  <FaEnvelope
                    size={16}
                    className='mr-2 flex-shrink-0 text-cyan-600 group-hover:text-cyan-700'
                  />
                  <span>ventas@globalsurgery.com.ar</span>
                </a>
              </div>

              {/* Ubicación */}
              <div className='mb-6'>
                <button
                  onClick={() => setIsMapOpen(true)}
                  className={`${contactLinkStyle} leading-relaxed hover:text-cyan-700 w-full text-left`}
                  aria-label='Ver ubicación en el mapa'
                >
                  <FaMapMarkerAlt
                    size={16}
                    className='mr-2 mt-0.5 flex-shrink-0 text-cyan-600 group-hover:text-cyan-700'
                  />
                  <span className='break-words group-hover:underline'>
                    Av Rivadavia 2431, entrada 1 piso 3 oficina 8
                  </span>
                </button>
              </div>

              {/* Redes Sociales */}
              <div>
                <a
                  href='https://www.instagram.com/globalsurgery.ok/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={contactLinkStyle}
                  aria-label='Visitar nuestro perfil de Instagram'
                >
                  <FaInstagram
                    size={16}
                    className='mr-2 flex-shrink-0 text-cyan-600 group-hover:text-pink-500'
                  />
                  <span>@globalsurgery.ok</span>
                </a>
              </div>
            </div>
          </div>

          {/* --- Right Column: Form --- */}
          <div className='p-8 md:p-12 lg:p-16 bg-cyan-700'>
            <h2 className='text-2xl lg:text-3xl font-bold text-cyan-50 mb-4'>
              Formulario
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className='space-y-6'
            >
              {/* Name & Email Fields */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='from_name'
                    className='block text-sm font-medium text-cyan-50 mb-1'
                  >
                    Nombre <span className='text-red-300'>*</span>
                  </label>
                  <input
                    type='text'
                    name='from_name'
                    id='from_name'
                    required
                    minLength={2}
                    maxLength={100}
                    className='block w-full px-4 py-3 border border-cyan-500 bg-white text-gray-900 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white sm:text-sm transition'
                    placeholder='Juan Pérez'
                  />
                </div>
                <div>
                  <label
                    htmlFor='from_email'
                    className='block text-sm font-medium text-cyan-50 mb-1'
                  >
                    Email <span className='text-red-300'>*</span>
                  </label>
                  <input
                    type='email'
                    name='from_email'
                    id='from_email'
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className='block w-full px-4 py-3 border border-cyan-500 bg-white text-gray-900 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white sm:text-sm transition'
                    placeholder='juan@ejemplo.com'
                  />
                </div>
              </div>

              {/* Phone and Subject Fields */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-cyan-50 mb-1'
                  >
                    Teléfono <span className='text-cyan-200'>(Opcional)</span>
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    id='phone'
                    pattern="[\+]?[0-9\s\-\(\)]+"
                    className='block w-full px-4 py-3 border border-cyan-500 bg-white text-gray-900 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white sm:text-sm transition'
                    placeholder='+54 11 1234-5678'
                  />
                </div>
                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-cyan-50 mb-1'
                  >
                    Asunto
                  </label>
                  <input
                    type='text'
                    name='subject'
                    id='subject'
                    className='block w-full px-4 py-3 border border-cyan-500 bg-white text-gray-900 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white sm:text-sm transition'
                    placeholder='Consulta sobre...'
                  />
                </div>
              </div>

              {/* Honeypot field - hidden from users, visible to bots */}
              <input
                type='text'
                name='website'
                tabIndex='-1'
                autoComplete='off'
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  width: '1px',
                  height: '1px'
                }}
              />

              {/* Message Field */}
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-cyan-50 mb-1'
                >
                  Mensaje <span className='text-red-300'>*</span>
                </label>
                <textarea
                  name='message'
                  id='message'
                  required
                  minLength={10}
                  maxLength={1000}
                  rows={5}
                  className='block w-full px-4 py-3 border border-cyan-500 bg-white text-gray-900 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white sm:text-sm transition'
                  placeholder='Describe tu consulta aquí...'
                  onChange={(e) => setMessageLength(e.target.value.length)}
                />
                <div className='text-right text-sm text-cyan-200 mt-1'>
                  {messageLength}/1000 caracteres
                </div>
              </div>

              {/* PDF Upload Section */}
              <PdfUploadStandalone />

              {/* Status Messages & Submit Button */}
              <div className='pt-2'>
                <FormStatus submitStatus={submitStatus} />
                <SubmitButton isSubmitting={isSubmitting} />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal del Mapa */}
      <MapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
      />

      {/* Toast container for notifications */}
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  );
};

export default ContactPage;
