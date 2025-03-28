"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Tabs,
  Tab,
  CircularProgress,
  Button,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getAllCompany, getAllProduct } from "@/lib/axios/api";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const {
    data: companies,
    isLoading: isLoadingCompanies,
    error: companiesError,
  } = useQuery({
    queryKey: ["allCompany"],
    queryFn: () => getAllCompany(),
    select: (data: any) => data?.data?.data,
  });

  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryKey: ["allProducts"],
    queryFn: () => getAllProduct(),
    select: (data: any) => data?.data?.data,
  });

  const renderList = (items: any[] | undefined, listName: string) => {
    console.log(items, "items");
    if (!items) return null;

    let name: string;
    if (listName === "companies") name = "companyName";
    if (listName === "products") name = "productName";

    return (
      <List>
        {items.map((item) => (
          <ListItem
            key={item._id}
            onClick={() =>
              router.push(
                listName === "companies"
                  ? `/profile/${item._id}`
                  : `/product/${item._id}`
              )
            }
            divider
            sx={{
              backgroundColor: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#F0F0F0",
              },
            }}
          >
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  sx={{
                    color: "#12A150",
                    fontWeight: "medium",
                  }}
                >
                  {item[name]}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    );
  };

  const renderContent = () => {
    if (isLoadingCompanies || isLoadingProducts) {
      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="200px"
        >
          <CircularProgress sx={{ color: "#12A150" }} />
        </Box>
      );
    }

    if (companiesError) {
      return (
        <Typography variant="body1" color="error" align="center">
          Error loading {companiesError ? "companies" : "products"}
        </Typography>
      );
    }

    return activeTab === 0 ? renderList(companies, "companies") : renderList(products,"products");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#E8F5E8",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "#E8F5E8",
          borderRadius: 0,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            py: 2,
            color: "#12A150",
            fontWeight: "bold",
          }}
        >
          Companies & Products
        </Typography>

        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#12A150",
            },
          }}
        >
          <Tab
            label="Companies"
            sx={{
              color: activeTab === 0 ? "#12A150" : "gray",
              fontWeight: "bold",
            }}
          />
          <Tab
            label="Products"
            sx={{
              color: activeTab === 1 ? "#12A150" : "gray",
              fontWeight: "bold",
            }}
          />
        </Tabs>

        <Box
          sx={{
            backgroundColor: "white",
            minHeight: "calc(100vh - 200px)",
          }}
        >
          {renderContent()}
        </Box>
      </Paper>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          bottom: 0,
          height: "60px",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#E8F5E8",
          maxWidth: "420px",
          width: "100%",
          paddingX: "12px",
        }}
      >
        <Button
          onClick={() => router.push("/create-company")}
          sx={{ color: "white", bgcolor: "#12A150" }}
        >
          Add Company
        </Button>
        <Button
          onClick={() => router.push("/create-product")}
          sx={{ color: "white", bgcolor: "#12A150" }}
        >
          Add Product
        </Button>
      </Box>
    </Box>
  );
}
