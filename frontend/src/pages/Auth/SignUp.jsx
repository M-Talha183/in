// import React, { useState } from "react";
// import AuthLayout from "../../components/layouts/AuthLayout";
// import { Link, useNavigate } from "react-router-dom";
// import Input from "../../components/inputs/Input";
// import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";
// import { validateEmail } from "../../utils/helper";

// export default function SignUp() {
//   const [profile,setProfile] = useState(null);
//   const [fullName,setFullName] = useState("");
//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   const [error,setError] = useState(null);

//   const navigate = useNavigate();

//   //  handle the signup form submit 

//   const handleSignUp = (e) =>{
//     e.preventDefault();

//     let profileImageurl = "";
//     if(!fullName){
//       setError("Please enter your full name");
//       return;
//     }
//     if(!validateEmail(email)){
//       setError("Please enter a valid email address");
//       return;
//     }
//     if(!password){
//       setError("Password is required");
//       return;
//     }
//     setError("");
//     //  signup api call

//   }
//   return (
//     <AuthLayout>
//       <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
//         <h3 className=" text-xl font-semibold text-black  ">Create Account </h3>
//         <p className="text-xs text-slate-500 mt[5px] mb-6"> Join us today by entering your details below </p>


//         <ProfilePhotoSelector image={profile} setImage={setProfile} />


//         <form onSubmit={handleSignUp}>
//           <div>
//             <Input 
//             value={fullName}
//             onChange={(target)=>setFullName(target.value)}
//             label="Full Name"
//             placeholder="John Doe"
//             type="text"
//             />

//                     <Input
//           type="email"
//           value={email}
//           onChange={({ target }) => setEmail(target.value)}
//           placeholder="john@gmail.com"
//           label="Email Address"
//         />
//         <div className="col-span-2">
//         <Input
//           type="password"
//           value={password}
//           onChange={({ target }) => setPassword(target.value)}
//           placeholder="Min 8 characters"
//           label="Password"
//         />
//         </div>
//           </div>


//                   {error && <p className="text-red-500 text-xs pb-2.5"> {error} </p>}
//                   <button className="btn-primary" type="submit">
//                     SIGN UP
//                   </button>
//                   <p className="text-[13px]  text-slate-800 mt-3">
//                     Already have an account?{" "}
//                     <Link to="/login" className="font-medium text-primary underline">
//                       LogIn
//                     </Link>
//                   </p>
//         </form>
//       </div>
//     </AuthLayout>
//   )
// }

// import React, { useContext, useState } from "react";
// import AuthLayout from "../../components/layouts/AuthLayout";
// import { Link, useNavigate } from "react-router-dom";
// import Input from "../../components/inputs/Input.jsx";
// import { validateEmail } from "../../utils/helper";

// // --- Required Imports for API and Context ---
// import axiosInstance from "../../utils/axiosinstance.js"; 
// import { API_PATHS } from "../../utils/apiPath";
// import { UserContext } from "../../contaxt/UserContact.jsx";
// // --------------------------------------------

// // Renamed the component to SignUp
// const SignUp = () => {
//     // --- 💡 New State Variable for Full Name ---
//     const [fullName, setFullName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(null);
//       const [profile,setProfile] = useState(null);

//     // Destructure updateUser from context
//     const { updateUser } = useContext(UserContext);
//     const navigate = useNavigate();

//     // handle registration form submit
//     const handleRegister = async (e) => { // Renamed from handleLogin

//           let profileImageurl = "";

//         e.preventDefault();

//         // Simple validation checks
//         if (!fullName) {
//             setError("Please Enter your full name");
//             return;
//         }
//         if (!validateEmail(email)) {
//             setError("Please Enter a valid email address");
//             return;
//         }
//         if (!password) {
//             setError("Please Enter a password");
//             return;
//         }

//         setError("");

//         // --- 💡 REGISTRATION API CALL LOGIC (From Image) ---
//         try {
// // upload image if present
//           if (profile){
//             const imgUploadRes = await uploadImage()
//           }
//             const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, { // Changed to REGISTER path
//                 // All three required fields for registration
//                 fullName,
//                 email,
//                 password,
//             });

//             // Assuming the backend returns { token: '...', user: {...} }
//             const { token, user } = response.data; 

//             if (token) {
//                 // Save token to local storage
//                 localStorage.setItem("token", token);
                
//                 // Update the global user state with the new user data
//                 updateUser(user);
                
//                 // Navigate to the dashboard after successful registration
//                 navigate("/dashboard");
//             }
//         } catch (error) {
//             // Error handling remains the same as Login component

//             if (error.response && error.response.data && error.response.data.message) {
//                 // Display specific error message from the server (e.g., "Email already exists")
//                 setError(error.response.data.message);
//             } else {
//                 // Display a generic error
//                 setError("Registration failed. Please try again.");
//             }
//         }
//         // -----------------------------------------------------------------
//     };

