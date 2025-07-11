import React from 'react';
import { clearToken } from './utils/token';

const Logout = () => {
  const logout = () => {
    clearToken();
    window.location.href = '/login';
  };

  return <button onClick={logout}>Logout</button>;
};

export default Logout;
