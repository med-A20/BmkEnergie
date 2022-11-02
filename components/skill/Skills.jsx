import React from "react";
import { urlFor } from "../../lib/store";
import Experience from "./Experience";
import SkillItem from "./SkillItem";

const Skills = ({ skill, experience }) => {
  return (
    <div className="flex flex-col justify-start items-center w-11/12 m-auto pt-[70px]">
      {/* header */}
      <div className="my-6">
        <p className="text-4xl font-semibold text-center">
          skills <span className="text-blue">&</span> experiences
        </p>
      </div>
      {/* Content */}
      <section className="w-11/12 flex flex-col md:flex-row justify-center items-start">
        {/* tools */}
        <section className="w-full md:w-1/2 my-5 flex flex-row flex-wrap justify-center items-center content-center">
          {skill?.map((sk, key) => {
            const src = sk.image ? urlFor(sk.image).url() :"/assets/skills-svgrepo-com.svg";
            return <SkillItem key={key} image={src} title={sk.name || ""} />;
          })}
        </section>
        {/* experinces */}
        <section className="w-full md:w-1/2 ml-4 flex flex-col justify-start items-center">
          <Experience experience={experience} />
        </section>
      </section>
    </div>
  );
};

export default Skills;
