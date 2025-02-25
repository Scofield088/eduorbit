import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Assuming this CSS file exists for styling

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload on form submit

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:4001/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Account created for ${email}`);
        navigate('/login'); // Redirect to login page after successful signup
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <div className="login-form">
          <h2>Sign Up</h2>
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
            <button type="submit">Sign Up</button>
          </form>
          <p onClick={() => navigate('/login')} className="toggle-link">
            Already have an account? Log In
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
