

import React, { useState } from 'react';
import MainFeature from './MainFeature';
import locationIcon from '../assets/Images/Ellipse 1.png'; 

const MainLayout = () => {
  const [selectedLocation, setSelectedLocation] = useState('Select Location');
  const locations = ['Benin', 'Aba', 'Kano'];

  return (
    <div className="flex p-6">
      {/* Left Sidebar */}
      <div className="w-1/3 pr-6">
        {/* Location Dropdown */}
        <div className="mb-6 flex items-center border rounded-md p-2">
          <img src={locationIcon} alt="Location" className="w-6 h-6 mr-2" />
          <span className="flex-grow">{selectedLocation}</span>
          <select
            className="ml-auto bg-transparent border-none cursor-pointer"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option disabled>Select Location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Featured Properties */}
        <MainFeature />

        {/* Property Images */}
        <div className="grid grid-cols-2 gap-4 mt-10">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-slate-200 rounded-xl overflow-hidden">
              <img
                src={`path_to_property_image_${index + 1}.jpg`} // Placeholder path
                alt={`Property ${index + 1}`}
                className="w-full h-36 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-2/3">
        {/* Add any other content you want to display here */}
      </div>
    </div>
  );
};

export default MainLayout;
