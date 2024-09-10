import React from 'react';
import pana from '../assets/Icons/icons/pana.png'

const Welcome = () => {
    return (
        <div className="bg-white lg:rounded-3xl shadow-lg w-full h-full lg:h-[50vh] lg:p-1 flex relative overflow-hidden lg:overflow-auto scrollbar-none items-center ">
            <div className="flex flex-col items-center justify-center space-y-2 lg:p-1 relative w-[70%]">
                <h1 className=" relative  text-xl lg:text-2xl font-bold ">
                    Welcome Maryam Moyo
                </h1>
                <p className='p-5'>
                    Manage your property searches, saved listings, and more from your personalized dashboard. Whether you're actively looking for or just browsing, we've got everything you need to stay organized and make informed decisions.
                </p>
            </div>
            <div className='w-[30%] '>
                <div>
                  <img src={pana} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Welcome;
