import React, { useState } from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { login as loginService } from '../services/authServices';
import logo from '../assets/logo-global-surgery.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { loginContext, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/backoffice';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const data = await loginService(email, password);
      loginContext(data.user, data.access_token);
      navigate(from, { replace: true });
    } catch (err) {
      setError(
        err.message || 'Error al iniciar sesión. Verifique sus credenciales.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated) {
    return (
      <Navigate
        to={from}
        replace
      />
    );
  }

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='relative w-full md:w-1/2 h-1/3 md:h-screen hidden md:block overflow-hidden'>
        {' '}
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute top-0 left-0 w-full h-full object-cover opacity-20 md:opacity-25'
        >
          <source
            src='/lowqualy-columna.mp4'
            type='video/mp4'
          />
        </video>
      </div>

      <div className='w-full md:w-1/2 bg-cyan-700 flex flex-1 md:flex-initial items-center justify-center p-6 sm:p-8 md:p-12'>
        <div className='max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-xl shadow-2xl'>
          <div>
            <img
              className='mx-auto h-14 sm:h-16 w-auto'
              src={logo}
              alt='Global Surgery'
            />
            <h2 className='mt-6 text-center text-2xl sm:text-3xl font-bold tracking-tight text-gray-900'>
              Iniciar Sesión
              <span className='block text-cyan-700 text-lg font-medium'>
                ¡Hola!, inserta tus credenciales
              </span>
            </h2>
          </div>
          <form
            className='mt-8 space-y-6'
            onSubmit={handleSubmit}
          >
            <div className='rounded-md -space-y-px'>
              <div>
                <label
                  htmlFor='email-address'
                  className='sr-only'
                >
                  Email
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm transition-shadow mb-2'
                  placeholder='Correo electrónico'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='sr-only'
                >
                  Contraseña
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm transition-shadow'
                  placeholder='Contraseña'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded-md text-sm mt-4'>
                <p className='font-medium'>Error:</p>
                <p>{error}</p>
              </div>
            )}

            <div className='pt-2'>
              <button
                type='submit'
                disabled={isLoading}
                className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:bg-gray-400 disabled:opacity-70 transition-all duration-150 ease-in-out'
              >
                {isLoading ? (
                  <svg className='animate-spin h-5 w-5 text-white'></svg>
                ) : (
                  'Ingresar'
                )}
              </button>
            </div>
          </form>
          <p className='mt-8 text-center text-xs text-gray-500'>
            {' '}
            Acceso restringido a personal autorizado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
