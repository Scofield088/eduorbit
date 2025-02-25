import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignup(!isSignup);
    setErrorMessage(''); // Clear errors when toggling
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please fill in both email and password.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:4001/user/${isSignup ? 'register' : 'login'}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        if (isSignup) {
          alert(`Account created for ${email}`);
          navigate('/login');
        } else {
          localStorage.setItem('token', data.token);
          navigate('/home');
        }
      } else {
        setErrorMessage(data.message || 'An error occurred.');
      }
    } catch (error) {
      setErrorMessage('Failed to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <div className="login-form">
          <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Processing...' : isSignup ? 'Sign Up' : 'Log In'}
            </button>
          </form>
          <p onClick={handleToggle} className="toggle-link">
            {isSignup ? 'Already have an account? Log In' : "Don’t have an account? Sign Up"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
