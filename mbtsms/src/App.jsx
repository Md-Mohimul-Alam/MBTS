//App.jsx
import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { Toast } from './pages/UI/Toast';
import './styles/index.css';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRoutes />
        <Toast />  {/* This mounts the toast container globally */}
      </ThemeProvider>
    </>
  );
}

export default App;
