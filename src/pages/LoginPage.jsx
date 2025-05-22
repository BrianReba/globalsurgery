import React, { useState } from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { login as loginService } from '../services/authServices'; // Asume que tienes esta función
import logo from '../assets/logo-global-surgery.png'; // O el logo que quieras para el login

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { loginContext, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // De dónde venía el usuario antes de llegar al login (o al dashboard por defecto)
  const from = location.state?.from?.pathname || '/backoffice';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const data = await loginService(email, password); // authServices.js llamará a tu API
      loginContext(data.user, data.access_token); // Actualiza el contexto
      navigate(from, { replace: true }); // Redirige a la página original o al dashboard
    } catch (err) {
      setError(
        err.message || 'Error al iniciar sesión. Verifique sus credenciales.'
      );
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Si ya está autenticado, redirigir
  if (isAuthenticated) {
    return (
      <Navigate
        to={from}
        replace
      />
    );
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl'>
        <div>
          <img
            className='mx-auto h-16 w-auto'
            src={logo}
            alt='Global Surgery'
          />
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Iniciar Sesión - Backoffice
          </h2>
        </div>
        <form
          className='mt-8 space-y-6'
          onSubmit={handleSubmit}
        >
          <input
            type='hidden'
            name='remember'
            defaultValue='true'
          />
          <div className='rounded-md shadow-sm -space-y-px'>
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
                className='appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm'
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
                className='appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm'
                placeholder='Contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded text-sm'>
              <p>{error}</p>
            </div>
          )}

          <div>
            <button
              type='submit'
              disabled={isLoading}
              className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:bg-gray-400'
            >
              {isLoading ? (
                <svg
                  className='animate-spin h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              ) : (
                'Ingresar'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
