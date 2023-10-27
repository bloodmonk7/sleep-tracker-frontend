// UsernameContext.js
import { createContext, useContext, useState } from 'react';

const UsernameContext = createContext();

export function useUsernameContext() {
  return useContext(UsernameContext);
}

export function UsernameProvider({ children }) {
  const [username, setUsername] = useState('');

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  );
}
