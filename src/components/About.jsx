import React, { useRef, useEffect, useMemo, useState } from 'react';
import {
  FaHandshake,
  FaLightbulb,
  FaMedkit,
  FaUserMd,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaStethoscope,
  FaUsers,
  FaMapMarkedAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MapModal from './MapModal';

import imagenManos from '../assets/manos.jpg';
import imagen2 from '../assets/img2.jpg';
import imagen3 from '../assets/img3.jpg';

const About = () => {
  const valoresRef = useRef(null);
  const valorItemRefs = useRef([]);
  const experienciaRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const valores = useMemo(
    () => [
      {
        icon: <FaLightbulb className='text-4xl text-teal-500 mx-auto mb-3' />,
        title: 'Innovación',
        description:
          'Adoptamos las últimas tecnologías y técnicas para ofrecer soluciones quirúrgicas de vanguardia.',
        color: 'teal-500',
        shadowColor: 'rgba(20, 184, 166, 0.6)',
      },
      {
        icon: <FaMedkit className='text-4xl text-blue-600 mx-auto mb-3' />,
        title: 'Calidad',
        description:
          'Nos comprometemos con los más altos estándares en todos nuestros productos y servicios.',
        color: 'blue-600',
        shadowColor: 'rgba(37, 99, 235, 0.6)',
      },
      {
        icon: <FaHandshake className='text-4xl text-indigo-600 mx-auto mb-3' />,
        title: 'Confianza',
        description:
          'Construimos relaciones duraderas basadas en la transparencia y el cumplimiento.',
        color: 'indigo-600',
        shadowColor: 'rgba(79, 70, 229, 0.6)',
      },
      {
        icon: <FaUserMd className='text-4xl text-cyan-600 mx-auto mb-3' />,
        title: 'Enfoque al paciente',
        description:
          'Trabajamos para mejorar los resultados clínicos y la calidad de vida de los pacientes.',
        color: 'cyan-600',
        shadowColor: 'rgba(8, 145, 178, 0.6)',
      },
    ],
    []
  );

  // Datos para la sección de experiencia
  const experiencia = useMemo(
    () => [
      {
        icon: <FaClock className='text-2xl text-white' />,
        titulo: 'Más de 10 años de experiencia',
        detalle:
          'Brindando soluciones innovadoras en cirugía de columna y neurocirugía',
      },
      {
        icon: <FaStethoscope className='text-2xl text-white' />,
        titulo: 'Cientos de cirugías asistidas',
        detalle:
          'Mejorando la precisión y resultados en procedimientos complejos',
      },
      {
        icon: <FaUsers className='text-2xl text-white' />,
        titulo: 'Especialistas neurocirujanos',
        detalle:
          'Distinguidos profesionales de salud que respaldan nuestras soluciones',
      },
      {
        icon: <FaMapMarkedAlt className='text-2xl text-white' />,
        titulo: 'Distribución nacional',
        detalle:
          'Llevando innovación médica a instituciones de salud por toda la República Argentina',
      },
    ],
    []
  );

  useEffect(() => {
    const currentValoresRef = valoresRef.current;
    let intervalId = null;

    // Función para aplicar el efecto de brillo
    const applyGlowEffect = (index) => {
      const cardRef = valorItemRefs.current[index];
      if (cardRef && index < valores.length) {
        const valor = valores[index];

        cardRef.style.boxShadow = `0 0 15px ${valor.shadowColor}`;
        cardRef.style.borderColor = `rgb(${getBorderColor(valor.color)})`;

        setTimeout(() => {
          if (cardRef) {
            cardRef.style.boxShadow = '';
            cardRef.style.borderColor = 'rgb(8, 145, 178)';
          }
        }, 800);
      }
    };

    // Función para convertir clase Tailwind a RGB
    const getBorderColor = (colorClass) => {
      switch (colorClass) {
        case 'teal-500':
          return '20, 184, 166';
        case 'blue-600':
          return '37, 99, 235';
        case 'indigo-600':
          return '79, 70, 229';
        case 'cyan-600':
          return '8, 145, 178';
        default:
          return '8, 145, 178'; // Default cyan-700
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger cascading animation for all valor cards
            valores.forEach((_, index) => {
              setTimeout(() => {
                applyGlowEffect(index);
              }, index * 200);
            });

            // Repeat animation every 5 seconds
            intervalId = setInterval(() => {
              valores.forEach((_, index) => {
                setTimeout(() => {
                  applyGlowEffect(index);
                }, index * 200);
              });
            }, 5000);
          } else {
            // Clear interval when the section is not visible
            if (intervalId) {
              clearInterval(intervalId);
              intervalId = null;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentValoresRef) {
      observer.observe(currentValoresRef);
    }

    // Observer para la sección de experiencia
    const experienciaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (experienciaRef.current) {
      experienciaObserver.observe(experienciaRef.current);
    }

    return () => {
      if (currentValoresRef) {
        observer.disconnect();
      }
      if (experienciaRef.current) {
        experienciaObserver.disconnect();
      }
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [valores]);

  return (
    <div className='mt-8 max-w-[1200px] mx-auto mb-20'>
      {/* Sección inicial */}
      <div className='w-11/12 mx-auto text-center py-12 px-5'>
        <h2 className='text-center font-poppins text-3xl md:text-4xl font-bold text-gray-900 pb-6 relative'>
          <span className='inline-block relative'>
            ¿Quiénes somos?
            <span className='absolute bottom-0 left-0 w-full h-1 bg-cyan-700 transform translate-y-2'></span>
          </span>
        </h2>
        <p className='font-poppins text-black text-md md:text-lg max-w-3xl mx-auto'>
          ¡Bienvenidos a Global Surgery! Somos una empresa líder en la industria
          dedicada a proporcionar soluciones avanzadas en el campo de la cirugía
          de columna y neurocirugía. Nuestra pasión por la innovación y el
          compromiso con el bienestar de los pacientes nos impulsan a marcar la
          diferencia en el ámbito de la atención médica.
        </p>
      </div>

      {/* Sección de misión, imagen, visión */}
      <div className='mx-auto w-11/12 px-4 md:px-6 flex flex-col md:flex-row md:gap-4 shadow-lg rounded-lg py-8 mb-16'>
        <div className='p-6 bg-gradient-to-r from-cyan-800 to-cyan-700 rounded-lg md:w-1/3 transform hover:scale-105 transition-all duration-300 mb-4 md:mb-0'>
          <h2 className='text-white text-center font-playfair text-2xl py-3 font-semibold'>
            Nuestra misión
          </h2>
          <p className='text-white font-poppins text-center text-md'>
            Avanzar en la cirugía de columna y neurocirugía mediante la
            provisión de soluciones de vanguardia que mejoren significativamente
            los resultados clínicos y la experiencia del paciente.
          </p>
        </div>
        <div className='py-3 md:w-1/3 md:py-0 flex items-center justify-center transform hover:scale-105 transition-all duration-300 mb-4 md:mb-0'>
          <div className='rounded-full overflow-hidden border-4 border-cyan-700 shadow-2xl w-64 h-64'>
            <img
              className='w-full h-full object-cover'
              src={imagenManos}
              alt='Innovación en neurocirugía'
            />
          </div>
        </div>
        <div className='p-6 bg-gradient-to-r from-cyan-700 to-cyan-800 rounded-lg md:w-1/3 transform hover:scale-105 transition-all duration-300'>
          <h2 className='text-white text-center font-playfair text-2xl py-3 font-semibold'>
            Nuestra visión
          </h2>
          <p className='text-white font-poppins text-center text-md'>
            Ser reconocidos globalmente como líderes innovadores en el campo de
            la cirugía de columna, marcando un impacto positivo duradero en la
            atención médica especializada.
          </p>
        </div>
      </div>

      {/* Sección de valores con iconos y efecto de brillo framermotion */}
      <div
        ref={valoresRef}
        className='w-11/12 mx-auto py-12 px-5'
      >
        <h2 className='text-center font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-12 relative'>
          <span className='inline-block relative'>
            Nuestros valores
            <span className='absolute bottom-0 left-0 w-full h-1 bg-cyan-700 transform translate-y-2'></span>
          </span>
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {valores.map((valor, index) => (
            <div
              key={index}
              ref={(el) => (valorItemRefs.current[index] = el)}
              className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-cyan-700'
              style={{
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
              }}
            >
              {valor.icon}
              <h3 className='font-playfair text-xl font-bold text-center mb-3 text-gray-800'>
                {valor.title}
              </h3>
              <p className='font-poppins text-center text-gray-600'>
                {valor.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* experiencia */}
      <div
        ref={experienciaRef}
        className='w-full bg-gradient-to-r from-cyan-800 via-cyan-700 to-cyan-800 py-16 mt-16'
      >
        <div className='w-11/12 max-w-6xl mx-auto'>
          <h2 className='text-center font-poppins text-3xl md:text-4xl font-bold text-white mb-12'>
            Nuestra trayectoria profesional
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='rounded-lg overflow-hidden'>
              <img
                src={imagen2}
                alt='Profesionales médicos'
                className='w-full h-full object-cover rounded-lg shadow-lg'
              />
            </div>

            <div className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg'>
              <h3 className='text-2xl font-playfair font-semibold text-white mb-6 border-b border-cyan-300 pb-2'>
                Excelencia en cirugía especializada
              </h3>

              <div className='space-y-8'>
                {experiencia.map((item, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-700 ${
                      isVisible
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className='flex items-start mb-1'>
                      <div className='bg-cyan-700 rounded-full h-12 w-12 flex items-center justify-center mr-3 flex-shrink-0'>
                        {item.icon}
                      </div>
                      <div className='flex-1 min-w-0'>
                        <h4 className='text-lg md:text-xl font-playfair font-semibold text-white leading-tight'>
                          {item.titulo}
                        </h4>
                        <p className='text-cyan-100 font-poppins text-sm mt-1 leading-relaxed'>
                          {item.detalle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA de contacto */}
      <div className='w-11/12 mx-auto py-4 px-5 bg-white shadow-xl rounded-lg mt-12'>
        <h2 className='text-center font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-8 relative'>
          <span className='inline-block relative'>
            Contáctanos
            <span className='absolute bottom-0 left-0 w-full h-1 bg-cyan-700 transform translate-y-2'></span>
          </span>
        </h2>

        <div className='flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto'>
          <div className='mb-8 md:mb-0 md:mr-8 md:w-1/2'>
            <img
              src={imagen3}
              alt='Atención personalizada al cliente'
              className='rounded-lg shadow-md w-full'
            />
          </div>

          <div className='md:w-1/2'>
            <p className='font-poppins text-gray-700 mb-8'>
              Estamos listos para atender tus consultas y proporcionar la
              información que necesitas sobre nuestras soluciones para cirugía
              de columna. Nuestro equipo de especialistas está disponible para
              asesorarte.
            </p>

            <div className='space-y-4'>
              {/* WhatsApp */}
              <a
                href='https://wa.me/541135646504'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-gray-700 hover:text-cyan-800 transition-colors duration-200 group'
                aria-label='Contactar por WhatsApp'
              >
                <FaWhatsapp
                  size={16}
                  className='text-cyan-700 mr-2 group-hover:text-green-500 transition-colors duration-200'
                />
                <span className='font-poppins text-sm group-hover:underline'>
                  +54 11 3564-6504
                </span>
              </a>

              {/* Teléfono Oficina */}
              <a
                href='tel:541145445527'
                className='flex items-center text-gray-700 hover:text-cyan-800 transition-colors duration-200 group'
                aria-label='Llamar a la oficina'
              >
                <FaPhone
                  size={16}
                  className='text-cyan-700 mr-2 group-hover:text-cyan-800 transition-colors duration-200'
                />
                <span className='font-poppins text-sm group-hover:underline'>
                  4544-5527
                </span>
              </a>

              {/* Email */}
              <a
                href='mailto:ventas@globalsurgery.com.ar'
                className='flex items-center text-gray-700 hover:text-cyan-800 transition-colors duration-200 group'
                aria-label='Enviar correo electrónico'
              >
                <FaEnvelope
                  size={16}
                  className='text-cyan-700 mr-2 group-hover:text-cyan-800 transition-colors duration-200'
                />
                <span className='font-poppins text-sm group-hover:underline'>
                  ventas@globalsurgery.com.ar
                </span>
              </a>

              {/* Ubicación */}
              <button
                onClick={() => setIsMapOpen(true)}
                className='flex items-start text-gray-700 hover:text-cyan-800 transition-colors duration-200 group w-full text-left'
                aria-label='Ver ubicación en el mapa'
              >
                <FaMapMarkerAlt
                  size={16}
                  className='text-cyan-700 mr-2 mt-0.5 flex-shrink-0 group-hover:text-cyan-800 transition-colors duration-200'
                />
                <span className='font-poppins text-sm leading-relaxed group-hover:underline'>
                  Av Rivadavia 2431, entrada 1 piso 3 oficina 8
                </span>
              </button>

              {/* Instagram */}
              <a
                href='https://www.instagram.com/globalsurgery.ok/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-gray-700 hover:text-cyan-800 transition-colors duration-200 group'
                aria-label='Visitar nuestro perfil de Instagram'
              >
                <FaInstagram
                  size={16}
                  className='text-cyan-700 mr-2 group-hover:text-pink-500 transition-colors duration-200'
                />
                <span className='font-poppins text-sm group-hover:underline'>
                  @globalsurgery.ok
                </span>
              </a>
            </div>
            <Link
              to='/contact'
              className='mt-8 bg-gradient-to-r from-cyan-700 to-cyan-600 hover:from-cyan-800 hover:to-cyan-700 text-white py-3 px-6 rounded-md font-semibold shadow-md transition-all duration-300 flex items-center justify-center w-full md:w-auto'
            >
              <FaEnvelope className='mr-2' /> Enviar mensaje
            </Link>
          </div>
        </div>
      </div>

      {/* Modal del Mapa */}
      <MapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
      />
    </div>
  );
};

export default About;
