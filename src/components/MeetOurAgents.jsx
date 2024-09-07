import React from 'react';
import { meetouragents } from './Db/Index';
import AgentCard from './Card/AgentCard'; 
import Wrapper from '../components/Wrapper';
import backgroundImage from '../assets/Images/Line 3.png'; 

// const MeetOurAgents = () => {
//   return (
//    <div className='bg-purple-950 flex flex-nowrap gap-5 mb-7 flex-col lg:flex-row'>
//      <Wrapper 
//       className="bg-cover bg-center min-h-screen" 
//       style={{ backgroundImage: `url(${backgroundImage})` }} 
//     >
//       <div className="py-10 px-4">
//         <h1 className='text-5xl font-bold mb-10 text-white text-center'>Meet Our Agents</h1>
//         <div className='flex justify-center gap-5'>
//           {meetouragents && meetouragents.length > 0 && meetouragents.map((agent) => (
//             <div key={agent._id} className='flex-shrink-0 w-1/4'>
//               <AgentCard {...agent} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </Wrapper>
//    </div>
//   );
// };

const MeetOurAgents = () => {
  return (
    <Wrapper className="">
      <h1 className='text-5xl font-bold py-10'>Meet Our Agents</h1>
      <div className='flex flex-nowrap gap-5 mb-7 flex-col lg:flex-row items-center '>
      {meetouragents && meetouragents.length > 0 && meetouragents.map((agent) => (
            <div key={agent._id} className='flex-shrink-0 w-1/4 '>
              <AgentCard {...agent} />
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default MeetOurAgents
