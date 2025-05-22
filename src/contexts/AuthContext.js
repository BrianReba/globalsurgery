// src/contexts/AuthContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import { getCurrentUser, getAccessToken, logout as authLogout } from '../services/authServices';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const storedUser = getCurrentUser();
    const storedToken = getAccessToken();
    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }
    setIsLoading(false);
  }, []);

  const loginContext = (userData, accessToken) => {
    setUser(userData);
    setToken(accessToken);
  };

  const logoutContext = () => {
    authLogout();
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loginContext, logoutContext, isLoading, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);