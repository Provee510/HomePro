// import React from 'react';
// import imglogo from '../assets/Icons/icons/Vector (6) copy.png'
// import imglogo2 from '../assets/Icons/icons/Vector (7).png'

// const RegisterPage = () => {
//   const scrollStyle = {
//     overflow: 'auto',
//     scrollbarWidth: 'none', /* Firefox */
//     msOverflowStyle: 'none', /* Internet Explorer and Edge */
//   };

//   // For WebKit browsers (Chrome, Safari)
//   const webkitStyle = {
//     overflow: 'auto',
//     scrollbarWidth: 'none', /* Firefox */
//     msOverflowStyle: 'none', /* Internet Explorer and Edge */
//   };

//   return (
//     <div className="bg-black flex items-center justify-center h-screen overflow-hidden">
//       <div className="bg-white lg:p-20 lg:rounded-3xl shadow-lg w-full max-w-3xl max-h-screen" style={scrollStyle}>
//         <div className="relative flex items-center justify-center mb-6">
//           <h1 className="text-2xl font-bold">REGISTER!</h1>
//           <span className="absolute right-0 top-1/2 -translate-y-1/2">
//             <img src={imglogo} alt="Logo" />
//           </span>
//         </div>

//         <p className="text-black mb-6 text-center">
//           Already have an account? <a href="/login" className="text-[#9FA007] hover:underline">Log in</a>
//         </p>
//         <form className='p-5'>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 mb-2">Name*</label>
//             <input id="name" type="text" placeholder="Provee Blaq" className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100 " />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 mb-2">Email address*</label>
//             <input id="email" type="email" placeholder="Proveeblaq@gmail.com" className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100 " />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700 mb-2">Password*</label>
//             <input id="password" type="password" placeholder="Enter your password" className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100 " />
//           </div>
//           <div className='mb-7'>
//             <p className='text-gray-600'>
//               By clicking on the "Sign Up" button, you agree to the <span className='text-[#9FA007]'>Terms</span> and <span className='text-[#9FA007]'>Privacy Policy</span>
//             </p>
//           </div>
//           <button type="submit" className="w-full py-4 px-4 bg-[#9FA007] text-white rounded-full hover:bg-[rgb(128,128,33)]">Sign Up</button>
//           <div className="my-4 flex items-center justify-between p-3">
//             <hr className="flex-grow border-gray-300" />
//             <span className="mx-4 text-gray-500">Or</span>
//             <hr className="flex-grow border-gray-300" />
//           </div>
          
//           <div className="flex items-center justify-center border-2 p-4 rounded-lg">
//             <img src={imglogo2} alt="Google logo" className="w-6 h-6 mr-2" />
//             <span> <a href="/#">Sign Up with Google</a> </span>
//           </div>
          
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;


import React from 'react';
import imglogo from '../assets/Icons/icons/Vector (6) copy.png';
import imglogo2 from '../assets/Icons/icons/Vector (7).png';
import { useModal } from '../contexts/ModalContext';

const RegisterModal = () => {
  const { isModalOpen, handleCloseModal } = useModal(); // Access modal state and controls

  if (!isModalOpen) return null; // If modal is not open, return null

  return (
    <div className="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white lg:p-20 lg:rounded-3xl shadow-lg w-full max-w-3xl max-h-screen overflow-auto">
        <div className="relative flex items-center justify-center mb-6">
          <h1 className="text-2xl font-bold">REGISTER!</h1>
          <button
            onClick={handleCloseModal} // Close modal when clicking 'X' button
            className="absolute right-0 top-1/2 -translate-y-1/2 text-xl"
          >
            X
          </button>
        </div>

        <p className="text-black mb-6 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-[#9FA007] hover:underline">
            Log in
          </a>
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
            <label htmlFor="email" className="block text-gray-700 mb-2">Email address*</label>
            <input
              id="email"
              type="email"
              placeholder="Proveeblaq@gmail.com"
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password*</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-4 border border-gray-300 rounded-xl bg-slate-100"
            />
          </div>

          <div className="mb-7">
            <p className="text-gray-600">
              By clicking on the "Sign Up" button, you agree to the{' '}
              <span className="text-[#9FA007]">Terms</span> and{' '}
              <span className="text-[#9FA007]">Privacy Policy</span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-4 bg-[#9FA007] text-white rounded-full hover:bg-[rgb(128,128,33)]"
          >
            Sign Up
          </button>

          <div className="my-4 flex items-center justify-between p-3">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex items-center justify-center border-2 p-4 rounded-lg">
            <img src={imglogo2} alt="Google logo" className="w-6 h-6 mr-2" />
            <span>
              <a href="/#">Sign Up with Google</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;

