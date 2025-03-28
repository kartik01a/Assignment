import Image from "next/image";
import React from "react";
import Prices from "../../assets/prices.png";
import { IoIosArrowForward } from "react-icons/io";

const MarketPriceTrend = () => {
  return (
    <div className="px-3 flex flex-col">
      <h2 className="text-2xl font-bold">Market Price Trend</h2>
      <span className="text-lg font-normal">
        Prices sre <strong className="font-bold">typical </strong>right now
      </span>
      <span className="text-sm font-normal mb-3">
        Currently <strong className="font-bold">$500/units. </strong>
        This is around the <strong className="font-bold">usual </strong> price.
        The least expensive price is around $300 - $600
      </span>
      <Image alt="prices" src={Prices} className="max-w-400px w-full mx-auto" />
      <div className="flex items-center gap-x-2 mt-4 text-greenDark text-[16px]">
        <span className="text-[16px] font-semibold"> View Price History</span>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default MarketPriceTrend;
