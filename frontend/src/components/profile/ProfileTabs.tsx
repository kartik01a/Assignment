"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CustomTabs from "./CustomTabs";
import CompanyInfo from "./CompanyInfo";

interface IProps {
  data: {
    companyOverview: string;
    companyType: string;
    established: string;
    employees: string;
    companyWebsite: string;
    companyAddress: string;
    companyOrigin: string;
  };
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProfileTabs = ({ data }: IProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "1rem" }}>
      <Box sx={{ paddingX: "12px" }}>
        <Tabs
          sx={{
            minHeight: "30px",
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              color: "#14171F",
              fontSize: "14px",
              height: "30px",
              minHeight: "30px",
            }}
            label="Overview"
            {...a11yProps(0)}
          />
          {/* <Tab
            sx={{
              color: "#14171F",
              fontSize: "14px",
              height: "30px",
              minHeight: "30px",
            }}
            label="Products"
            {...a11yProps(1)}
          /> */}
        </Tabs>
      </Box>
      <CustomTabs value={value} index={0}>
        <CompanyInfo data={data} />
      </CustomTabs>
      {/* <CustomTabs value={value} index={1}>
        Item Two
      </CustomTabs> */}
    </Box>
  );
};

export default ProfileTabs;
