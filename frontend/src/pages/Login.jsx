// src/pages/Login.jsx

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DropdownMenu from './UI/dropdown';
import { notifySuccess, notifyError } from './UI/Toast';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password && selectedRole) {
      const user = {
        name: 'Demo User',
        role: selectedRole,
        token: 'demo-token',
        email,
      };

      login(user, rememberMe); // Login context handles storage

      notifySuccess('Login successful! Redirecting...');

      // ✅ Redirect based on role to /app/* structure
      switch (user.role.toLowerCase()) {
        case 'admin-dashboard':
            navigate('/app/admin-dashboard');
            break;
        case 'manager-dashboard':
            navigate('/app/manager-dashboard');
            break;
        case 'employee-dashboard':
            navigate('/app/employee-dashboard');
            break;
        default:
            navigate('/unauthorized');
        }
        } else {
      setError('Please enter email, password, and select a role');
      notifyError('Please enter email, password, and select a role');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
        <img
          src="../asset/logo.png"
          alt="MBTSMS Logo"
          className="mx-auto h-20 w-20 object-contain"
        />

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <DropdownMenu
              buttonLabel="Select Role"
              items={[
                { label: 'Admin', value: 'admin-dashboard' },
                { label: 'Branch Manager', value: 'manager-dashboard' },
                { label: 'Employee', value: 'employee-dashboard' },
              ]}
              onSelect={(role) => setSelectedRole(role)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-blue-600"
              />
              <span>Remember Me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
