import React from "react";
import { useState } from "react";
import { urlFor } from "../../lib/store";
import Project from "./Project";

const Portfolio = ({ portfolio }) => {
  // selection of categorys
  const [selected, setSelected] = useState('all')
  // categorys
  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  const cats = portfolio.map((port) => {
    return port.category.toString().toLowerCase();
  });
  let uniqueCats = [];
  uniqueCats = cats.filter(unique);
  uniqueCats.push('all')
  uniqueCats = uniqueCats.sort()

  return (
    <div className="py-[75px] flex flex-col justify-start items-center gap-2">
      {/* header */}
      <div>
        <p className="text-4xl font-semibold text-center">
          My Creative <span className="text-blue">Portfolio</span> Section
        </p>
      </div>
      {/* filter */}
      <div className="flex flex-row flex-wrap justify-center items-center">
        {uniqueCats?.map((item, key) => {
          return (
            <div
              key={key}
              className={`m-2 capitalize text-base cursor-pointer  rounded-md shadow-md p-2 px-3 font-semibold hover:scale-105 ` 
              + ` ${selected == item ? ' bg-blue text-white' : ' bg-white'}`}
              onClick={()=>{
                setSelected(item)
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      {/* Portfolio projects */}
      <div className="m-auto w-full  flex flex-row flex-wrap justify-center items-start content-start">
        {portfolio?.map((port, key) => {
          let src = urlFor(port.image).url();
          return (
            <div key={key}>
            {selected == port.category.toString().toLowerCase() || selected == 'all' ? 
              <Project
              key = {key}
              category={port.category || "all"}
              name={port.name || ""}
              info={port.info || ""}
              src={src || "/assets/bmk_energie-logo.svg"}
            /> : ""
            }
            </div>
            
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
