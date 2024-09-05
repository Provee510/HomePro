import React from 'react';
import { meetouragents } from './db';
import AgentCard from './Card/AgentCard'; 
import Wrapper from '../components/Wrapper';
import backgroundImage from '../assets/Images/Line 3.png'; 

const MeetOurAgents = () => {
  return (
    <Wrapper 
      className="bg-cover bg-center min-h-screen" 
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
      <div className="py-10 px-4">
        <h1 className='text-5xl font-bold mb-10 text-white text-center'>Meet Our Agents</h1>
        <div className='flex justify-center gap-5'>
          {meetouragents && meetouragents.length > 0 && meetouragents.map((agent) => (
            <div key={agent._id} className='flex-shrink-0 w-1/4'>
              <AgentCard {...agent} />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default MeetOurAgents;
