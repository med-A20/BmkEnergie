import React from "react";

const Hero = ({ id, home }) => {
  return (
    <div
      className="min-h-screen max-w-[1400px] m-auto flex flex-row justify-center items-center relative"
      id={id}
    >
      <div className="abolute top-0 left-0 right-0 bottom-0 z-20">
        <div className="w-full md:w-2/3 pl-3">
          <h2 className="text-6xl font-bold capitalize text-white text-center md:text-start">
            {home[0].title} <br />
            <span className="text-yellow2">{home[0].yellowTitle}</span>
          </h2>
          <p className="py-5 capitalize text-white text-2xl text-center md:text-start">
            {home[0].description}
          </p>
          <div className="w-full flex flex-row justify-center md:justify-start">
            <a href={""} onClick={()=>{
              window.location.href = `${home[0].cv}?dl=`;
            }}>
              <button className="bg-yellow2 p-3 rounded-md mt-4 font-bold text-xl outline-none active:bg-yellow1">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
