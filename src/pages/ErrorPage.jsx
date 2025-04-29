import React from 'react';
import { useRouteError, Link, isRouteErrorResponse } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

const ErrorPage = () => {
  const error = useRouteError();
  console.error('Router Error:', error);

  let status = 500;
  let statusText = 'An unexpected error occurred.';
  let message = 'Sorry, something went wrong on our end.';

  if (isRouteErrorResponse(error)) {
    status = error.status;
    statusText = error.statusText;
    if (error.status === 404) {
      message = 'Oops! La pagina que estas buscando no existe.';
    } else {
      message =
        error.data?.message ||
        'An error occurred while processing your request.';
    }
  } else if (error instanceof Error) {
    // Handle standard JavaScript errors
    message = error.message;
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-orange-50 text-center px-4'>
      <FaExclamationTriangle className='text-7xl text-red-400 mb-6' />
      <h1 className='text-4xl sm:text-5xl font-bold text-red-600 mb-2'>
        {status} {statusText}
      </h1>
      <p className='text-lg sm:text-xl text-gray-700 mb-8 max-w-md'>
        {message}
      </p>
      <Link
        to='/'
        className='inline-flex items-center px-6 py-3 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out'
      >
        <FaHome className='mr-2' />
        Volver al Inicio
      </Link>
      {/* BORRAR PARA PRODUCCION*/}
      {process.env.NODE_ENV === 'development' && (
        <pre className='mt-6 text-xs text-left bg-gray-100 p-4 rounded overflow-auto max-w-xl text-red-800'>
          {error instanceof Error
            ? error.stack
            : JSON.stringify(error, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default ErrorPage;
