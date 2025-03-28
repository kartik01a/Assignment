"use client";
import HeadingHeader from "@/components/profile/HeadingHeader";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileTabs from "@/components/profile/ProfileTabs";
import { getCompany } from "@/lib/axios/api";
import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function Profile() {
  const params = useParams();
  const id = (params.id as string) ?? "";

  const { data, isLoading } = useQuery({
    queryKey: ["company"],
    queryFn: () => getCompany(id),
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
      <HeadingHeader title={data.companyName} />
      <ProfileHeader
        title={data.companyName}
        revenue={data.revenue}
        companyYears={data.companyYears}
        employees={data.employees}
        companyLogo={data.companyLogo || ""}
      />
      <ProfileTabs data={data} />
    </div>
  );
}
