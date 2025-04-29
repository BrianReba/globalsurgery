import React from 'react';

const PoliticasPage = () => {
  const companyName = 'Global Surgery';
  const effectiveDate = '29 de abril de 2025';
  const contactEmail = 'Jime.padilla.14@gmail.com';

  return (
    <>
      <div className='bg-white py-12 px-4 sm:px-6 lg:px-8 mt-8'>
        <div className='max-w-3xl mx-auto text-gray-700'>
          <h1 className='text-3xl font-bold text-gray-900 mb-6 text-center'>
            Políticas de Privacidad y Términos y Condiciones
          </h1>
          <p className='text-sm text-gray-500 mb-8 text-center'>
            Última actualización: {effectiveDate}
          </p>

          {/* --- Sección Política de Privacidad --- */}
          <section className='mb-10'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
              Política de Privacidad
            </h2>
            <p className='mb-4'>
              En {companyName}, respetamos su privacidad y nos comprometemos a
              proteger sus datos personales. Esta política explica cómo
              recopilamos, usamos, compartimos y protegemos su información
              cuando visita nuestro sitio web.
            </p>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              Información que Recopilamos
            </h3>
            <p className='mb-3'>
              Podemos recopilar información personal identificable (como nombre,
              email, teléfono) únicamente cuando usted nos la proporciona
              voluntariamente (ej., a través de formularios de contacto).
              También podemos recopilar información no personal (como tipo de
              navegador, páginas visitadas, dirección IP anonimizada) para
              análisis estadísticos y mejora del sitio.
            </p>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              Uso de la Información
            </h3>
            <p className='mb-3'>Utilizamos la información recopilada para:</p>
            <ul className='list-disc list-inside mb-3 pl-4'>
              <li>Responder a sus consultas y solicitudes.</li>
              <li>Mejorar nuestro sitio web y servicios.</li>
              <li>Cumplir con obligaciones legales.</li>
              <li>
                Enviar comunicaciones (si usted ha optado por recibirlas).
              </li>
            </ul>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              Compartir Información
            </h3>
            <p className='mb-3'>
              No vendemos ni alquilamos su información personal. Podemos
              compartirla con proveedores de servicios de confianza que nos
              asisten en la operación del sitio web (bajo acuerdos de
              confidencialidad) o si la ley lo requiere.
            </p>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              Seguridad de los Datos
            </h3>
            <p className='mb-3'>
              Implementamos medidas de seguridad razonables para proteger su
              información, pero ninguna transmisión por Internet es 100% segura.
            </p>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              Sus Derechos
            </h3>
            <p className='mb-3'>
              Usted tiene derecho a acceder, corregir o eliminar su información
              personal. Contáctenos en{' '}
              <a
                href={`mailto:${contactEmail}`}
                className='text-cyan-700 hover:underline'
              >
                {contactEmail}
              </a>{' '}
              para ejercer estos derechos.
            </p>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              Cookies
            </h3>
            <p className='mb-3'>
              Utilizamos cookies esenciales y, potencialmente, de análisis para
              mejorar la experiencia del usuario. Puede gestionar las cookies a
              través de la configuración de su navegador.
            </p>
          </section>

          {/* --- Sección Términos y Condiciones --- */}
          <section>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
              Términos y Condiciones de Uso
            </h2>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              Aceptación de los Términos
            </h3>
            <p className='mb-3'>
              Al acceder y utilizar este sitio web, usted acepta estar sujeto a
              estos Términos y Condiciones y a nuestra Política de Privacidad.
              Si no está de acuerdo, por favor no utilice el sitio.
            </p>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              Uso del Sitio
            </h3>
            <p className='mb-3'>
              Se le concede una licencia limitada para acceder y hacer uso
              personal del sitio. No está permitido descargar (excepto caché de
              página) o modificarlo, ni ninguna porción de él, sin el
              consentimiento expreso por escrito de {companyName}. El uso
              indebido o no autorizado puede dar lugar a reclamaciones por daños
              y/o ser un delito penal.
            </p>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              Propiedad Intelectual
            </h3>
            <p className='mb-3'>
              Todo el contenido incluido en este sitio (texto, gráficos, logos,
              imágenes, etc.) es propiedad de {companyName} o sus proveedores de
              contenido y está protegido por las leyes de derechos de autor y
              propiedad intelectual.
            </p>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              Exclusión de Garantías y Limitación de Responsabilidad
            </h3>
            <p className='mb-3'>
              Este sitio se proporciona "tal cual". {companyName} no ofrece
              garantías de ningún tipo, expresas o implícitas, sobre la
              operación del sitio o la información, contenido o materiales
              incluidos. Usted acepta expresamente que el uso de este sitio es
              bajo su propio riesgo. {companyName} no será responsable por daños
              de ningún tipo derivados del uso de este sitio.
            </p>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              Enlaces a Terceros
            </h3>
            <p className='mb-3'>
              Este sitio puede contener enlaces a sitios web de terceros. No
              somos responsables por el contenido o las prácticas de privacidad
              de dichos sitios.
            </p>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              Modificaciones
            </h3>
            <p className='mb-3'>
              {companyName} se reserva el derecho de modificar estos términos y
              políticas en cualquier momento. Las modificaciones serán efectivas
              inmediatamente después de su publicación en el sitio web.
            </p>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              Ley Aplicable
            </h3>
            <p className='mb-3'>
              Estos términos se regirán e interpretarán de acuerdo con las leyes
              de [Su Jurisdicción/País - Ej: Argentina], sin dar efecto a ningún
              principio de conflicto de leyes.
            </p>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              Contacto
            </h3>
            <p>
              Si tiene alguna pregunta sobre estas Políticas o Términos, por
              favor contáctenos a{' '}
              <a
                href={`mailto:${contactEmail}`}
                className='text-cyan-700 hover:underline'
              >
                {contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PoliticasPage;
