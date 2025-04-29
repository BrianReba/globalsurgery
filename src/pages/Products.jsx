import React from 'react';
import { Link } from 'react-router-dom';
import productData from '../utils/productData';

const SpecificationTable = ({ title, headers, rows, note }) => (
  <div className='mb-8 overflow-hidden'>
    {' '}
    <h4 className='text-lg font-semibold text-gray-800 mb-3'>{title}</h4>
    <div className='shadow border-b border-gray-200 sm:rounded-lg overflow-x-auto'>
      {' '}
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
                  {typeof row[header] === 'boolean' && row[header] === true
                    ? '✓'
                    : row[header]}
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

const ProductsPage = () => {
  return (
    // Main Page Container
    <div className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-16 md:mt-20'>
      {' '}
      {/* Added top margin for fixed navbar */}
      <div className='max-w-7xl mx-auto'>
        {/* Page Title */}
        <div className='text-center mb-12'>
          <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight'>
            Nuestros Sistemas Quirúrgicos
          </h1>
          <p className='mt-4 max-w-2xl mx-auto text-lg text-gray-600'>
            Tecnología avanzada y precisión para resultados quirúrgicos
            superiores.
          </p>
        </div>

        {/* Loop through each product system */}
        {productData.map((system, systemIndex) => (
          <React.Fragment key={system.id}>
            {systemIndex > 0 && (
              <hr className='my-12 md:my-16 border-gray-300' />
            )}

            {/* System Section */}
            <section
              id={system.id}
              className='mb-12 md:mb-16'
            >
              {/* System Header */}
              <div className='mb-8 text-center md:text-left'>
                <h2 className='text-sm font-semibold text-cyan-700 uppercase tracking-wide'>
                  {system.systemName}
                </h2>
                <h3 className='mt-1 text-2xl sm:text-3xl font-bold text-gray-900'>
                  {system.systemTitle}
                </h3>
                <p className='mt-3 max-w-3xl mx-auto md:mx-0 text-base text-gray-600'>
                  {system.systemDescription}
                </p>
              </div>

              {/* System Components (Alternating Layout) */}
              <div className='space-y-10 md:space-y-12'>
                {system.components.map((component, componentIndex) => (
                  <div
                    key={component.id}
                    className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'
                  >
                    {/* Image Column */}
                    <div
                      className={`w-full ${
                        componentIndex % 2 !== 0 ? 'md:order-last' : ''
                      }`}
                    >
                      <img
                        src={component.image}
                        alt={component.altText}
                        className='rounded-lg shadow-lg object-contain w-full h-auto max-h-96 mx-auto'
                        loading='lazy'
                      />
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
                    </div>
                  </div>
                ))}
              </div>

              {/* Instrumentation Section */}
              {system.instrumentation &&
                system.instrumentation.images?.length > 0 && (
                  <div className='mt-10 md:mt-12 pt-8 border-t border-gray-200'>
                    <h4 className='text-xl font-semibold text-gray-900 mb-3'>
                      {system.instrumentation.title}
                    </h4>
                    <p className='text-gray-600 mb-6'>
                      {system.instrumentation.description}
                    </p>
                    {/* Grid para los contenedores de imagen */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                      {system.instrumentation.images.map((img) => (
                        // --- Contenedor con Aspect Ratio Fijo ---
                        <div
                          key={img.id}
                          className='aspect-square bg-white border border-gray-200 rounded-md shadow-md p-2 flex items-center justify-center overflow-hidden'
                        >
                          {/* Imagen con object-contain dentro del contenedor */}
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

              {/* Specifications Section */}
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
          </React.Fragment>
        ))}

        <section className='text-center py-12 md:py-16 bg-gradient-to-r from-cyan-700 to-blue-700 rounded-lg shadow-lg mt-12 md:mt-16'>
          <h2 className='text-2xl sm:text-3xl font-bold text-white mb-4 px-4'>
            ¿Necesita información detallada o asesoramiento?
          </h2>
          <p className='text-blue-100 mb-8 max-w-xl mx-auto px-4'>
            Nuestro equipo está listo para ayudarte a encontrar la solución
            adecuada para sus necesidades.
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

export default ProductsPage;
