import React from 'react';
// import Feature from './FeatureProperty';
import Section from './SectionDb';
import PropertyCard from './Card/PropertyCard'
import Section2 from '../components/Section'


const PropertySearchLayout = () => {
    return (
        <div className="flex py-10">
            {/* Left Side */}
            <div className="w-1/3 p-6 bg-white shadow-transparent transform scale-105">
                {/* Filters */}
                <div className="space-y-6 py-10 px-6 bg-slate-200 rounded-3xl p-6">
                    <div className='rounded-md '>
                        {/* <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location:</label> */}
                        <select id="location" className="mt-1 block w-full p-3 text-lg border border-gray-300 rounded-xl bg-slate-100 shadow-sm">
                            <option value="city1">Location</option>
                            <option value="city1">Benin</option>
                            <option value="city2">Kano</option>
                            <option value="city3">Lagos</option>
                            <option value="city4">Warri</option>
                        </select>
                    </div>
                    <div> 
                        {/* <label htmlFor="bedroom" className="block text-sm font-medium text-gray-700">Bedroom:</label> */}
                        <select id="bedroom" className="mt-1 block w-full p-3 text-lg border border-gray-300 rounded-xl bg-slate-100 shadow-sm">
                            <option value="1">Bedroom</option>
                            <option value="1">1 Bedroom</option>
                            <option value="2">2 Bedrooms</option>
                            <option value="3">3 Bedrooms</option>
                            <option value="4">4 Bedrooms</option>
                        </select>
                    </div>
                    <div>
                        {/* <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price Range:</label> */}
                        <select id="price" className="mt-1 block w-full p-3 text-lg border border-gray-300 rounded-xl bg-slate-100 shadow-sm ">
                            <option value="low">Price Range</option>
                            <option value="low">30M-50M</option>
                            <option value="medium">50M-100M</option>
                            <option value="high">100M-500M</option>
                            <option value="very-high">500M-1B</option>
                            <option value="luxury">1B and Above</option>
                        </select>
                    </div>
                    <div>
                        {/* <label htmlFor="property-type" className="block text-sm font-medium text-gray-700">Property Type:</label> */}
                        <select id="property-type" className="mt-1 block w-full p-3 text-lg border border-gray-300 rounded-xl bg-slate-100 shadow-sm ">
                            <option value="house">Property type</option>
                            <option value="house">Bungalow</option>
                            <option value="house">Duplex</option>
                            <option value="apartment">Penthouse</option>
                        </select>
                    </div>
                    <button className="w-full py-4 px-4 bg-[#9FA007] text-white font-medium rounded-full shadow-sm hover:bg-[#8f8f4d]">
                        Search Property
                    </button>
                    <Section/>
                </div>

                {/* Featured Prop   erties */}
                 </div>
            
                  {/* Right Side  */}
                  <div className="w-2/3 p-6 bg-gray-100">
                    {/* <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/path/to/image1.jpg" alt="Image 1" className="w-full h-auto object-cover rounded-lg" />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/path/to/image2.jpg" alt="Image 2" className="w-full h-auto object-cover rounded-lg" />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/path/to/image3.jpg" alt="Image 3" className="w-full h-auto object-cover rounded-lg" />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/path/to/image4.jpg" alt="Image 4" className="w-full h-auto object-cover rounded-lg" />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/path/to/image5.jpg" alt="Image 5" className="w-full h-auto object-cover rounded-lg" />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/path/to/image6.jpg" alt="Image 6" className="w-full h-auto object-cover rounded-lg" />
                    </div>
                </div> */}
                <Section/>
               
            </div>
        </div>
    );
}

export default PropertySearchLayout;
