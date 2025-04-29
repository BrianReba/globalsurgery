import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href='https://api.whatsapp.com/send?phone=541135646504'
      target='_blank'
      rel='noopener noreferrer'
      className='bg-green-500 hover:bg-green-400 text-white  text-2xl hover:text-white hover:border-2 hover:border-green-500 hover:border-solid font-bold p-4 sm:p-5 lg:p-6 rounded-full fixed bottom-4 right-4 z-10 transition duration-100'
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
