// src/components/Register.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerStart, registerSuccess, registerFailure } from '../features/auth/auth';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleRegister = async () => {
    dispatch(registerStart());
    try {
    //   api
    const user = { name, email, password };

    
    const response = await axios.post()
      setTimeout(() => {
        dispatch(registerSuccess(user));
      }, 1000);
    } catch (err) {
      dispatch(registerFailure(err.message));
    }
  };

  return (
    <div className='container p-2'>
      <h2>Register</h2>
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
      <button className='btn btn-success' onClick={handleRegister} disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
