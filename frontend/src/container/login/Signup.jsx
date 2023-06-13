import React from 'react';
import { useForm } from 'react-hook-form';
function Signup() {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try { 
     await fetch('http://localhost:5000/api/createuser', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data),
      
    });
    reset()
    } catch (error) {
      console.log(error)
    }
   
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} type='text' placeholder='username' />
        {errors.name && <span>This field is required</span>}

      
        <input {...register("email", { required: true })} type='email' placeholder='email' />
        {errors.email && <span>This field is required</span>}

       
        <input {...register("password", { required: true })} type='password' placeholder='password' />
        {errors.password && <span>This field is required</span>}

        
        <input {...register("location", { required: true })} type='text' placeholder='your location...' />
        {errors.password && <span>This field is required</span>}

       <input type="submit" />
      </form>
    </>
  );
}

export default Signup;
