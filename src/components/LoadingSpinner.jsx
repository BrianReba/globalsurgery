import React from 'react';

const LoadingSpinner = ({
  size = 'md',
  variant = 'primary',
  text = '',
  fullScreen = false,
  className = '',
}) => {
  // Tamaños del spinner
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  // Variantes de color
  const variantClasses = {
    primary: 'border-cyan-600',
    secondary: 'border-gray-600',
    white: 'border-white',
    success: 'border-green-600',
    warning: 'border-yellow-600',
    danger: 'border-red-600',
  };

  // Tamaños de texto
  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  };

  const spinnerClasses = `
    ${sizeClasses[size]} 
    border-4 
    ${variantClasses[variant]} 
    border-t-transparent 
    rounded-full 
    animate-spin
  `.trim();

  const containerClasses = `
    flex flex-col items-center justify-center gap-3
    ${fullScreen ? 'fixed inset-0 bg-white bg-opacity-90 z-50' : ''}
    ${className}
  `.trim();

  return (
    <div className={containerClasses}>
      <div className={spinnerClasses} />
      {text && (
        <p className={`text-gray-600 font-medium ${textSizeClasses[size]}`}>
          {text}
        </p>
      )}
    </div>
  );
};

// Componente específico para overlay de pantalla completa
export const FullScreenLoader = ({ text = 'Cargando...' }) => (
  <LoadingSpinner
    size='xl'
    variant='primary'
    text={text}
    fullScreen={true}
  />
);

// Componente específico para botones
export const ButtonSpinner = ({ size = 'sm', variant = 'white' }) => (
  <LoadingSpinner
    size={size}
    variant={variant}
    className='inline-flex'
  />
);

// Componente específico para secciones
export const SectionLoader = ({ text = 'Cargando datos...', size = 'lg' }) => (
  <div className='flex items-center justify-center py-12'>
    <LoadingSpinner
      size={size}
      variant='primary'
      text={text}
    />
  </div>
);

export default LoadingSpinner;
