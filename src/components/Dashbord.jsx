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
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Using react-icons for search icon
// import { IoIosArrowDown } from 'react-icons/io'; // For dropdown arrow icon
// import { FaBell} from 'react-icons/fa'; // Icons for notifications and messages
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
import PropertyPurchased from './PropertyPurchased';
import userlog from '../assets/Icons/icons/userlog.png'
import dropdown from '../assets/Icons/icons/dropdown.png'


export const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown toggle

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-200">
      {/* Left Sidebar */}
      <div className="w-full lg:w-1/4 bg-white px-4 py-6 shadow-lg">
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

      {/* Right Content */}
      <div className="w-full lg:w-3/4 bg-gray-300 relative h-screen overflow-y-auto">
        {/* Search bar and Dashboard title */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white h-[15%] mb-6 px-4 sm:px-6 lg:px-10">
          <h1 className="text-3xl font-bold mb-4 sm:mb-0">Dashboard</h1>

          {/* Right section with Search, Icons, and Dropdown */}
          <div className="flex items-center space-x-4 relative">

            {/* Search Input */}
            <div className="flex items-center bg-white border rounded-full  px-4 py-1 sm:px-6 lg:px-24 shadow-none w-full sm:w-auto relative right-28">
              <AiOutlineSearch size={30} className="text-gray-600 mr-2 relative right-20" />
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none relative right-20"
              />
            </div>
            {/* Icons: Notification and Message */}
            <div className="flex relative">
              <img src={bell} alt="" size={20}/>
            {/* <FaBell className="text-gray-600" size={20} /> */}
            <p className="relative  text-white text-sm right-3 items-center justify-center  bottom-2 bg-green-400 rounded-full h-5 w-4">2</p>
            </div>
            <img src={userlog} alt="userImage" size={10}/>
            {/* <FaEnvelope className="text-gray-600" size={20} /> */}

            {/* Dropdown Arrow */}
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
                <img src={dropdown} alt="" size={20}/>
                {/* <IoIosArrowDown className="text-gray-600" size={20} /> */}
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Account Settings</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Recently Viewed</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">Logout</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Layout for Welcome and Recent components */}
        <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6 lg:px-6 px-4">
          <div className="flex-1">
            <Welcome />
          </div>
          <div className="flex-1">
            <Recent />
          </div>
        </div>

        {/* PropertyPurchased component below */}
        <div className="lg:mt-10 mt-6 lg:px-6 px-4">
          <PropertyPurchased />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



