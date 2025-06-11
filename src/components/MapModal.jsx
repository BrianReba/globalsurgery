import React from 'react';
import { FaTimes } from 'react-icons/fa';

const MapModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Dirección completa para Google Maps
  const address =
    'Av Rivadavia 2431, entrada 1 piso 3 oficina 8, Buenos Aires, Argentina';
  const encodedAddress = encodeURIComponent(address);
  // Usando Google Maps sin API key - versión básica que funciona
  const mapSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Overlay */}
      <div
        className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className='relative bg-white rounded-lg shadow-2xl w-11/12 max-w-4xl h-[80vh] max-h-[600px] flex flex-col'>
        {/* Header */}
        <div className='flex items-center justify-between p-4 border-b border-gray-200'>
          <div>
            <h3 className='text-lg font-semibold text-gray-900'>
              Nuestra Ubicación
            </h3>
            <p className='text-sm text-gray-600 mt-1'>
              Av Rivadavia 2431, entrada 1 piso 3 oficina 8
            </p>
          </div>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100'
            aria-label='Cerrar mapa'
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Map Container */}
        <div className='flex-1 p-4'>
          <iframe
            src={mapSrc}
            className='w-full h-full rounded-lg border border-gray-200'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='Ubicación de Global Surgery'
          />
        </div>

        {/* Footer */}
        <div className='p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg'>
          <div className='flex flex-col sm:flex-row gap-3'>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-1 bg-cyan-700 hover:bg-cyan-800 text-white px-4 py-2 rounded-md text-center font-medium transition-colors duration-200'
            >
              Abrir en Google Maps
            </a>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-center font-medium transition-colors duration-200'
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapModal;
