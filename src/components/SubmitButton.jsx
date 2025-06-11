import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { ButtonSpinner } from './LoadingSpinner';

const SubmitButton = ({ isSubmitting }) => {
  return (
    <button
      type='submit'
      disabled={isSubmitting}
      className={`w-full inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-sm text-base font-semibold rounded-lg transition duration-150 ease-in-out ${
        isSubmitting
          ? 'bg-gray-400 text-gray-800 cursor-not-allowed'
          : 'bg-white text-cyan-700 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white'
      }`}
    >
      {isSubmitting ? (
        <ButtonSpinner variant='primary' />
      ) : (
        <FaPaperPlane
          className='-ml-1 mr-2 h-5 w-5'
          aria-hidden='true'
        />
      )}
      {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
    </button>
  );
};

export default SubmitButton;
