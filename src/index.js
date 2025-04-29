// src/index.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation
} from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import PoliticasPage from './pages/PoliticasPage';
import ContactPage from './pages/ContactFormPage';
import ErrorPage from './pages/ErrorPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './index.css'; 


const RootLayout = () => {
  const { pathname } = useLocation();
  //Scroll fix ?
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",             
    element: <RootLayout />, 
    errorElement: <ErrorPage />,
    children: [           
      {
        index: true,        
        element: <Home />
      },
      {
        path: "products",   
        element: <Products />
      },
      {
        path: "politicas-terminos",
        element: <PoliticasPage />
      },
      {
        path: "contact",    
        element: <ContactPage />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);