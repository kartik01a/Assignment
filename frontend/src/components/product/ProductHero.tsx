import Image from "next/image";
import React from "react";
import Vector from "../../assets/Vector.png";
import Calander from "../../assets/Calander.png";
import IN from "../../assets/flag.png";
import Check from "../../assets/ListChecks.png";

const ProductHero = () => {
  return (
    <div className="grid grid-cols-4 gap-x-4 p-3">
      <div className="flex flex-col items-center justify-center">
        <Image alt="Vector" src={Vector} width={21} height={21} />
        <span className="text-center text-[12px] font-normal">Verified by GTX</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image alt="Calander" src={Calander} width={21} height={21} />
        <span className="text-center text-[12px] font-normal">15 Years Old Company</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image alt="IN" src={IN} width={21} height={21} />
        <span className="text-center text-[12px] font-normal">Based in India</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image alt="Check" src={Check} width={21} height={21} />
        <span className="text-center text-[12px] font-normal">View All Details</span>
      </div>
    </div>
  );
};

export default ProductHero;
