import React,{useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import registerBg from "../../../images/logBack.jpg";
import { Link } from 'react-router-dom';
import {AuthContext} from "../../../contexts/AuthProvider";
import toast from 'react-hot-toast';

const Registration = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {createUser,updateUser} = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState('')

  const handleSignUp = (data) => {
    console.log(data);

    setSignUPError('');

    createUser(data.email, data.password)
    .then(result => {
      const user = result.user;
      console.log(user);
      toast('User Created Successfully.');
      const userInfo = {
        displayName: data.name
    }
      
    updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err));
    })
    .catch((error) => {
      console.log(error);
      setSignUPError(error.message)
    })
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${registerBg})` }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-5 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Registration</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              {...register('name', { required: true })}
            />
            {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="input input-bordered w-full"
              type="email"
              {...register('email', { required: true })}
            />
            {errors.email && <span className="text-red-500 text-xs mt-1">Email is required</span>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="input input-bordered w-full"
              type="password"
              {...register('password', { required: true })}
            />
            {errors.password && <span className="text-red-500 text-xs mt-1">Password is required</span>}
          </div>
          <button className="btn btn-primary w-full bg-gradient-to-r from-cyan-500 to-blue-300 font-bold border-none text-gray-500 text-xl" type="submit">Register</button>
          {signUpError && <p className='text-red-600'>{signUpError}</p>}
        </form>
          <p className ="text-center">Already have an account ? <span className ="text-white"><Link to = "/login">Login here </Link></span> </p>
          <div className="divider">
      OR

    </div>
    <button className="btn btn-primary w-full bg-gradient-to-r from-dark-500 to-dark-300 font-bold border-none text-dark text-xl" type="submit">Continue with Google</button>
      </div>
 
    </div>
  );
};

export default Registration;
