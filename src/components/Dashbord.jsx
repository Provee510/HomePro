// import React from 'react';
// import { AiOutlineSearch } from 'react-icons/ai'; // Using react-icons for search icon
// import settings from '../assets/Icons/icons/solar_settings-outline.png';
// import logout from '../assets/Icons/icons/solar_logout-2-outline.png';
// import message from '../assets/Icons/icons/Vector (4).png';
// import eye from '../assets/Icons/icons/carbon_view.png';
// import heart from '../assets/Icons/icons/Heart.png';
// import bell from '../assets/Icons/icons/fluent_alert-24-regular.png';
// import dash from '../assets/Icons/icons/Vector (8).png';
// import home from '../assets/Icons/icons/Vector (5).png';
// import pro from '../assets/Icons/icons/Homepro.png';

// export const Dashboard = () => {
//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen bg-gray-200 ">
//       {/* Left Sidebar - 25% width on large screens, full width on small screens */}
//       <div className="w-full lg:w-1/4 bg-white px-6 py-10 shadow-lg ">
//         {/* Aligning Home and Pro Icons */}
//         <div className="flex items-center justify-center lg:justify-start space-x-2 mb-8">
//           <img src={home} alt="home-icon" className="h-8" />
//           <img src={pro} alt="pro-icon" className="h-8" />
//         </div>

//         {/* Sidebar Links */}
//         <ul className="space-y-6 text-center lg:text-left">
//           <span className="flex justify-center lg:justify-start py-3">
//             <img src={dash} alt="dashboard-icon" />
//             <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007] text-[#9FA007]">
//               <strong>Dashboard</strong>
//             </li>
//           </span>
//           <span className="flex justify-center lg:justify-start py-3">
//             <img src={bell} alt="bell-icon" />
//             <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007]">
//               <strong>Property Alert</strong>
//             </li>
//           </span>
//           <span className="flex justify-center lg:justify-start py-3">
//             <img src={heart} alt="heart-icon" />
//             <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007]">
//               <strong>My Favorites</strong>
//             </li>
//           </span>
//           <span className="flex justify-center lg:justify-start py-3">
//             <img src={eye} alt="eye-icon" />
//             <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007]">
//               <strong>Recently Viewed</strong>
//             </li>
//           </span>
//           <span className="flex justify-center lg:justify-start py-3">
//             <img src={message} alt="message-icon" />
//             <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007]">
//               <strong>Message</strong>
//             </li>
//           </span>
//           <span className="flex justify-center lg:justify-start py-3">
//             <img src={settings} alt="settings-icon" />
//             <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007]">
//               <strong>Account Settings</strong>
//             </li>
//           </span>
//           <span className="flex justify-center lg:justify-start py-3">
//             <img src={logout} alt="logout-icon" />
//             <li className="cursor-pointer lg:ml-3 hover:text-red-600 text-red-500">
//               <strong>Logout</strong>
//             </li>
//           </span>
//         </ul>
//       </div>

//       {/* Right Content - 75% width on large screens, full width on small screens */}
//       <div className="w-full lg:w-screen lg:px-10  relative bg-white ">
//         <div className="flex justify-between items-center mb-6 py-5  scale-100 ">
//           {/* Dashboard title aligned with the search */}
//           <h1 className="text-3xl font-bold">Dashboard</h1>

//           {/* Search Input without excess padding */}
//           <div className="flex items-center border rounded-full shadow-md px-3 py-4 relative right-[13rem] lg:w-6/12">
//             <AiOutlineSearch size={20} className="text-gray-600 mr-2" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full outline-none"
//             />
//           </div>
//         </div>

       
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Using react-icons for search icon
import settings from '../assets/Icons/icons/solar_settings-outline.png';
import logout from '../assets/Icons/icons/solar_logout-2-outline.png';
import message from '../assets/Icons/icons/Vector (4).png';
import eye from '../assets/Icons/icons/carbon_view.png';
import heart from '../assets/Icons/icons/Heart.png';
import bell from '../assets/Icons/icons/fluent_alert-24-regular.png';
import dash from '../assets/Icons/icons/Vector (8).png';
import home from '../assets/Icons/icons/Vector (5).png';
import pro from '../assets/Icons/icons/Homepro.png';
import Welcome from './Welcome';
import Recent from './Recent';

export const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-200">
      {/* Left Sidebar - 25% width on large screens, full width on small screens */}
      <div className="w-full lg:w-1/4 bg-white px-6 py-10 shadow-lg">
        {/* Aligning Home and Pro Icons */}
        <div className="flex items-center justify-center lg:justify-start space-x-2 mb-8">
          <img src={home} alt="home-icon" className="h-8" />
          <img src={pro} alt="pro-icon" className="h-8" />
        </div>

        {/* Sidebar Links */}
        <ul className="space-y-6 text-center lg:text-left">
          <span className="flex justify-center lg:justify-start py-3">
            <img src={dash} alt="dashboard-icon" />
            <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007] text-[#9FA007]">
              <strong>Dashboard</strong>
            </li>
          </span>
          <span className="flex justify-center lg:justify-start py-3">
            <img src={bell} alt="bell-icon" />
            <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007]">
              <strong>Property Alert</strong>
            </li>
          </span>
          <span className="flex justify-center lg:justify-start py-3">
            <img src={heart} alt="heart-icon" />
            <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007]">
              <strong>My Favorites</strong>
            </li>
          </span>
          <span className="flex justify-center lg:justify-start py-3">
            <img src={eye} alt="eye-icon" />
            <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007]">
              <strong>Recently Viewed</strong>
            </li>
          </span>
          <span className="flex justify-center lg:justify-start py-3">
            <img src={message} alt="message-icon" />
            <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007]">
              <strong>Message</strong>
            </li>
          </span>
          <span className="flex justify-center lg:justify-start py-3">
            <img src={settings} alt="settings-icon" />
            <li className="cursor-pointer lg:ml-3 hover:text-[#9FA007]">
              <strong>Account Settings</strong>
            </li>
          </span>
          <span className="flex justify-center lg:justify-start py-3">
            <img src={logout} alt="logout-icon" />
            <li className="cursor-pointer lg:ml-3 hover:text-red-600 text-red-500">
              <strong>Logout</strong>
            </li>
          </span>
        </ul>
      </div>

      {/* Right Content - 75% width on large screens, full width on small screens */}
      <div className="w-full  lg:w-3/4   bg-gray-300 relative ">
        <div className="flex f sm:flex-row justify-between items-center bg-white h-[15%] mb-6">
          {/* Dashboard title aligned with the search */}
          <div className=''>
          <h1 className="text-3xl font-bold mb-4 sm:mb-0">Dashboard</h1>
          </div>

          {/* Search Input */}
          <div className="flex items-center bg-white border rounded-full shadow-md px-11 lg:px-32 py-3 sm:ml-4 relative   lg:right-[13rem]">
            <AiOutlineSearch size={20} className="text-gray-600 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
            />
          </div>
        </div>
     
        <div className='w-full h-full grid grid-cols-2  gap-10  overflow-hidden  lg:overflow-auto scrollbar-none'>
        
        <div className=" flex overflow-hidden  lg:overflow-auto scrollbar-none lg:ml-6">
        <Welcome/>     
        </div>
        <div className="">
        <Recent className=""/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

