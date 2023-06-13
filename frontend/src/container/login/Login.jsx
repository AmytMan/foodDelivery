import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();


  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/loginuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const json = await response.json();
      if (json.token) {
        localStorage.setItem('token',json.token)
      navigate('/dashboard');
      } else {
        alert('Enter valid credentials');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input {...register('email', { required: true })} type='text' id='email' placeholder='email...' />
        {errors.email && <span>This field is required</span>}

        <label htmlFor="password">Password</label>
        <input {...register('password', { required: true })} type='password' id='password' placeholder='password' />
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
