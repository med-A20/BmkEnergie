import React from "react";
import Image from "next/image";
import Carousel from "better-react-carousel";
import { urlFor } from "../../lib/store";

const TestamonialItem = ({testamonial}) => {
  return (
    <div className="mx-auto">
      {testamonial.length > 0 && <Carousel cols={1} rows={1} gap={3} loop >
        {testamonial?.map((testa, key) => {
          const src = testa.image ? urlFor(testa.image).url() :'/assets/avatar-user-svgrepo-com.svg';
          return (
            <Carousel.Item
              key={key}
            >
              <div className="min-h-[300px] min-w-[280px] flex flex-col md:flex-row justify-start items-stretch bg-white my-5  shadow-lg rounded-lg p-2 mr-[20px]">
                {/* Image */}
                <div className="min-w-[100px] flex flex-col justify-center items-center mx-5 overflow-hidden">
                  <Image
                    onLoad={() => src}
                    src={src}
                    width={100}
                    height={100}
                    objectFit="cover"
                    alt="test"
                    className="rounded-full"
                  />
                </div>
                {/* Infos */}
                <div className="flex flex-col justify-between items-center md:items-start ">
                  {/* testamonial */}
                  <div className="order-2 md:order-1 pt-4">
                    <p className="text-xl font-light capitalize text-center md:text-start">
                      {testa.testamonial}
                    </p>
                  </div>
                  {/* info Client */}
                  <div className=" order-1 md:order-2 py-4 flex flex-col justify-center md:items-start items-center">
                    <p className="text-lg font-medium text-blue capitalize">
                      {testa.name}
                    </p>
                    <p className="italic capitalize text-center md:text-start font-semibold text-base text-slate-400">
                      {testa.job}
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>}
    </div>
  );
};

export default TestamonialItem;
