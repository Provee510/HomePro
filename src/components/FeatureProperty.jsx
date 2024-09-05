import React from 'react';
import image1 from '../assets/Images/Frame 37 (1).png'
import image2 from '../assets/Images/Frame 37 (16).png'
import image3 from '../assets/Images/Frame 37 (2).png'
import image4 from '../assets/Images/Frame 37 (3).png'
import image5 from '../assets/Images/Frame 37 (4).png'

const Feature = () => {
    const properties = [
        { id: 1, image1: '../assets/Images/Frame 37 (1).png', location: 'Penthouse at Awka', amount: '2,000,000' },
        { id: 2, image2: '../assets/Images/Frame 37 (16).png', location: 'Familt duplex at Lagos', amount: '3,000,000' },
        { id: 3, image3: '../assets/Images/Frame 37 (2).png', location: 'Studio apartment at Abuja', amount: '1,000,000' },
        { id: 4, image4: '../assets/Images/Frame 37 (3).png', location: 'Comfortable villa at Kaduna', amount: '190,000,000' },
        { id: 5, image5: {image5}, location: 'Bungalow at Port-harcourt', amount: '350,000,000' },
    ];

    return (
        <div className="space-y-6">
            {properties.map(property => (
                <div key={property.id} className="flex items-start space-x-4 bg-gray-100 p-4 rounded-md shadow-sm">
                    <img src={property.image} alt={`Feature ${property.id}`} className="w-32 h-24 object-cover rounded-md" />
                    <div className="flex flex-col justify-center">
                        <h3 className="text-lg font-semibold text-gray-800">{property.location}</h3>
                        <p className="text-xl font-bold text-gray-900 mt-1">{property.amount}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Feature;
