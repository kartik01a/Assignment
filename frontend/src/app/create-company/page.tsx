"use client"
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  InputAdornment,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LinkIcon from "@mui/icons-material/Link";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DescriptionIcon from "@mui/icons-material/Description";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";
import { toast } from "react-toastify";
import { CreateCompanyInput, createCompanySchema } from "@/lib/zod";
import { createCompany } from "@/lib/axios/api";
import { useRouter } from "next/navigation";

interface CompanyFormData {
  companyName: string;
  companyType: string;
  companyOverview: string;
  companyOrigin: string;
  established: string;
  employees: string;
  companyWebsite: string;
  companyAddress: string;
  revenue: string;
  companyYears: string;
}

const CompanyForm: React.FC = () => {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCompanyInput>({
    resolver: zodResolver(createCompanySchema)
  })

  const mutation = useMutation({
    mutationFn: (data: any)=>createCompany(data),
    onSuccess: () => {
      toast.success("Company added successfully!");
      router.push("/")
    },
    onError: (error) => {
      toast.error("Failed to add company");
    },
  });

  const onSubmit = (data: CompanyFormData) => {
    const formData = new FormData();
    (Object.keys(data) as Array<keyof CompanyFormData>).forEach(key => {
      formData.append(key, data[key]);
    });
    mutation.mutate(formData);
  };

  const renderTextField = (
    name: keyof CompanyFormData,
    label: string,
    icon: React.ReactNode,
    multiline: boolean = false,
    type: string = "text"
  ) => (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          label={label}
          multiline={multiline}
          rows={multiline ? 4 : 1}
          error={!!errors[name]}
          helperText={errors[name]?.message as string}
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{icon}</InputAdornment>
            ),
          }}
        />
      )}
    />
  );

  return (
    <Container
      maxWidth="xs"
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        py: 4,
        px: 3,
        boxShadow: 2,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{ color: "#12A150", fontWeight: "bold" }}
      >
        Add Company
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 1 }}
      >
        {renderTextField(
          "companyName",
          "Company Name",
          <BusinessIcon />,
          false
        )}
        {renderTextField(
          "companyType",
          "Company Type",
          <LocationCityIcon />,
          false
        )}
        {renderTextField(
          "companyOverview",
          "Company Overview",
          <DescriptionIcon />,
          true
        )}
        {renderTextField(
          "companyOrigin",
          "Company Origin",
          <LocationCityIcon />,
          false
        )}
        {renderTextField(
          "established",
          "Established Year",
          <CalendarTodayIcon />,
          false,
        )}
        {renderTextField(
          "employees",
          "Number of Employees",
          <PeopleIcon />,
          false,
        )}
        {renderTextField(
          "companyWebsite",
          "Company Website",
          <LinkIcon />,
          false
        )}
        {renderTextField(
          "companyAddress",
          "Company Address",
          <LocationCityIcon />,
          true
        )}
        {renderTextField(
          "revenue",
          "Revenue",
          <AttachMoneyIcon />,
          false,
        )}
        {renderTextField(
          "companyYears",
          "Years in Business",
          <CalendarTodayIcon />,
          false,
        )}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={mutation.isPending}
          sx={{
            mt: 3,
            mb: 2,
            backgroundColor: "#12A150",
            "&:hover": { backgroundColor: "#0E8C40" },
          }}
        >
          {mutation.isPending ? "Submitting..." : "Add Company"}
        </Button>
      </Box>
    </Container>
  );
};

export default CompanyForm;
