import React, { useState } from 'react';
import { toast } from 'sonner';
import api from '@lib/api';
import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async e => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      // FIX: use username (not email)
      const res = await api.admin.login({ username, password });

      if (!res.token) {
        toast.error(res.message || 'Invalid credentials');
        setLoading(false);
        return;
      }

      localStorage.setItem('admin_token', res.token);

      toast.success('Login successful!');
      navigate('/admin');
    } catch (error) {
      toast.error('Invalid credentials');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center px-4">
      <div className="bg-primary-light/10 border border-secondary-light/20 p-8 rounded-lg max-w-md w-full shadow-lg">
        <h1 className="text-2xl font-semibold text-secondary-light text-center mb-6">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username */}
          <div>
            <label className="text-sm font-medium text-secondary-light">Username</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-secondary-light/40 p-2 text-secondary-light focus:border-primary-yellow focus:outline-none"
              placeholder="Admin username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          {/* Password with Eye Toggle */}
          <div className="relative">
            <label className="text-sm font-medium text-secondary-light">Password</label>

            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full bg-transparent border-b border-secondary-light/40 p-2 text-secondary-light focus:border-primary-yellow focus:outline-none pr-10"
              placeholder="Admin password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            {/* Toggle Button */}
            <button
              type="button"
              className="absolute right-2 bottom-2 text-secondary-light hover:text-primary-yellow"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`primary-btn-2 w-full group ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span className="relative z-10 text-primary-dark">
              {loading ? 'Logging in...' : 'Login'}
            </span>
            <span className="primary-btn-overlay-2"></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
