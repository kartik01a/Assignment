import React from "react";

interface IProps {
  title: string;
  count: number;
  dateSpan: string;
}

const CertificationCard = ({ title, count, dateSpan }: IProps) => {
  return (
    <div className="flex justify-center rounded-xl text-xs gap-x-1 px-2 py-4 bg-greenCustom">
      <span className="border-2 h-[18px] w-[18px] flex items-center justify-center border-greenDark rounded-full mt-[2px] text-greenDark font-medium">
        {count}
      </span>
      <div className="flex flex-col gap-x-2 text-sm">
        <span className="font-normal">{title}</span>
        <span className="text-grayCustom text-[10px]">{dateSpan}</span>
      </div>
    </div>
  );
};

export default CertificationCard;
