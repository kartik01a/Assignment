"use client"
import React, { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Stamp from "../../assets/Stamp.png";
import Check from "../../assets/SealCheck.png";
import CertificationCard from "./CertificationCard";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

interface IProps {
  data: {
    companyOverview: string;
    companyType: string;
    established: string;
    employees: string;
    companyWebsite: string;
    companyAddress: string;
    companyOrigin: string;
    [key: string]: string;
  };
}

const table = {
  companyType: "Business Type",
  companyOrigin: "Origin",
  established: "Year Established",
  employees: "Number of Employees",
  companyWebsite: "Company Website",
  companyAddress: "Company Address",
};

const CompanyInfo = ({ data }: IProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <div className="px-3">
        <h2 className="text-2xl font-bold mb-2">Overview</h2>
        <p className="text-grayCustom text-[16px]">{data.companyOverview}</p>
      </div>

      <hr className="h-[12px] my-4 bg-lightGray" />

      <div className="px-3">
        <h2 className="text-2xl font-bold mb-2">About</h2>
        <div className="grid grid-cols-2 text-sm gap-y-3">
          {Object.entries(table).map(([key, value]) => (
            <React.Fragment key={key}>
              <span className="text-grayCustom">{value}</span>
              <span className="text-black text-left">{data[key]}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <hr className="h-[12px] my-4 bg-lightGray" />

      <div className="px-3 relative">
        <Image
          className="absolute bottom-0 right-2"
          alt="Stamp"
          src={Stamp}
          width={93}
          height={97}
        />
        <h2 className="text-2xl font-bold mb-2">Verification Details</h2>
        <div className="bg-greenCustom rounded-xl p-4">
          <div className="flex flex-col justify-center">
            <div className="flex gap-x-1 items-center">
              <span className="text-sm font-bold uppercase">
                Verified by Gtx
              </span>
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

      <hr className="h-[12px] my-4 bg-lightGray" />

      <div className="px-3 mb-20">
        <h2 className="text-2xl font-bold">Certifications</h2>
        <p className="text-grayCustom text-sm font-normal">
          Click on the certifications to view details
        </p>
        <div className="grid grid-cols-2 text-sm gap-3 mt-2">
          <CertificationCard
            title="FairTrade"
            count={1}
            dateSpan="1 Jan 2024 - 31 Dec 2024"
          />
          <CertificationCard
            title="Organic"
            count={2}
            dateSpan="1 Jan 2024 - 31 Dec 2024"
          />
          <CertificationCard
            title="FreshWay"
            count={3}
            dateSpan="1 Jan 2024 - 31 Dec 2024"
          />
        </div>
      </div>
      <div className="h-[60px] items-center fixed bottom-0 w-full max-w-[420px] flex justify-between px-3 shadow-inner bg-white">
        <div onClick={()=> setLiked((prev)=> !prev)} className="flex items-center justify-center h-9 w-9 rounded-[12px] bg-greenCustom">
          {!liked && <FaRegHeart className="text-greenDark cursor-pointer" />}
          {liked && <IoIosHeart className="text-greenDark cursor-pointer" />}
        </div>
        <Button
          sx={{
            backgroundColor: "#E8F5E8",
            color: "#12A150",
            borderRadius: "12px",
            height: "45px",
            fontWeight: "600"
          }}
        >
          Contact
        </Button>
      </div>
    </div>
  );
};

export default CompanyInfo;
