import React, { useState } from 'react';
import { createUser } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { useUsernameContext } from '../utils/usernameContext';

function SignUp() {
  const navigate = useNavigate();
  const { setUsername } = useUsernameContext()
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSignup = async () => {
    try {
      const newUser = await createUser(userData);
      setUsername(userData.username)
      setMessage('User created successfully!');
      navigate('/home');
    } catch (error) {
      setError('Error: Could not create user.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium">Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium">Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none focus:border-blue-400"
          />
        </div>
        <button
          onClick={handleSignup}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
        {message && <p className="text-green-600 mt-4">{message}</p>}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default SignUp;
