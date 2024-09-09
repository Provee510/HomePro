import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/Vector (5).png";
import Htext from "../assets/Images/Homepro.png";
// import RegisterPage from '../components/RegisterPage'
import { useModal } from "../contexts/ModalContext";

const Nav = () => {
  const { handleOpenModal, toggleModal } = useModal();
  return (
    <div className="bg-[#F8F3DD]">
      <nav className="w-full flex flex-col md:flex-row items-center py-4 bg-[#F8F3DD] text-white justify-between lg:w-[90%] mx-auto">
        {/* Logo Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 mr-2" />
            <img src={Htext} alt="Homepro Text" className="h-8" />
          </NavLink>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col md:flex-row flex-1 items-center md:justify-center w-full">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg md:text-xl text-center md:text-left -mx-32 md:ml-28 md:gap-10">
            <li className="hover:text-yellow-600 hover:border-b-2 text-[#9fa007]">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-yellow-600 hover:border-b-2 text-black">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="hover:text-yellow-600 hover:border-b-2 text-black">
              <NavLink to="/listings">Listings</NavLink>
            </li>
            <li className="hover:text-yellow-600 hover:border-b-2 text-black">
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className="hover:text-yellow-600 hover:border-b-2 text-black">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>

          {/* Get Started Button */}
          <div className="mt-4 md:mt-0 md:ml-96">
            <button
              className="hover:text-yellow-600 px-3 py-2 rounded-full text-[#9fa007] text-lg md:text-xl outline"
              onClick={handleOpenModal}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
