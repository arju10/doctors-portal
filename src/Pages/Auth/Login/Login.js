import React,{ useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import loginBg from "../../../images/logBack.jpg";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = data => {
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error.message)
            setLoginError(error.message);
        });
}

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="email">
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
          <button className="btn btn-primary w-full bg-gradient-to-r from-cyan-500 to-blue-300 font-bold border-none text-gray-500 text-xl" type="submit">Login</button>
            <div>
              {
                loginError && <p className ="text-white text-center">{loginError}</p>
              }
            </div>
        </form>
        <p className ="text-center">New to Doctors Portal? <span className ="text-white"><Link to = "/registration">Create new account </Link></span> </p>
        <div className="divider">
      OR

    </div>
    <button className="btn btn-primary w-full bg-gradient-to-r from-dark-500 to-dark-300 font-bold border-none text-dark text-xl" type="submit">Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
