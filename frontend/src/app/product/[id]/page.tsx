"use client";
import HeadingHeader from "@/components/profile/HeadingHeader";
import { getProduct } from "@/lib/axios/api";
import { Box, Button, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Product from "../../../assets/Product.png";
import Image from "next/image";
import ProductHero from "@/components/product/ProductHero";
import Seller from "@/components/product/Seller";
import CertificationCard from "@/components/profile/CertificationCard";
import MarketPriceTrend from "@/components/product/MarketPriceTrend";
import ProductDetails from "@/components/product/ProductDetails";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

export default function Profile() {
  const params = useParams();
  const id = (params.id as string) ?? "";

  const [liked, setLiked] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(id),
    select: (data: any) => data?.data?.data,
  });

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="200px"
      >
        <CircularProgress sx={{ color: "black" }} />
      </Box>
    );
  }

  return (
    <div className="max-w-[420px] mx-auto bg-white">
      <HeadingHeader
        title={data.productName}
        subTitle={data?.company?.companyName}
      />
      <Image alt="Product" src={Product} className="mx-auto" />
      <ProductHero />

      <hr className="h-[12px] my-4 bg-lightGray" />

      <Seller data={data?.company} />

      <hr className="h-[12px] my-4 bg-lightGray" />

      <MarketPriceTrend />

      <hr className="h-[12px] my-4 bg-lightGray" />

      <ProductDetails data={data} />

      <hr className="h-[12px] my-4 bg-lightGray" />

      <div className="px-3 mb-[60px] pb-5">
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
        <div
          onClick={() => setLiked((prev) => !prev)}
          className="flex items-center justify-center h-9 w-9 rounded-[12px] bg-greenCustom"
        >
          {!liked && <FaRegHeart className="text-greenDark cursor-pointer" />}
          {liked && <IoIosHeart className="text-greenDark cursor-pointer" />}
        </div>
        <div className="space-x-2">
          <Button
            sx={{
              backgroundColor: "#E8F5E8",
              color: "#12A150",
              borderRadius: "12px",
              height: "45px",
              fontWeight: "600",
              textTransform: "capitalize",
            }}
          >
            Contact
          </Button>
          <Button
            sx={{
              backgroundColor: "#12A150",
              color: "white",
              borderRadius: "12px",
              height: "45px",
              fontWeight: "600",
              textTransform: "capitalize",
            }}
          >
            Request Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
