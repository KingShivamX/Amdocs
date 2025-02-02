import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../common/LoadingSpinner';
import { authAPI } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageReady, setPageReady] = useState(false);
  const [error, setError] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showForgotPasswordHint, setShowForgotPasswordHint] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [resetEmail, setResetEmail] = useState('');

  const { login } = useAuth();

  useEffect(() => {
    setPageReady(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Reset the hint when user starts typing again
    setShowForgotPasswordHint(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const response = await authAPI.login(formData);
      localStorage.setItem('token', response.data.token);
      login(response.data.user);
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.error || 'Login failed');
      // Show the forgot password hint when login fails
      setShowForgotPasswordHint(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // TODO: Implement reset password logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      console.log('Reset password for:', resetEmail);
      setShowResetPassword(false);
    } catch (error) {
      console.error('Reset password error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!pageReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (showResetPassword) {
    return (
      <div className="mt-8 space-y-6">
        <div className="mb-6">
          <button
            type="button"
            onClick={() => setShowResetPassword(false)}
            className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
          >
            <svg 
              className="mr-2 h-4 w-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to login
          </button>
        </div>

        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              id="reset-email"
              name="email"
              type="email"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="you@example.com"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button
            onClick={handleResetPassword}
            disabled={isLoading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            {isLoading ? <LoadingSpinner size="small" /> : 'Reset Password'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      <div className="rounded-md shadow-sm space-y-4">
        <div>
          <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
        >
          {isLoading ? <LoadingSpinner size="small" /> : 'Sign in'}
        </button>
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={() => setShowResetPassword(true)}
          className={`
            text-sm font-medium text-indigo-600 hover:text-indigo-500 
            transition-all duration-500 relative
            ${showForgotPasswordHint ? `
              after:content-[''] after:absolute after:-bottom-1 after:left-0 
              after:w-full after:h-0.5 after:bg-indigo-600
              after:transition-transform after:duration-300
              after:scale-x-100 after:origin-center
              shadow-sm -translate-y-0.5
            ` : `
              after:content-[''] after:absolute after:-bottom-1 after:left-0 
              after:w-full after:h-0.5 after:bg-indigo-600
              after:transition-transform after:duration-300
              after:scale-x-0
            `}
          `}
        >
          <span className={`inline-flex items-center gap-1 ${showForgotPasswordHint ? 'text-indigo-700' : ''}`}>
            {showForgotPasswordHint && (
              <svg 
                className="w-4 h-4 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            )}
            Forgot password?
          </span>
        </button>
      </div>

    </form>
  );
};

export default LoginForm; 