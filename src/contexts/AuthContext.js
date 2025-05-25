// src/contexts/AuthContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; 
import { getCurrentUser, getAccessToken, logout as authLogout } from '../services/authServices';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = getAccessToken();
    
    if (storedToken) {
      try {
        const decodedToken = jwtDecode(storedToken);
        const currentTime = Date.now() / 1000; 

        if (decodedToken.exp < currentTime) {
          
          authLogout();
          setUser(null);
          setToken(null);
        } else {
          const storedUser = getCurrentUser();
          setUser(storedUser);
          setToken(storedToken);
        }
      } catch (error) {
        
        authLogout();
        setUser(null);
        setToken(null);
      }
    } else {
      
      setUser(null);
      setToken(null);
    }
    setIsLoading(false); 
  }, []);

  const loginContext = (userData, accessToken) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setToken(accessToken);
    setIsLoading(false); 
  };

  const logoutContext = () => {
    authLogout(); 
    setUser(null);
    setToken(null);
  };

  // VALOR DEL CONTEXTO
  const contextValue = {
    user,
    token,
    loginContext,
    logoutContext,
    isLoading, 
    isAuthenticated: !!token && !isLoading 
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {isLoading ? <div className='text-center p-20'>Cargando autenticación...</div> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};