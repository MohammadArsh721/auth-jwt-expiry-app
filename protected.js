import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken, clearToken } from './utils/token';

const Protected = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProtected = async () => {
      try {
        const res = await axios.get('http://localhost:5000/protected', {
          headers: { Authorization: `Bearer ${getToken()}` },
        });
        setMessage(res.data.message);
      } catch (err) {
        alert('Token expired');
        clearToken();
        window.location.href = '/login';
      }
    };

    fetchProtected();
  }, []);

  return <h2>{message}</h2>;
};

export default Protected;
