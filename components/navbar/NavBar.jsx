import Image from "next/image";
import {client, urlFor} from '../../lib/store'
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";

const NavBar = ({home}) => {
  const [clicked, setClicked] = useState(false);

  // for responsive 
  const [width, setWidth] = useState(false)
  useEffect(()=>{
    setWidth(window.innerWidth > '767' ? true : false)
  },)
  // ============
  // Sanity
  const src = urlFor(home[0].logo).url()
  // ++++++++++++
  return (
    <section className="max-w-[1400px] m-auto px-[5px] md:px-[40px] flex flex-row justify-between items-center">
      {/* LOGO */}
      <div className="p-1">
        <Image
          onLoad={()=>src}
          // src="/assets/bmk_energie-logo.svg"
          src={src || "/assets/bmk_energie-logo.svg"}
          alt="test"
          height={width ? "55px" : "45px"}
          width={width ? "80px" : "65px"}
        />
      </div>
      {/* navigation */}
      {/* desktop */}
      <div className="hidden md:flex flex-row justify-around items-centre">
        {[
          "home",
          "about",
          "portfolio",
          "skills",
          "testamonials",
          "contact",
        ].map((item, key) => {
          return (
            <a
              href={`#${item}`}
              key={key}
              className="m-2 mx-4 text-yellow2 text-xl font-semibold capitalize hover:scale-[1.15] hover:text-yellow1"
            >
              {item}
            </a>
          );
        })}
      </div>
      {/* mobiel */}
      <div className="md:hidden relative">
        {clicked ? (
          <BiMenuAltRight
            onClick={() => {
              setClicked((prev) => !prev);
            }}
            className="text-4xl"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => {
              setClicked((prev) => !prev);
            }}
            className="text-3xl"
          />
        )}
        <div
          className={
            `  absolute  w-[250px] pl-3 top-[50px] z-[90] flex  flex-col justify-around items-centre bg-blue rounded-md ` +
            `${clicked ? "right-[0px]" : " right-[-700px]"}`
          }
        >
          {[
            "home",
            "about",
            "portfolio",
            "skills",
            "testamonials",
            "contact",
          ].map((item, key) => {
            return (
              <a
                href={`#${item}`}
                onClick={() => {
                  setTimeout(() => {
                    setClicked(false);
                  }, 1700);
                }}
                key={key}
                className="m-4 border-b-[1px] text-yellow2 text-xl font-semibold capitalize hover:scale-[1.15] hover:text-yellow2"
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NavBar;






