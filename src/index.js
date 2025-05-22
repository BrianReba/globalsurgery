// src/index.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
  Navigate
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
        <div className="min-h-screen flex flex-col pt-16"> {/* pt-16 para la navbar fija */}
            {/* <BackofficeNavbar /> Opcional */}
            <main className="flex-grow p-4 md:p-8">
                <Outlet />
            </main>
            {/* <BackofficeFooter /> Opcional */}
        </div>
    );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />, // Layout para todas las rutas públicas hijas
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
    // Ruta base para el backoffice (aún no protegida)
    path: "/backoffice",
    element: <BackofficeLayoutWrapper />, 
    children: [
      // { index: true, element: <Navigate to="budgets" replace /> }, // Redirige a budgets por defecto
      // { path: "budgets", element: <BackofficePage /> }, // Descomenta cuando BackofficePage esté lista
      // Por ahora, para testear, puedes poner un placeholder:
      { index: true, element: <BackofficePage /> }
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);