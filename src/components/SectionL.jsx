import React from "react";
import { SectionB } from "./Db/Index";
import image1 from "../assets/Images/Frame 37 (1).png";
import image2 from "../assets/Images/Frame 37 (16).png";
import image3 from "../assets/Images/Frame 37 (2).png";
import image4 from "../assets/Images/Frame 37 (3).png";
import image5 from "../assets/Images/Frame 37 (4).png";
import nairaIcon from "../assets/Icons/CurrencyNgn.png";

const SectionL = () => {
  return (
    <div className="py-12 bg-white">
      <h1 className="text-3xl font-bold p-5">Featured Properites</h1>
      <div>
        {SectionB &&
          SectionB.map((item, index) => {
            return (
              <div className="flex w-[400px] py-5 hover:items gap-4">
                <div className="w-[100px]">
                  <img src={item.image} alt="img" className=" h-[]" />
                </div>
                <div className="text-xl font-semibold ">
                  <h1 className="">{item.title}</h1>
                  <div className="flex text-custom-green">
                    {" "}
                    <img src={nairaIcon} alt="nariaIcon" className="" />
                    {item.price.toLocaleString("en-Us")}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SectionL;
