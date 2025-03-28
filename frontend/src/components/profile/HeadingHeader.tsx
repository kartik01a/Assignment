"use client";
import { IoArrowRedoOutline } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

interface IProps {
  title: string;
  subTitle?: string;
}

const HeadingHeader = ({ title, subTitle }: IProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-between items-center w-full h-[46px] px-3">
        <IoMdArrowBack
          onClick={() => router.push("/")}
          className="w-[24px] h-[24px]"
        />
        <div className="text-[16px] font-bold">{title}</div>
        <IoArrowRedoOutline className="w-[24px] h-[24px]" />
      </div>
      {subTitle && <div className="text-sm font-normal text-grayCustom py-1">{subTitle}</div>}
    </div>
  );
};

export default HeadingHeader;
