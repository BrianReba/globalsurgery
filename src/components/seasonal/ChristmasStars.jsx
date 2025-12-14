// src/components/seasonal/ChristmasStars.jsx
// NAVIDAD - Remover este archivo después de temporada
import React from 'react';

// Configuraciones de estrellas para diferentes secciones
const starConfigs = {
  hero: [
    // Izquierda
    { top: '12%', left: '3%', size: 'text-2xl', delay: '0s', opacity: 'opacity-90' },
    { top: '22%', left: '8%', size: 'text-sm', delay: '0.5s', opacity: 'opacity-60' },
    { top: '35%', left: '2%', size: 'text-lg', delay: '1.1s', opacity: 'opacity-70' },
    { top: '50%', left: '6%', size: 'text-xs', delay: '0.3s', opacity: 'opacity-50' },
    { top: '65%', left: '4%', size: 'text-base', delay: '0.8s', opacity: 'opacity-65' },
    { top: '78%', left: '9%', size: 'text-sm', delay: '1.4s', opacity: 'opacity-55' },
    // Derecha
    { top: '10%', right: '4%', size: 'text-xl', delay: '0.2s', opacity: 'opacity-85' },
    { top: '25%', right: '7%', size: 'text-xs', delay: '0.9s', opacity: 'opacity-55' },
    { top: '40%', right: '2%', size: 'text-lg', delay: '0.4s', opacity: 'opacity-75' },
    { top: '55%', right: '8%', size: 'text-sm', delay: '1.2s', opacity: 'opacity-60' },
    { top: '70%', right: '3%', size: 'text-base', delay: '0.6s', opacity: 'opacity-70' },
    { top: '85%', right: '6%', size: 'text-xs', delay: '1.0s', opacity: 'opacity-50' },
  ],
  section: [
    // Distribuidas por toda la sección
    { top: '5%', left: '2%', size: 'text-lg', delay: '0s', opacity: 'opacity-70' },
    { top: '15%', left: '8%', size: 'text-xs', delay: '0.4s', opacity: 'opacity-50' },
    { top: '30%', left: '3%', size: 'text-sm', delay: '0.8s', opacity: 'opacity-60' },
    { top: '50%', left: '6%', size: 'text-base', delay: '1.2s', opacity: 'opacity-65' },
    { top: '75%', left: '4%', size: 'text-xs', delay: '0.2s', opacity: 'opacity-55' },
    { top: '8%', right: '3%', size: 'text-base', delay: '0.6s', opacity: 'opacity-65' },
    { top: '25%', right: '7%', size: 'text-sm', delay: '1.0s', opacity: 'opacity-55' },
    { top: '45%', right: '2%', size: 'text-lg', delay: '0.3s', opacity: 'opacity-70' },
    { top: '65%', right: '5%', size: 'text-xs', delay: '0.9s', opacity: 'opacity-50' },
    { top: '85%', right: '8%', size: 'text-sm', delay: '1.4s', opacity: 'opacity-60' },
  ],
  sparse: [
    { top: '10%', left: '3%', size: 'text-base', delay: '0.2s', opacity: 'opacity-60' },
    { top: '30%', left: '7%', size: 'text-xs', delay: '0.8s', opacity: 'opacity-45' },
    { top: '60%', left: '4%', size: 'text-sm', delay: '0.5s', opacity: 'opacity-55' },
    { top: '15%', right: '4%', size: 'text-sm', delay: '0.7s', opacity: 'opacity-55' },
    { top: '45%', right: '6%', size: 'text-xs', delay: '0.3s', opacity: 'opacity-50' },
    { top: '80%', right: '3%', size: 'text-base', delay: '1.0s', opacity: 'opacity-60' },
  ],
  // Para sección con fondo oscuro - estrellas blancas
  dark: [
    { top: '5%', left: '2%', size: 'text-lg', delay: '0s', opacity: 'opacity-80', color: 'text-white' },
    { top: '18%', left: '7%', size: 'text-xs', delay: '0.5s', opacity: 'opacity-55', color: 'text-white' },
    { top: '35%', left: '3%', size: 'text-sm', delay: '0.9s', opacity: 'opacity-65', color: 'text-white' },
    { top: '55%', left: '6%', size: 'text-base', delay: '0.3s', opacity: 'opacity-70', color: 'text-white' },
    { top: '75%', left: '4%', size: 'text-xs', delay: '1.2s', opacity: 'opacity-50', color: 'text-white' },
    { top: '8%', right: '3%', size: 'text-base', delay: '0.4s', opacity: 'opacity-70', color: 'text-white' },
    { top: '25%', right: '8%', size: 'text-sm', delay: '0.8s', opacity: 'opacity-60', color: 'text-white' },
    { top: '48%', right: '2%', size: 'text-lg', delay: '0.2s', opacity: 'opacity-75', color: 'text-white' },
    { top: '68%', right: '6%', size: 'text-xs', delay: '1.0s', opacity: 'opacity-55', color: 'text-white' },
    { top: '88%', right: '4%', size: 'text-sm', delay: '0.6s', opacity: 'opacity-60', color: 'text-white' },
  ],
};

const ChristmasStars = ({ variant = 'section' }) => {
  const stars = starConfigs[variant] || starConfigs.section;

  return (
    <>
      {stars.map((star, index) => (
        <div
          key={index}
          className={`absolute ${star.size} ${star.opacity} ${star.color || 'text-yellow-400'} animate-christmas-sparkle pointer-events-none`}
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            animationDelay: star.delay,
          }}
          aria-hidden="true"
        >
          ★
        </div>
      ))}
    </>
  );
};

export default ChristmasStars;
