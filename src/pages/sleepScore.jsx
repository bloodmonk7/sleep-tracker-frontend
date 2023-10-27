import React from 'react';
import { useNavigate } from 'react-router-dom';

function SleepScore() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Your Sleep Score</h2>
        <p>You seem to have a sleep efficiency of 89%</p>
        <p>That's good 😎</p>
        <p>
          A higher sleep efficiency score means a more refreshing and energizing sleep, which can help you move into your day with a sense of lightness and ease.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover-bg-blue-600 mt-4"
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default SleepScore;
