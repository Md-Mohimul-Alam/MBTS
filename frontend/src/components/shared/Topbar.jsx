import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Sling as Hamburger } from 'hamburger-react';
import { useTheme } from '../../context/ThemeContext';

const TopBar = ({ onToggleSidebar, sidebarCollapsed }) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

const logoSrc = theme === 'light' ? '/asset/logo.png' : '/asset/logo2.png';
  return (
    <header
      className={`shadow sticky top-0 z-100
        ${theme === 'dark' ? 'bg-mbts-blue text-mbts-light' : 'bg-white text-gray-900'}
      `}
    >
      <div className="w-full h-16 flex items-center justify-between px-4 md:px-8">
        {/* Logo + Hamburger */}
        <div className="flex items-center space-x-2">
          <div className={`${theme === 'dark' ? 'bg-mbts-blue' : 'bg-white'} mr-2`}>
            <Hamburger
              size={24}
              color={theme === 'dark' ? '#F1FAEE' : '#1D3557'}
              toggled={!sidebarCollapsed}
              toggle={onToggleSidebar}
            />
          </div>

          <div
            className={`p-1 flex items-center justify-center h-14 w-20 ${
              theme === 'dark' ? 'bg-mbts-blue' : 'bg-white'
            }`}
          >
            <img
              src={logoSrc}
              alt="MBTSMS Logo"
              className="mx-auto object-contain overflow-hidden"
            />
          </div>

          <span
            className={`text-xl font-bold transition hidden md:inline ${
                theme === 'dark'
                ? 'text-mbts-orange'
                : 'text-mbts-orange'
            }`}
            >
            MS. Barkat Transport Service
        </span>

        </div>



        {/* Navigation Links 
        <nav className="space-x-4 hidden md:flex">
          {['Dashboard', 'Settings', 'Notifications'].map((label) => (
            <Link
              key={label}
              to={`/app/${label.toLowerCase()}${label === 'Dashboard' ? '-dashboard' : ''}`}
              className={`font-medium transition ${
                theme === 'dark'
                  ? 'text-mbts-light hover:text-mbts-orange'
                  : 'text-gray-900 hover:text-mbts-orange'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        */}

        {/* Profile / Logout / Theme Toggle */}
        <div className="flex items-center space-x-4">
          <span
            className={`${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            } text-sm hidden sm:inline`}
          >
            Welcome, {user?.name || 'User'}
          </span>

          <button
            onClick={handleLogout}
            className={`px-3 py-1 rounded text-sm transition ${
              theme === 'dark'
                ? 'bg-mbts-orange hover:bg-mbts-orangeHover text-white'
                : 'bg-mbts-orange hover:bg-mbts-orangeHover text-white'
            }`}
          >
            Logout
          </button>

          <button
            onClick={toggleTheme}
            className={`px-3 py-1 h-15 w-15 text-lg transition ${
              theme === 'dark'
                ? 'bg-transparent text-white hover:text-mbts-blue'
                : 'bg-transparent text-gray-900 hover:text-mbts-blue'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
