import { FaFilePdf, FaLandmark, FaExternalLinkAlt } from 'react-icons/fa';
import {
  IoShieldCheckmarkOutline,
  IoDocumentTextOutline,
  IoRibbonOutline,
} from 'react-icons/io5';

import certificadosData from '../utils/certificadosData';

const CertificadosPage = () => {
  const getIconForCertificate = (certificado) => {
    if (certificado.logoImage) return null;

    if (certificado.id.includes('anmat-importador'))
      return (
        <IoShieldCheckmarkOutline
          size={36}
          className='text-cyan-700'
        />
      );
    if (certificado.id.includes('anmat-distribuidor'))
      return (
        <IoRibbonOutline
          size={36}
          className='text-cyan-700'
        />
      );
    if (certificado.id.includes('ministerio'))
      return (
        <FaLandmark
          size={32}
          className='text-cyan-700'
        />
      );
    if (certificado.id === 'cadit-membresia')
      return (
        <img
          src='/certificados/logo-cadit.png'
          width={50}
          height={50}
          alt='Logo CADIT'
        />
      );
    return (
      <IoDocumentTextOutline
        size={36}
        className='text-cyan-700'
      />
    );
  };

  return (
    <div className='bg-gradient-to-b from-gray-100 to-blue-100 py-20 px-4 sm:px-6 lg:px-8 mt-16 md:mt-20 min-h-[calc(100vh-theme(space.36))]'>
      {' '}
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-16'>
          <span className='inline-block bg-cyan-100 text-cyan-800 font-medium px-4 py-1.5 rounded-full text-sm mb-4 shadow-sm'>
            Cumplimiento y Calidad
          </span>
          <h1 className='text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight leading-tight'>
            Certificaciones y Habilitaciones
          </h1>
          <div className='mt-5 w-28 h-1.5 bg-cyan-600 mx-auto rounded-full'></div>{' '}
          <p className='mt-8 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed'>
            En Global Surgery, operamos bajo los más altos estándares de calidad
            y cumplimiento normativo. A continuación, encontrará nuestras
            habilitaciones y certificaciones clave que respaldan nuestra
            dedicación a la excelencia y la seguridad en el suministro de
            productos médicos.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {certificadosData.map((certificado) => (
            <div
              key={certificado.id}
              className='bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col items-center text-center p-8 transition-all duration-300 hover:shadow-2xl hover:border-cyan-400 hover:scale-105'
            >
              <div className='mb-6 flex-shrink-0 h-12 flex items-center justify-center'>
                {certificado.logoImage ? (
                  <img
                    src={certificado.logoImage}
                    alt={`${certificado.titulo} Logo`}
                    className='max-h-12 w-auto object-contain'
                  />
                ) : (
                  getIconForCertificate(certificado)
                )}
              </div>

              <h3 className='text-xl font-semibold text-gray-800 mb-3 leading-tight'>
                {certificado.titulo}
              </h3>

              {certificado.descripcion && (
                <p className='text-sm text-gray-600 mb-6 flex-grow px-2'>
                  {certificado.descripcion}
                </p>
              )}

              {/* Botón o Enlace */}
              {certificado.isExternalLink ? (
                <a
                  href={certificado.urlDelSitio}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-auto w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors shadow-md hover:shadow-lg'
                >
                  Visitar Sitio <FaExternalLinkAlt className='ml-2 h-4 w-4' />
                </a>
              ) : (
                <a
                  href={certificado.urlDelPdf}
                  target='_blank'
                  rel='noopener noreferrer'
                  download={certificado.nombreArchivoDescarga}
                  className='mt-auto w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors shadow-md hover:shadow-lg'
                >
                  <FaFilePdf className='mr-2 -ml-1 h-5 w-5' />
                  Ver Documento
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificadosPage;
