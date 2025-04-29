import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaPaperPlane,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-global-surgery.png';

const ContactPage = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: false, message: '' });

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error('EmailJS environment variables not configured!');
      setSubmitStatus({
        success: false,
        error: true,
        message: 'Error de configuración. Intente más tarde.',
      });
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          setSubmitStatus({
            success: true,
            error: false,
            message:
              '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
          });
          form.current.reset();
        },
        (error) => {
          setSubmitStatus({
            success: false,
            error: true,
            message: `Error al enviar el mensaje: ${
              error.text || 'Intente más tarde.'
            }`,
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactLinkStyle =
    'inline-flex items-center text-gray-600 hover:text-cyan-700 transition-colors duration-200 group text-sm';

  return (
    <div className='bg-gradient-to-br from-gray-50 to-blue-50 min-h-[calc(100vh-64px)] py-20 px-4 sm:px-6 lg:px-8 mt-16'>
      {' '}
      <div className='max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden'>
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

            <div className='space-y-4 border-t border-gray-200 pt-6'>
              <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3'>
                Contacto Directo
              </h3>
              <a
                href='https://wa.me/541135646504'
                target='_blank'
                rel='noopener noreferrer'
                className={contactLinkStyle}
                aria-label='Contactar Principal por WhatsApp'
              >
                <FaWhatsapp
                  size={16}
                  className='mr-1 flex-shrink-0 text-cyan-600 group-hover:text-cyan-700'
                />
                <span className='mr-3'>+54 11 3564-6504</span>
              </a>
              <a
                href='mailto:ventas@globalsurgery.com.ar'
                className={contactLinkStyle}
                aria-label='Enviar correo electrónico'
              >
                <FaEnvelope
                  size={16}
                  className='mr-1 flex-shrink-0 text-cyan-600 group-hover:text-cyan-700'
                />
                <span>ventas@globalsurgery.com.ar</span>
              </a>
              <a
                href='https://www.instagram.com/globalsurgery.ok/'
                target='_blank'
                rel='noopener noreferrer'
                className={contactLinkStyle}
                aria-label='Visitar nuestro perfil de Instagram'
              >
                <FaInstagram
                  size={16}
                  className='mr-1 flex-shrink-0 text-cyan-600 group-hover:text-cyan-700'
                />
                <span className='mr-3'>@globalsurgery.ok</span>
              </a>
            </div>
          </div>

          {/* --- Right Column: Form --- */}
          <div className='p-8 md:p-12 lg:p-16 bg-cyan-700'>
            <h2 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-4'>
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
                    className='block w-full px-4 py-3 border border-cyan-500 bg-white text-gray-900 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white sm:text-sm transition'
                    placeholder='Tu nombre completo'
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
                    className='block w-full px-4 py-3 border border-cyan-500 bg-white text-gray-900 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white sm:text-sm transition'
                    placeholder='tu@email.com'
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
                    className='block w-full px-4 py-3 border border-cyan-500 bg-white text-gray-900 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white sm:text-sm transition'
                    placeholder='+54 11 ...'
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
                  rows={5}
                  className='block w-full px-4 py-3 border border-cyan-500 bg-white text-gray-900 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white sm:text-sm transition'
                  placeholder='Escribe tu consulta aquí...'
                />
              </div>

              {/* Status Messages & Submit Button */}
              <div className='pt-2'>
                {submitStatus.success && (
                  <div
                    className='bg-green-200 border-l-4 border-green-600 text-green-900 p-4 rounded-md mb-5'
                    role='alert'
                  >
                    <p className='font-medium'>¡Éxito!</p>
                    <p>{submitStatus.message}</p>
                  </div>
                )}
                {submitStatus.error && (
                  <div
                    className='bg-red-200 border-l-4 border-red-600 text-red-900 p-4 rounded-md mb-5'
                    role='alert'
                  >
                    <p className='font-medium'>Error</p>
                    <p>{submitStatus.message}</p>
                  </div>
                )}
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`w-full inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-sm text-base font-semibold rounded-lg transition duration-150 ease-in-out ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
                      : 'bg-white text-cyan-700 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white'
                  }`}
                >
                  {isSubmitting ? (
                    <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-cyan-700'></svg>
                  ) : (
                    <FaPaperPlane
                      className='-ml-1 mr-2 h-5 w-5'
                      aria-hidden='true'
                    />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