//     return (
//         <AuthLayout className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
//             <h3 className="text-xl font-semibold text-black">Create Account</h3> 
//             <p className="text-xs text-slate-700 mt-[5px] mb-6">
//                 Please enter your details to sign up
//             </p>
//             <form action="" onSubmit={handleRegister}> {/* Changed onSubmit handler */}
//                 {/* Input for Full Name */}
//                 <Input
//                     type="text"
//                     value={fullName}
//                     onChange={({ target }) => setFullName(target.value)}
//                     placeholder="John Doe"
//                     label="Full Name"
//                 />
//                 <Input
//                     type="email"
//                     value={email}
//                     onChange={({ target }) => setEmail(target.value)}
//                     placeholder="john@gmail.com"
//                     label="Email Address"
//                 />
//                 <Input
//                     type="password"
//                     value={password}
//                     onChange={({ target }) => setPassword(target.value)}
//                     placeholder="Min 8 characters"
//                     label="Password"
//                 />
//                 {error && <p className="text-red-500 text-xs pb-2.5"> {error} </p>}
//                 <button className="btn-primary" type="submit">
//                     SIGN UP {/* Changed button text */}
//                 </button>
//                 <p className="text-[13px]  text-slate-800 mt-3">
//                     Already have an account?{" "}
//                     <Link to="/login" className="font-medium text-primary underline">
//                         Login {/* Changed Link text and path */}
//                     </Link>
//                 </p>
//             </form>
//         </AuthLayout>
//     );
// };

// export default SignUp; // Export the new component

import React, { useContext, useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input"; // Assuming Input.jsx is correct
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";
import { validateEmail } from "../../utils/helper";

// --- Required Imports for API and Context ---
import axiosInstance from "../../utils/axiosinstance.js"; 
import { API_PATHS } from "../../utils/apiPath";
import { UserContext } from "../../contaxt/UserContact.jsx";
// --------------------------------------------

export default function SignUp() {
    // --- State Variables ---
    const [profile, setProfile] = useState(null);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    // --- Context and Navigation Hooks ---
    const { updateUser } = useContext(UserContext); // Destructure updateUser from context
    const navigate = useNavigate();

    // --- 💡 Helper function to handle image upload ---
    // This function must be defined to be called in the try block
    const uploadImage = async () => {
        if (!profile) return null;

        const formData = new FormData();
        formData.append('image', profile);

        try {
            // Use the UPLOAD_IMAGE path defined earlier (API_PATHS.IMAGE.UPLOAD_IMAGE)
            const response = await axiosInstance.post(
                API_PATHS.IMAGE.UPLOAD_IMAGE,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data', // Important for file uploads
                    },
                }
            );
            // Assuming the backend returns the public URL of the uploaded image
            return response.data.imageUrl; 
        } catch (uploadError) {
            console.error("Profile image upload failed:", uploadError);
            setError("Failed to upload profile picture. Please try again.");
            // Throw the error to halt the registration process
            throw uploadError; 
        }
    };
    // ----------------------------------------------------

    // handle the signup form submit 
    const handleSignUp = async (e) => { // Must be async
        e.preventDefault();

        // --- Validation Checks ---
        if (!fullName) {
            setError("Please enter your full name");
            return;
        }
        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            return;
        }
        if (!password) {
            setError("Password is required");
            return;
        }
        setError(""); // Clear previous errors

        // --- Registration and Upload Logic ---
        try {
            let profileImageUrl = "";

            // 1. Upload image if present
            if (profile) {
                // The uploadImage function handles its own error logging/throwing
                profileImageUrl = await uploadImage(profile); 
            }

            // 2. Perform the main registration API call
            const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
                fullname :fullName,
                email,
                password,
              profileImage: profileImageUrl
                // Include the uploaded profile image URL in the registration payload
                // profileImageUrl: profileImageUrl,
            });

            // 3. Handle successful registration
            const { token, user } = response.data; 

            if (token) {
                localStorage.setItem("token", token);
                updateUser(user); // Update the global user state
                navigate("/dashboard"); // Navigate on success
            }
        } catch (error) {
            // Catch errors from registration AND the uploadImage call
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else if (!error.message.includes("Failed to upload")) { // Avoid double-logging the upload error
                setError("Registration failed. Please check your network.");
            }
        }
    };

    return (
        <AuthLayout>
            <div className="lg:w-100% h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
                <h3 className=" text-xl font-semibold text-black ">Create Account </h3>
                <p className="text-xs text-slate-500 mt[5px] mb-6"> Join us today by entering your details below </p>

                {/* Profile Photo Selector */}
                <ProfilePhotoSelector image={profile} setImage={setProfile} />

                <form onSubmit={handleSignUp}>
                    <div>
                        <Input 
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)} // Corrected destructuring to (e)
                            label="Full Name"
                            placeholder="John Doe"
                            type="text"
                        />

                        <Input
                            type="email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            placeholder="john@gmail.com"
                            label="Email Address"
                        />
                        <div className="col-span-2">
                            <Input
                                type="password"
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                                placeholder="Min 8 characters"
                                label="Password"
                            />
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-xs pb-2.5"> {error} </p>}
                    <button className="btn-primary" type="submit">
                        SIGN UP
                    </button>
                    <p className="text-[13px]  text-slate-800 mt-3">
                        Already have an account?{" "}
                        <Link to="/login" className="font-medium text-primary underline">
                            LogIn
                        </Link>
                    </p>
                </form>
            </div>
        </AuthLayout>
    );
}