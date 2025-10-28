// import React from 'react'

// export default function login() {
//   return (
//     <div className=''>
//       <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center  '>
//         <h3 className='text-2xl font-bold text-black'>Welcome back</h3>
//         <p className='text-xs text-slate-700 mt[5px] mb-6 '>
//           Please Enter Your details to log in 
//         </p>
//       </div>
      
//     </div>
//   )
// }

import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input";
import { validateEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  //  handle login form submit
  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please Enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please Enter a password");
      return;
    }

    setError("");
  };
  return (
    <AuthLayout className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Please enter your details to login
      </p>
      <form action="" onSubmit={handleLogin}>
        <Input
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="john@gmail.com"
          label="Email Address"
        />
        <Input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Min 8 characters"
          label="Password"
        />
        {error && <p className="text-red-500 text-xs pb-2.5"> {error} </p>}
        <button className="btn-primary" type="submit">
          LOGIN
        </button>
        <p className="text-[13px]  text-slate-800 mt-3">
          Don't have an account?{" "}
          <Link to="/signUp" className="font-medium text-primary underline">
            Sign Up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;