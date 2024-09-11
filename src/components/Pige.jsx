import React from 'react'

const Pige = () => {
  return (
    <div className="flex  lg:py-[1%]  space-x-10  lg:ml-0 lg:w-[75%]  lg:p-32 relative lg:left-96 lg:top-16 left-9 bottom-10 ">
            
            <div className="flex items-center  lg:w-[100%] space-x-5 relative   lg:bottom-32">
            <button className="p-3 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 lg:w-[4%] ">
              &lt; {/* Left Arrow */}
            </button>
              <button className="p-[13px] bg-[#b3b328] text-gray-700 rounded-md shadow-sm hover:bg-[#626215] lg:w-[4%]  ">
                1
              </button>
              <button className="p-[13px] bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 lg:w-[4%]">
                2
              </button>
              <button className="p-[13px] bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 lg:w-[4%]">
                ...
              </button>
              <button className="p-[13px] bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 lg:w-[4%]">
                10
              </button>
              <button className="p-3 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 lg:w-[4%]">
               &gt;
               {/* /* Right Arrow  */} 
            </button>
            </div>
           
          </div>
  )
}

export default Pige;