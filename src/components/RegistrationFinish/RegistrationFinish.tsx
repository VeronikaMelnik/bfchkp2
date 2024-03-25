'use client'
import { TextField } from '@/app/textField/textField';
import { useState } from 'react';

export const CustomLoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = () => {
    const token = window.localStorage.getItem('token')
    fetch('https://bfchkp-server.onrender.com/api/auth/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data: { token: string }) => {
        alert('Регистрация прошла успешно');
        window.localStorage.setItem('token', data.token);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <TextField
        value={email}
        onChange={(ev) => {
          console.log(ev.target)
          setEmail(ev.target.value);
        }}
      />
      <TextField
        onChange={(ev) => {
          setPassword(ev.target.value);
        }}
      />
      <button onClick={onSubmit}>регистрация</button>
    </div>
  );
};
