import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/Vector (5).png"
import Htext from "../assets/Images/Homepro.png"



const Nav = () => {
  return (
    <nav className="w-full flex items-center py-4 bg-[#F8F3DD] text-white justify-between">
      <div className="">
        <NavLink to="/" className="flex items-baseline ml-28">
         <img src={logo} alt="" />
          <img src={Htext} alt="" />
        </NavLink>
      </div>

      <div className="flex flex-1 items-center justify-between gap-5 pl-12 ml-px">
        <div className="ml-32">
        <ul className="flex space-x-4 text-xl pl-20 gap-12 ">
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
        </div>

        <div className="flex items-center space-x-4">
          {/* <input type="text" placeholder="Search..." className="border-2 rounded-md py-2 w-full focus:outline-none" /> */}
          <button className="hover:text-yellow-600 px-3 py-2 rounded-full text-[#9fa007] text-xl outline mr-8 mt-3">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
