// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../features/auth/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async () => {
    dispatch(loginStart());
    try {
      // Simulate an API call
      const user = { email, password };
      setTimeout(() => {
        dispatch(loginSuccess(user));
      }, 1000);
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  };

  return (
    <div className='container p-2'>
    <h2>Login</h2>
    <input
      type="name"
      placeholder="Name" className='form-control m-2'
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input
      type="email"
      placeholder="Email" className='form-control m-2'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      className='form-control m-2'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button className='btn btn-success' onClick={handleLogin} disabled={loading}>
      {loading ? '...' : 'Login'}
    </button>
    {error && <p>{error}</p>}
  </div>
  )
};

export default Login;
