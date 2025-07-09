// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // On mount, load user from storage
  useEffect(() => {
    const storedUser =
      JSON.parse(localStorage.getItem('mbtsms-user')) ||
      JSON.parse(sessionStorage.getItem('mbtsms-user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Pass rememberMe flag to login so storage can be handled here
  const login = (userData, rememberMe = false) => {
    setUser(userData);
    if (rememberMe) {
      localStorage.setItem('mbtsms-user', JSON.stringify(userData));
      sessionStorage.removeItem('mbtsms-user');
    } else {
      sessionStorage.setItem('mbtsms-user', JSON.stringify(userData));
      localStorage.removeItem('mbtsms-user');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mbtsms-user');
    sessionStorage.removeItem('mbtsms-user');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
