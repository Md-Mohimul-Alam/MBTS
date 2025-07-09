import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email');
      setStatus('');
      return;
    }

    // Simulate a password reset request
    setTimeout(() => {
      setStatus('A password reset link has been sent to your email.');
      setError('');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
        <img
          src="../asset/logo.png"
          alt="MBTSMS Logo"
          className="mx-auto h-20 w-20 object-contain"
        />
        <h2 className="text-2xl font-bold text-center text-mbts-orange mb-6">Forgot Password</h2>

        {status && <p className="text-green-600 mb-4 text-sm">{status}</p>}
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-mbts-orange text-white py-2 rounded hover:bg-mbts-orange transition"
          >
            Send Reset Link
          </button>
        </form>

        <div className="text-sm text-center mt-4">
          <button
            onClick={() => navigate('/')}
            className="text-mbts-orange hover:underline"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
