import React from 'react';

const AgentCard = ({ name, image, description, phone }) => {
  return (
    <div className="flex flex-col items-center">
      <img 
        src={image} 
        alt={name} 
        className="w-24 h-24  object-cover mb-4"
      />
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-1">{name}</h2>
        <p className="text-sm text-gray-600 mb-1">{description}</p>
        <p className="text-sm text-gray-800">{phone}</p>
      </div>
    </div>
  );
};

export default AgentCard;
