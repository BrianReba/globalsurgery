// src/index.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from 'react-router-dom';

// Contexto de Autenticación
import { AuthProvider } from './contexts/AuthContext'; 

// Componentes de Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Páginas Públicas
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PoliticasPage from './pages/PoliticasPage';
import ContactPage from './pages/ContactFormPage'; 
import ErrorPage from './pages/ErrorPage';

// Páginas de Backoffice/Auth
import LoginPage from './pages/LoginPage';
import BackofficePage from './pages/backend/BackofficePage';

import './index.css';

// Layout para las rutas públicas
const PublicLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};


const BackofficeLayoutWrapper = () => {
    return (
        <div className="min-h-screen flex flex-col pt-16">
            <Navbar />
            <main className="flex-grow p-4 md:p-8 bg-gradient-to-r from-gray-50 to-blue-100">
                <Outlet />
            </main>
        </div>
    );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />, 
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:systemId", element: <ProductDetailPage /> },
      { path: "politicas-terminos", element: <PoliticasPage /> },
      { path: "contact", element: <ContactPage /> },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/backoffice",
    element: <BackofficeLayoutWrapper />, 
    children: [
      { index: true, element: <BackofficePage /> }
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider>
);