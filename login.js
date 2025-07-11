import React, { useState } from 'react';
import axios from 'axios';
import { saveToken } from './utils/token';

const Login = () => {
  const [username, setUsername] = useState('');

  const login = async () => {
    const res = await axios.post('http://localhost:5000/login', { username });
    saveToken(res.data.token);
    window.location.href = '/protected';
  };

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
