// src/pages/Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (email && password) {
      // Simulate a successful signup process
      console.log('User signed up', { email, password });
      setError('');
      // After successful signup, redirect to signin
      navigate('/signin'); 
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 space-y-6">
      <h2 className="text-3xl font-semibold text-center">Create an Account</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-2 p-2 border rounded-md w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="mt-2 p-2 border rounded-md w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-lg font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="mt-2 p-2 border rounded-md w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="w-full py-3 mt-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
          Sign Up
        </button>
      </form>

      <p className="text-center text-gray-600">
        Already have an account?{' '}
        <Link to="/signin" className="text-green-600 hover:underline">Sign In</Link>
      </p>
    </div>
  );
};

export default Signup;
