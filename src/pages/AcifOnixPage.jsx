import { useParams, Link, Navigate } from 'react-router-dom';
import productData from '../utils/productData';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const AcifOnixPage = () => {
  const { subId } = useParams();
  const acifSystem = productData.find((s) => s.id === 'acif');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!acifSystem) {
    return <Navigate to='/products' replace />;
  }

  const onixComponents = [
    {
      id: 'acif-onix',
      name: 'Cage ONIX Cervical',
      image: '/acif/acif-onix-main.png',
      altText: 'Cage Autosustentable ONIX Cervical en PEEK',
      features: [
        'El sistema de fijación ONIX, cage autosustentable cervical en PEEK (polímero biocompatible), se presenta en diversas alturas, con una angulación de 6°, e incluye dos marcadores de titanio en el extremo anterior y posterior.',
      ],
    },
    {
      id: 'acif-onix-sistema-doble-anclaje',
      name: 'Sistema de doble anclaje',
      features: [
        'Presenta un anclaje estático compuesto por pines en titanio para una estabilización del cage en el espacio intervertebral, además cuenta con un segundo anclaje mediante tornillos hacia los cuerpos cervicales superior e inferior.',
      ],
    },
    {
      id: 'acif-onix-perfil-cero',
      name: 'Perfil cero',
      features: [
        'Las cabezas de los tornillos se integran completamente dentro del cage para evitar la disfagia.',
        'La colocación del tornillo es autoguiado mediante el soporte del implantes de acuerdo con su orientación angular (40° en relación a los cuerpos cervicales) y también en profundidad para asegurar una colocación perfecta (impactador con tope).',
      ],
    },
    {
      id: 'acif-onix-simplicidad',
      name: 'Simplicidad de Uso',
      features: [
        'Combina la funcionalidad de un dispositivo intersomático y las ventajas de una placa cervical.',
        'La forma anatómica del implantes (con su parte convexa superior a los planos frontales y sagitales) permite restaurar la altura intervertebral seleccionada así como la lordosis del espacio intervertebral en cuestión, asegura una excelente estabilidad primaria del implantes.',
      ],
    },
    {
      id: 'acif-onix-medidas',
      name: '',
      image: '/acif/onix-medidas.jpg',
      altText: 'Medidas ONIX Cervical',
      features: [],
      fullWidth: true,
    }
  ];

  const handleImageLoad = () => setIsLoading(false);

  return (
    <div className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-16 md:mt-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-8'>
          <Link
            to='/products/acif'
            className='inline-flex items-center text-sm font-medium text-cyan-700 hover:text-cyan-900 transition-colors duration-200'
          >
            <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
              <path fillRule='evenodd' d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clipRule='evenodd' />
            </svg>
            Volver a ACIF
          </Link>
        </div>

        <div className='mb-8 text-center md:text-left'>
          <h2 className='text-sm font-semibold text-cyan-700 uppercase tracking-wide'>
            ACIF → ONIX
          </h2>
          <h1 className='mt-1 text-3xl sm:text-4xl font-bold text-gray-900'>
            Sistema ONIX Cervical
          </h1>
          <p className='mt-3 max-w-3xl mx-auto md:mx-0 text-base text-gray-600'>
            Cage autosustentable cervical en PEEK (polímero biocompatible) para fusión intersomática anterior cervical.
          </p>
        </div>

        <div className='space-y-10 md:space-y-12'>
          {onixComponents.map((component, componentIndex) => {
            if (component.fullWidth) {
              return (
                <div key={component.id} className='w-full'>
                  <img
                    src={component.image}
                    alt={component.altText}
                    className='w-full object-contain rounded-xl shadow-lg'
                    loading='lazy'
                  />
                </div>
              );
            }

            if (!component.image) {
              return (
                <div key={component.id} className='bg-white rounded-xl shadow-lg p-8'>
                  {component.name && (
                    <h4 className='text-xl font-semibold text-gray-900 mb-3'>
                      {component.name}
                    </h4>
                  )}
                  {component.features && component.features.length > 0 && (
                    <ul className='space-y-2 list-disc list-outside pl-5 text-gray-600'>
                      {component.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            }

            return (
              <div
                key={component.id}
                className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'
              >
                <div className={`w-full ${componentIndex % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <div className='flex justify-center relative'>
                    {isLoading && (
                      <div className='absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg'>
                        <LoadingSpinner size='lg' variant='primary' />
                      </div>
                    )}
                    <img
                      src={component.image}
                      alt={component.altText || component.name}
                      className={`rounded-lg shadow-lg object-contain h-auto w-full max-h-96 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                      loading='lazy'
                      onLoad={handleImageLoad}
                    />
                  </div>
                </div>
                <div className={`w-full ${componentIndex % 2 !== 0 ? 'md:order-first' : ''}`}>
                  <h4 className='text-xl font-semibold text-gray-900 mb-3'>
                    {component.name}
                  </h4>
                  {component.features && component.features.length > 0 && (
                    <ul className='space-y-2 list-disc list-outside pl-5 text-gray-600'>
                      {component.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <section className='text-center py-12 md:py-16 bg-cyan-700 rounded-lg shadow-lg mt-12 md:mt-16'>
          <h2 className='text-2xl sm:text-3xl font-bold text-white mb-4 px-4'>
            ¿Interesado en ONIX Cervical?
          </h2>
          <p className='text-blue-100 mb-8 max-w-xl mx-auto px-4'>
            Contáctenos para más información o para solicitar una demostración.
          </p>
          <Link
            to='/contact'
            className='inline-block bg-white hover:bg-gray-100 text-cyan-700 font-semibold py-3 px-8 rounded-lg shadow transition duration-300 ease-in-out'
          >
            Contactar a un Especialista
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AcifOnixPage;