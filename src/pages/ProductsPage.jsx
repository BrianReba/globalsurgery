import { Link } from 'react-router-dom';
import productData from '../utils/productData';

const ProductsPage = () => {
  return (
    <div className='bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8 mt-16 md:mt-20'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <span className='inline-block bg-cyan-100 text-cyan-800 font-medium px-4 py-1 rounded-full text-sm mb-3'>
            Innovación Médica
          </span>
          <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight'>
            Nuestros Sistemas Quirúrgicos
          </h1>
          <div className='mt-6 w-24 h-1 bg-cyan-600 mx-auto'></div>
          <p className='mt-6 max-w-2xl mx-auto text-lg text-gray-600'>
            Descubra nuestras soluciones innovadoras diseñadas para la
            excelencia en procedimientos quirúrgicos de columna vertebral.
          </p>
        </div>

        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
          {productData.map((system) => (
            <div
              key={system.id}
              className='bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] border border-gray-100'
            >
              {system.components &&
                system.components.length > 0 &&
                system.components[0].image && (
                  <div className='relative w-full h-60 sm:h-64 bg-gray-100 flex items-center justify-center overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-t from-cyan-800/10 to-transparent'></div>
                    <img
                      src={system.previewImage || system.components[0].image}
                      alt={`Imagen de ${system.systemName}`}
                      className='object-contain w-full h-full p-4'
                      loading='lazy'
                    />
                    <div className='absolute top-3 left-3 bg-cyan-700 text-white px-3 py-1 rounded-full text-xs font-semibold'>
                      {system.systemName}
                    </div>
                  </div>
                )}
              <div className='p-8 flex flex-col flex-grow'>
                <h3 className='text-sm font-semibold text-cyan-700 uppercase tracking-wide'>
                  Sistema {system.systemName}
                </h3>
                <h4 className='mt-2 text-2xl font-bold text-gray-900 leading-tight'>
                  {system.systemTitle}
                </h4>
                <div className='w-16 h-1 bg-cyan-100 my-4'></div>
                <p className='text-gray-600 flex-grow line-clamp-3'>
                  {system.systemDescription}
                </p>
                <div className='mt-8 flex'>
                  <Link
                    to={`/products/${system.id}`}
                    className='flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-cyan-700 hover:bg-cyan-800 transition-colors w-full'
                  >
                    <span>Ver Detalles</span>
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
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className='text-center py-16 bg-cyan-700 rounded-2xl shadow-xl mt-20 max-w-5xl mx-auto'>
          <div className='px-8 max-w-3xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
              ¿Consultas o Asesoramiento?
            </h2>
            <p className='text-blue-100 mb-10 text-lg'>
              Nuestro equipo de especialistas está a su disposición para
              resolver todas sus dudas y ayudarle a elegir el sistema ideal para
              sus necesidades quirúrgicas.
            </p>
            <Link
              to='/contact'
              className='inline-flex items-center bg-white hover:bg-gray-50 text-cyan-700 font-semibold py-4 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out text-base'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mr-2'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
              </svg>
              Contactar a un Especialista
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;
