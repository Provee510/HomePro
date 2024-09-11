import React from "react";
import images from "../assets/Images/Hero section (1).png"
import WhoweAre from "../components/WhoWEAre";
import OurStory from '../components/OurStory';
import OurMission from '../components/OurMission'
import OurValues from '../components/OurValues'
import TheTeam from "../components/TheTeam";

const heroAbout = () => {
  return (
    <div className=" relative w-full h-64 md:h-96">
      <img src={images} alt="Sample" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <div className="flex items-center text-white mb-2">
          <img src="{elipse}" alt="" />
          <h1 className="text-4xl md:text-5xl font-bold">About Homepro</h1>
        </div>
        <div className="w-full lg:flex justify-center items-center text-white hidden md:block ">
          {/* <FaInfoCircle className="mr-2 text-lg md:text-xl" /> */}
          <div className="lg:w-[50%] md:w-[80%] mx-auto flex justify-between items-center">
            {/* <div className="flex items-center"> */}
              <div className="w-4 h-4 bg-[#fef5e2] rounded-full mr-2"></div>
              <span>5,000+ homes sold</span>
              <div className="w-4 h-4 bg-[#fef5e2] rounded-full mr-2"></div>
              <span>800 billion naira in sales</span>
              <div className="w-4 h-4 bg-[#fef5e2] rounded-full mr-2"></div>
              <span>4,500+ satisfied customers</span>
            {/* </div> */}
          </div>
        </div>
      </div>
       {<WhoweAre/>}
       <OurStory/>
       <OurMission/>
       <OurValues/>
       <TheTeam/>
    </div>
   
  );
};

export default heroAbout;