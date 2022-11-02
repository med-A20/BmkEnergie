import React from "react";
import TestamonialItem from "./TestamonialItem";

const Testamonials = ({ testamonial }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center my-[70px]">
      {/* headong */}
      <article className="mx-auto my-3 mb-[50px]">
        <div className="flex flex-col justify-start items-center">
          {/* Quote */}
          <p
          className="text-3xl font-semibold text-center p-[40px]"
          >What Our <span className="text-blue">Clients</span> Says About Us</p>
          {/* paraph */}
          <p
          className="text-center italic text-slate-400 font-medium px-[40px]"
          >
            From testimonials and personal experience we have enough information
            to conclude that IT'S POSSIBLE TO DESIGN AND LIVE AN EXTRAORDINARY
            LIFE
          </p>
        </div>
      </article>
      {/* testamonial */}
      <article className="mx-auto w-full md:w-9/12 px-1">
        <TestamonialItem testamonial={testamonial} />
      </article>
    </section>
  );
};

export default Testamonials;
