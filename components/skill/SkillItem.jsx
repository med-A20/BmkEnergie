import React from "react";
import Image from "next/image";

const SkillItem = ({ title, image }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-3 p-1 rounded-lg shadow-lg">
        <Image
          onLoad={() => image}
          src={image}
          height={75}
          width={75}
          alt="test"
          className="rounded-lg"
        />
      </div>
      <p className="text-center text-xl font-medium italic">{title}</p>
    </div>
  );
};

export default SkillItem;
