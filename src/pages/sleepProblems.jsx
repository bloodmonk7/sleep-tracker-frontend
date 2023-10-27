import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addSleepData, getUserData } from '../utils/api';
import { useUsernameContext } from '../utils/usernameContext';

function SleepProblems() {
  const navigate = useNavigate();
  const [selectedChanges, setSelectedChanges] = useState({
    earlySleep: false,
    sleepThroughNight: false,
    wakeUpOnTime: false,
  });
  const [userId, setUserId] = useState('');
  const { username } = useUsernameContext()
  useEffect(() => {
    // Fetch user data to get the user's ID when the component mounts
    getUserData(username)
      .then((userData) => {
        setUserId(userData._id);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }, [username]);

  const handleOptionChange = (option) => {
    setSelectedChanges((prevSelectedChanges) => ({
      ...prevSelectedChanges,
      [option]: !prevSelectedChanges[option],
    }));
  };

  const saveChanges = async () => {
    if (!userId) {
      // If User ID is not available
      console.error('User ID not available.');
      return;
    }

    // Data for update API
    const sleepData = {
      userId,
      sleepProblems: selectedChanges,
    };

    try {
      // Send the updated sleep data to the server
      await addSleepData(sleepData);
      navigate('/sleepscore');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">
          Let's say in a few weeks, you're sleeping well. What would change?
        </h2>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium">
            Select all the changes you would like to see:
          </label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={selectedChanges.earlySleep}
                onChange={() => handleOptionChange('earlySleep')}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">I would go to sleep easily</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={selectedChanges.sleepThroughNight}
                onChange={() => handleOptionChange('sleepThroughNight')}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">I would sleep through the night</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={selectedChanges.wakeUpOnTime}
                onChange={() => handleOptionChange('wakeUpOnTime')}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">I'd wake up on time, refreshed</span>
            </label>
          </div>
        </div>
        <button
          onClick={saveChanges}
          className="text-blue-500 hover:text-blue-600"
        >
          ⬇️
        </button>
      </div>
    </div>
  );
}

export default SleepProblems;
