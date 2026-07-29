import { useParams, Link, Navigate } from 'react-router-dom';
import productData from '../utils/productData';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const SpecificationTable = ({ title, headers, rows, note }) => (
  <div className='mb-8 overflow-hidden'>
    <h4 className='text-lg font-semibold text-gray-800 mb-3'>{title}</h4>
    <div className='shadow border-b border-gray-200 sm:rounded-lg overflow-x-auto'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-100'>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope='col'
                className='px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className='hover:bg-gray-50'
            >
              {headers.map((header) => (
                <td
                  key={header}
                  className='px-4 py-3 whitespace-nowrap text-sm text-gray-700'
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {note && <p className='mt-2 text-xs text-gray-500'>{note}</p>}
  </div>
);

const ProductDetailPage = () => {
  const { systemId } = useParams();
  const system = productData.find((s) => s.id === systemId);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [systemId, system]);

  if (!system) {
    return (
      <Navigate
        to='/products'
        replace
      />
    );
  }

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const isAcifCategory = systemId === 'acif';

  const acifSubProducts = [
    {
      id: 'koral',
      name: 'KORAL',
      description: 'Cage autosustentable cervical en PEEK (polímero biocompatible)',
      image: '/acif/Koral-mainl.png',
      link: '/products/acif/koral'
    },
    {
      id: 'onix',
      name: 'ONIX',
      description: 'Cage autosustentable cervical en PEEK (polímero biocompatible)',
      image: '/acif/acif-onix-main.png',
      link: '/products/acif/onix'
    }
  ];

  return (
    <div className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-16 md:mt-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Botón para Volver a la Lista de Productos */}
        <div className='mb-8'>
          <Link
            to='/products'
            className='inline-flex items-center text-sm font-medium text-cyan-700 hover:text-cyan-900 transition-colors duration-200'
          >
            <svg
              className='w-5 h-5 mr-2'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clipRule='evenodd'
              ></path>
            </svg>
            Volver a Sistemas
          </Link>
        </div>

        {/* ACIF Category Layout */}
        {isAcifCategory && (
          <div className='mb-12'>
            <div className='text-center mb-12'>
              <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight'>
                Sistema ACIF
              </h1>
              <p className='mt-4 text-xl text-gray-600 max-w-2xl mx-auto'>
                Anterior Cervical Interbody Fusion
              </p>
              <div className='mt-6 w-24 h-1 bg-cyan-600 mx-auto'></div>
              <p className='mt-6 max-w-3xl mx-auto text-lg text-gray-600'>
                {system.systemDescription}
              </p>
            </div>

            {/* Sub-products Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
              {acifSubProducts.map((product) => (
                <Link
                  key={product.id}
                  to={product.link}
                  className='bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] border border-gray-100 group'
                >
                  <div className='relative w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden'>
                    <img
                      src={product.image}
                      alt={`Sistema ${product.name}`}
                      className='object-contain w-full h-full p-6 group-hover:scale-105 transition-transform duration-300'
                      loading='lazy'
                    />
                  </div>
                  <div className='p-8 flex flex-col flex-grow'>
                    <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                      {product.name}
                    </h3>
                    <div className='w-16 h-1 bg-cyan-100 my-3'></div>
                    <p className='text-gray-600 flex-grow'>
                      {product.description}
                    </p>
                    <div className='mt-6'>
                      <span className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-cyan-700 group-hover:bg-cyan-800 transition-colors'>
                        Ver Más
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 ml-2'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Instrumental Section for ACIF */}
            <div className='mt-16'>
              <h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
                Instrumental
              </h3>
              
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
                <div className='lg:col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 flex items-center justify-center'>
                  <img
                    src='/acif/caja-instrumental-Koral-1024x680.png'
                    alt='Caja Instrumental ACIF'
                    className='object-contain w-full h-64 rounded-lg'
                    loading='lazy'
                  />
                </div>
                <div className='bg-cyan-700 rounded-2xl p-8 flex flex-col justify-center'>
                  <h4 className='text-xl font-semibold text-white mb-4'>
                    Instrumental ACIF
                  </h4>
                  <ul className='space-y-3 text-cyan-100'>
                    <li className='flex items-start'>
                      <span className='mr-2'>•</span>
                      Set completo de instrumental especializado
                    </li>
                    <li className='flex items-start'>
                      <span className='mr-2'>•</span>
                      Herramientas de preparación del espacio discal
                    </li>
                    <li className='flex items-start'>
                      <span className='mr-2'>•</span>
                      Instrumentos de inserción y colocación
                    </li>
                    <li className='flex items-start'>
                      <span className='mr-2'>•</span>
                      Compatible con técnicas mínimamente invasivas
                    </li>
                  </ul>
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                <div className='bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 flex items-center justify-center'>
                  <img
                    src='/acif/instrumental-Koral-vista-1-1024x798.png'
                    alt='Instrumental ACIF Vista 1'
                    className='object-contain w-full h-56 rounded-lg'
                    loading='lazy'
                  />
                </div>
                <div className='bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 flex items-center justify-center'>
                  <img
                    src='/acif/instrumental-Koral-vista-2-1024x733.png'
                    alt='Instrumental ACIF Vista 2'
                    className='object-contain w-full h-56 rounded-lg'
                    loading='lazy'
                  />
                </div>
              </div>

              {/* Medidas Full Width */}
              <div className='w-full'>
                <img
                  src='/acif/todas las medidas.jpg'
                  alt='Todas las medidas ACIF'
                  className='w-full object-contain rounded-xl shadow-lg'
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        )}

        {/* System Section - Only for non-ACIF systems */}
        {!isAcifCategory && (
          <section
            id={system.id}
            className='mb-12 md:mb-16'
          >
          <div className='mb-8 text-center md:text-left'>
            <h2 className='text-sm font-semibold text-cyan-700 uppercase tracking-wide'>
              {system.systemName}
            </h2>
            <h1 className='mt-1 text-3xl sm:text-4xl font-bold text-gray-900'>
              {system.systemTitle}
            </h1>
            <p className='mt-3 max-w-3xl mx-auto md:mx-0 text-base text-gray-600'>
              {system.systemDescription}
            </p>
          </div>

          <div className='space-y-10 md:space-y-12'>
            {system.components.map((component, componentIndex) => (
              <div
                key={component.id}
                className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'
              >
                <div
                  className={`w-full ${
                    componentIndex % 2 !== 0 ? 'md:order-last' : ''
                  }`}
                >
                  {component.image && (
                    <div className='flex justify-center relative'>
                      {isLoading && (
                        <div className='absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg'>
                          <LoadingSpinner
                            size='lg'
                            variant='primary'
                          />
                        </div>
                      )}
                      <img
                        src={component.image}
                        alt={component.altText || `Imagen de ${component.name}`}
                        className={`rounded-lg shadow-lg object-contain h-auto w-full max-h-96 transition-opacity duration-300 ${
                          isLoading ? 'opacity-0' : 'opacity-100'
                        }`}
                        loading='lazy'
                        onLoad={handleImageLoad}
                      />
                    </div>
                  )}
                </div>
                <div
                  className={`w-full ${
                    componentIndex % 2 !== 0 ? 'md:order-first' : ''
                  }`}
                >
                  <h4 className='text-xl font-semibold text-gray-900 mb-3'>
                    {component.name}
                  </h4>
                  <ul className='space-y-2 list-disc list-outside pl-5 text-gray-600'>
                    {component.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  {componentIndex === 0 && (
                    <div className='mt-6'>
                      <Link
                        to='/contact'
                        className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-200'
                      >
                        Solicitar Cotización
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {system.instrumentation &&
            system.instrumentation.images?.length > 0 && (
              <div className='mt-10 md:mt-12 pt-8 border-t border-gray-200'>
                <h4 className='text-xl font-semibold text-gray-900 mb-3'>
                  {system.instrumentation.title}
                </h4>
                <p className='text-gray-600 mb-6'>
                  {system.instrumentation.description}
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {system.instrumentation.images.map((img) => (
                    <div
                      key={img.id}
                      className='aspect-square bg-white border border-gray-200 rounded-md shadow-md p-2 flex items-center justify-center overflow-hidden hover:shadow-lg transition-shadow duration-200'
                    >
                      <img
                        src={img.src}
                        alt={img.altText}
                        className='object-contain w-full h-full'
                        loading='lazy'
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Sistema de Especificaciones Técnicas */}
          {system.specifications && system.specifications.length > 0 && (
            <div className='mt-10 md:mt-12 pt-8 border-t border-gray-200'>
              <h3 className='text-xl font-semibold text-gray-900 mb-6'>
                Especificaciones Técnicas
              </h3>
              {system.specifications.map((specTable, specIndex) => (
                <SpecificationTable
                  key={specIndex}
                  title={specTable.title}
                  headers={specTable.headers}
                  rows={specTable.rows}
                  note={specTable.note}
                />
              ))}
            </div>
          )}
        </section>
        )}

        {!isAcifCategory && (
          <section className='text-center py-12 md:py-16 bg-cyan-700 rounded-lg shadow-lg mt-12 md:mt-16'>
          <h2 className='text-2xl sm:text-3xl font-bold text-white mb-4 px-4'>
            ¿Interesado en {system.systemName}?
          </h2>
          <p className='text-blue-100 mb-8 max-w-xl mx-auto px-4'>
            Contáctenos para más información o para solicitar una demostración.
          </p>
          <div className='space-x-4'>
            <Link
              to='/contact'
              className='inline-block bg-white hover:bg-gray-100 text-cyan-700 font-semibold py-3 px-8 rounded-lg shadow transition duration-300 ease-in-out'
            >
              Contactar a un Especialista
            </Link>
            {/* <Link
              to='/downloads'
              className='inline-block bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 text-white font-semibold py-3 px-8 rounded-lg shadow transition duration-300 ease-in-out mt-4 sm:mt-0'
            >
              Descargar Catálogo
            </Link> */}
          </div>
        </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
