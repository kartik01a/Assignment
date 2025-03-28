import Image from "next/image";
import React from "react";
import Shield from "../../assets/ShieldCheck.png";
import ProTag from "../../assets/Pro.png";
import Check from "../../assets/SealCheck.png";
import { SiTicktick } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";

interface IProps {
  data: {
    revenue?: string;
    companyYears?: string;
    employees?: string;
    companyName?: string;
  };
}

const Seller = ({ data }: IProps) => {
  const { revenue, companyYears, employees, companyName } = data;
  return (
    <div className="px-3 flex flex-col">
      <h2 className="text-2xl font-bold mb-2">Seller</h2>
      <div className="flex items-center justify-start h-[31px]">
        <h2 className="mr-2 text-lg font-bold">{companyName}</h2>
        <Image
          alt="Shield"
          className="mr-1"
          width={24}
          height={24}
          src={Shield}
        />
        <Image alt="proTag" width={24} height={24} src={ProTag} />
      </div>
      <div className="flex gap-x-2 text-sm font-normal text-grayCustom mb-3">
        <p>{revenue} Revenue</p>
        <p>&#x2022; {employees} Employees</p>
        <p>&#x2022; {companyYears} Years</p>
      </div>
      <div className="bg-greenCustom rounded-xl p-4">
        <div className="flex flex-col justify-center">
          <div className="flex gap-x-1 items-center">
            <span className="text-sm font-bold uppercase">Verified by Gtx</span>
            <Image alt="Check" src={Check} width={18} height={18} />
          </div>
          <div className="flex gap-x-2 items-center text-[12px]">
            <SiTicktick className="text-grayCustom w-[12px] h-[12px]" />
            <span>Business Email</span>
          </div>
          <div className="flex gap-x-2 items-center text-[12px]">
            <SiTicktick className="text-grayCustom w-[12px] h-[12px]" />
            <span>Business Registeration Number</span>
          </div>
          <div className="flex gap-x-2 items-center text-[12px]">
            <SiTicktick className="text-grayCustom w-[12px] h-[12px]" />
            <span>Business Profile</span>
          </div>

          <div className="flex items-center gap-x-2 mt-4 text-greenDark text-[16px]">
            <span className="text-[16px] font-semibold">
              {" "}
              View registeration Details
            </span>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
