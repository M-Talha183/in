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

// import React, { useState } from "react";
// import AuthLayout from "../../components/layouts/AuthLayout";
// import { Link, useNavigate } from "react-router-dom";
// import Input from "../../components/inputs/Input";
// import { validateEmail } from "../../utils/helper";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   //  handle login form submit
//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!validateEmail(email)) {
//       setError("Please Enter a valid email address");
//       return;
//     }
//     if (!password) {
//       setError("Please Enter a password");
//       return;
//     }

//     setError("");
//     //  login api call 

  
//   };
//   return (
//     <AuthLayout className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
//       <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
//       <p className="text-xs text-slate-700 mt-[5px] mb-6">
//         Please enter your details to login
//       </p>
//       <form action="" onSubmit={handleLogin}>
//         <Input
//           type="email"
//           value={email}
//           onChange={({ target }) => setEmail(target.value)}
//           placeholder="john@gmail.com"
//           label="Email Address"
//         />
//         <Input
//           type="password"
//           value={password}
//           onChange={({ target }) => setPassword(target.value)}
//           placeholder="Min 8 characters"
//           label="Password"
//         />
//         {error && <p className="text-red-500 text-xs pb-2.5"> {error} </p>}
//         <button className="btn-primary" type="submit">
//           LOGIN
//         </button>
//         <p className="text-[13px]  text-slate-800 mt-3">
//           Don't have an account?{" "}
//           <Link to="/signUp" className="font-medium text-primary underline">
//             Sign Up
//           </Link>
//         </p>
//       </form>
//     </AuthLayout>
//   );
// };

// export default Login;

import React, { useContext, useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input";
import { validateEmail } from "../../utils/helper";

// --- 💡 NEW IMPORTS ADDED HERE ---
// Import the custom Axios instance and API path constants
import axiosInstance from "../../utils/axiosinstance.js"; 
import { API_PATHS } from "../../utils/apiPath";
import { UserContext } from "../../contaxt/UserContact.jsx";
// ----------------------------------

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const {updateUser} = useContext(UserContext)
  const navigate = useNavigate();

  //  handle login form submit
  const handleLogin = async (e) => { // 💡 MAKE FUNCTION ASYNC
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

    //  login api call 
    // --- 💡 LOGIN API CALL LOGIC INSERTED HERE ---
    try {
        const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
            // Note: The variable names (email, password) match the state variables
            email,
            password,
        });

        // Assuming the backend returns { token: '...', user: {...} }
        const { token, user } = response.data; 

        if (token) {
            // Save token to local storage (Request Interceptor will use this)
            localStorage.setItem("token", token);
            updateUser(user)
            
            // Optionally save user info too, if needed elsewhere
            // localStorage.setItem("user", JSON.stringify(user));

            // Navigate to the protected dashboard page
            navigate("/dashboard");
        }
    } catch (error) {
        // This catch block handles all errors (400, 404, network, etc.)
        // Global 401/500/timeout handling is managed in the Response Interceptor

        if (error.response && error.response.data && error.response.data.message) {
            // Display specific error message from the server (e.g., "Invalid credentials")
            setError(error.response.data.message);
        } else {
            // Display a generic error if no specific message is available
            setError("Login failed. Please check your network or try again.");
        }
    }
    // -----------------------------------------------------------------
  };

  return (
    <AuthLayout className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center ">
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
        <p className="text-[13px]  text-slate-800 mt-3">
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