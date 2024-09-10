// import React, { useState } from 'react';
// import EyeIcon from '../assets/Icons/icons/carbon_view.png';
// import EyeOffIcon from '../assets/Icons/icons/eyeoff.png'; 
// import imglogo from '../assets/Icons/icons/Vector (6) copy.png';
// import imglogo2 from '../assets/Icons/icons/Vector (7).png';
// import { useModal } from '../contexts/ModalContext';
// import { NavLink } from 'react-router-dom'; // Import NavLink

// const LoginPage = () => {
//   const { isModalOpen, handleCloseModal } = useModal(); // Access modal state and controls

//   if (!isModalOpen) return null; // If modal is not open, return null

//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(prevState => !prevState);
//   };

//   return (
//     <div className="bg-black flex items-center justify-center h-screen overflow-hidden font-bold">
//       <div 
//         className="bg-white lg:p-16 lg:rounded-3xl shadow-lg w-full max-w-3xl max-h-full lg:max-h-screen overflow-auto"
//         style={{ 
//           overflow: 'auto', 
//           scrollbarWidth: 'none', /* For Firefox */
//           msOverflowStyle: 'none' /* For Internet Explorer and Edge */
//         }}
//       >
//         <style>
//           {`
//             .scrollbar-hidden::-webkit-scrollbar {
//               display: none; /* For Chrome, Safari, and Opera */
//             }
//           `}
//         </style>
//         <div className="relative flex items-center justify-center mb-6">
//           <h1 className="text-2xl font-bold">WELCOME BACK!</h1>
//           <button
//             onClick={handleCloseModal} // Close modal when clicking 'X' button
//             className="absolute right-7 lg:right-0 top-4 -translate-y-1/2 text-xl"
//           >
//             X
//           </button>
//         </div>

//         <p className="text-black mb-6 text-center">
//           Don't have an account?{' '}
//           {/* Use NavLink to navigate to the register page */}
//           <NavLink to="/register" className="text-[#9FA007] hover:underline">
//             Sign Up
//           </NavLink>
//         </p>

//         {/* Rest of your form */}
//         <form className="p-5">
//           {/* Form inputs */}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import EyeIcon from '../assets/Icons/icons/carbon_view.png';
import EyeOffIcon from '../assets/Icons/icons/eyeoff.png';
import imglogo2 from '../assets/Icons/icons/Vector (7).png';
import { NavLink } from 'react-router-dom';
import { useModal } from '../contexts/ModalContext';

const LoginPage = () => {
  const { isModalOpen, handleCloseModal, toggleModal } = useModal();  // Access modal state and controls
  const [passwordVisible, setPasswordVisible] = useState(false);  // Hook must always be called

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };

  // Use conditional rendering instead of an early return
  return (
    <>
      {isModalOpen && (
        <div className="bg-black flex items-center justify-center h-screen overflow-hidden font-bold">
          <div
            className="bg-white lg:p-16 lg:rounded-3xl shadow-lg w-full max-w-3xl max-h-full lg:max-h-screen overflow-auto"
            style={{
              overflow: 'auto',
              scrollbarWidth: 'none', /* For Firefox */
              msOverflowStyle: 'none', /* For Internet Explorer and Edge */
            }}
          >
            <style>
              {`
                .scrollbar-hidden::-webkit-scrollbar {
                  display: none; /* For Chrome, Safari, and Opera */
                }
              `}
            </style>
            <div className="relative flex items-center justify-center mb-6">
              <h1 className="text-2xl font-bold">WELCOME BACK!</h1>
              <button
                onClick={handleCloseModal}  // Close modal when clicking 'X' button
                className="absolute right-7 lg:right-0 top-4 -translate-y-1/2 text-xl"
              >
                X
              </button>
            </div>

            <p className="text-black mb-6 text-center">
              Don't have an account? 
              <NavLink onClick={toggleModal} className="text-[#9FA007] hover:underline">
                Sign Up
              </NavLink>
            </p>

            <form className="p-5">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name*</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Provee Blaq"
                  className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 mb-2">Password*</label>
                <div className="relative">
                  <input
                    id="password-id"
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center px-2"
                  >
                    <img src={passwordVisible ? EyeIcon : EyeOffIcon} alt="Toggle visibility" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-7">
                <div className="flex items-center justify-between">
                  <input type="checkbox" id="remember" name="remember" className="mr-2 text-gray-700" />
                  <label htmlFor="remember" className="text-black">Remember me</label>
                </div>
                <a href="#" className="text-black hover:text-[#9FA007]">Forgot Password?</a>
              </div>

              <button type="submit" className="w-full py-4 px-4 bg-[#9FA007] text-white rounded-full hover:bg-[rgb(128,128,33)]">
                Log In
              </button>

              <div className="my-4 flex items-center justify-between p-3">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-4 text-gray-500">Or</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              <div className="flex items-center justify-center border-2 p-4 rounded-lg">
                <img src={imglogo2} alt="Google logo" className="w-6 h-6 mr-2" />
                <span><a href="/#">Sign Up with Google</a></span>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
