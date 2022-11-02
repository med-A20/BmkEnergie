import React from "react";
import { Card } from "./Card";
import { urlFor } from "../../lib/store";
import { Blockquote } from "@mantine/core";

const About = ({ about }) => {
  const data = [1, 3, 5, 6];
  return (
    <div className="flex flex-col justify-center items-center m-auto w-full py-[70px] p-1">
      {/* Header */}
      <div className="w-full md:w-5/6">
        {/* <p className="text-3xl text-center relative capitalize font-semibold">
          Great <span className="font-semibold text-blue">design</span> will not
          sell an inferior product, but it will enable a great{" "}
          <span className="font-semibold text-blue">product</span> to achieve
          its maximum potential
          <sub className="absolute bottom-[-40px] right-5 text-sm italic p-3">
            Thomas Watson
          </sub>
        </p> */}
        <Blockquote
          className="text-center text-xl capitalize font-semibold"
          color="blue"
          cite="– Thomas Watson"
        >
          Great <span className="font-semibold text-blue">design</span> will not
          sell an inferior product, but it will enable a great{" "}
          <span className="font-semibold text-blue">product</span> to achieve
          its maximum potential
        </Blockquote>
      </div>
      {/* jobs */}
      <div className="mt-[50px] w-full p-3">
        <div className="flex flex-row flex-wrap justify-center items-center content-center gap-[20px]">
          {about.map((item, key) => {
            return (
              <Card
                key={key}
                info={item.description}
                image={urlFor(item.image).url() || "/assets/photovo.webp"}
                title={item.job || ""}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
