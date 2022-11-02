import React from "react";
import Navdots from "./Navdots";
import { SocialMedia } from "./SocialMedia";

const HOC = ({ children, id, social }) => {
  
  return (
    // <div id={id} className=" w-full flex flex-row items-stretch relative">
    <div id={id} className="w-full grid grid-cols-12 grid-rows-6">
      {/* left */}
      <div className="hidden md:block col-span-1 row-span-6 relative">
        <SocialMedia social={social}/>
      </div>
      {/* middle */}
      <div className="col-span-12 md:px-[20px] md:col-span-10 row-span-6 min-h-[80vh]">{children}</div>
      {/* right */}
      <div className="hidden md:block col-span-1 row-span-6  bg-transparent relative">
        <Navdots selected={id} />
      </div>
    </div>
  );
};

export default HOC;

