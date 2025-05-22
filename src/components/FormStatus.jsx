import React from 'react';

const FormStatus = ({ submitStatus }) => {
  if (!submitStatus.success && !submitStatus.error) return null;
  
  return (
    <>
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
    </>
  );
};

export default FormStatus; 