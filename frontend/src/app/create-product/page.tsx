"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { toast } from "react-toastify";
import { createProductSchema, ProductType } from "@/lib/zod";
import { createProduct, getAllCompany } from "@/lib/axios/api";
import { useRouter } from "next/navigation";

interface ProductFormData {
  productName: string;
  productOrigin: string;
  productDetails: string;
  productForecast: string;
  productColor: string;
  productCultivationType: string;
  productMoisture: string;
  productFormAndCut: string;
  company: string;
}

const ProductForm: React.FC = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductType>({
    resolver: zodResolver(createProductSchema),
  });

  const [companies, setCompanies] = useState([]);

  const mutation = useMutation({
    mutationFn: (data: any) => createProduct(data),
    onSuccess: () => {
      toast.success("Product added successfully!");
      router.push("/");
    },
    onError: (error) => {
      toast.error("Failed to add Product");
    },
  });

  const { data: allCompany } = useQuery({
    queryKey: ["allCompany"],
    queryFn: () => getAllCompany(),
    select: (data: any) => data?.data?.data,
  });

  useEffect(() => {
    console.log(allCompany,"allCompany")
    if (allCompany && allCompany?.length > 0) {
      const UpdatedList = allCompany.map(
        (item: { companyName: string; _id: string }) => {
          return {
            label: item.companyName,
            value: item._id,
          };
        }
      );
      console.log(UpdatedList, "UpdatedList");
      setCompanies(UpdatedList);
    }
  }, [allCompany]);

  const onSubmit = (data: ProductFormData) => {
    const formData = new FormData();
    (Object.keys(data) as Array<keyof ProductFormData>).forEach((key) => {
      formData.append(key, data[key]);
    });
    mutation.mutate(formData);
  };

  const renderTextField = (
    name: keyof ProductFormData,
    label: string,
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
        Add Product
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 1 }}
      >
        {renderTextField("productName", "Product Name", false)}
        <FormControl fullWidth>
          <InputLabel id="age-label">Company</InputLabel>
          <Controller
            name="company"
            control={control}
            rules={{ required: "Company is required" }}
            render={({ field }) => (
              <Select {...field} labelId="age-label" label="Company">
                {companies?.map((item: { label: string; value: string }) => {
                  return <MenuItem value={item.value}>{item.label}</MenuItem>;
                })}
              </Select>
            )}
          />
          {errors.company && (
            <p style={{ color: "red", fontSize: "0.8rem", paddingLeft:"1rem" }}>
              {errors.company.message as string}
            </p>
          )}
        </FormControl>
        {renderTextField("productOrigin", "Product Origin", false)}
        {renderTextField("productDetails", "Product Details", true)}
        {renderTextField("productForecast", "Product Forecast", false)}
        {renderTextField("productColor", "Product Color", false)}
        {renderTextField(
          "productCultivationType",
          "Product Cultivation Type",
          false
        )}
        {renderTextField("productMoisture", "Product Moisture", false)}
        {renderTextField("productFormAndCut", "Product FormAndCut", false)}

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
          {mutation.isPending ? "Submitting..." : "Add Product"}
        </Button>
      </Box>
    </Container>
  );
};

export default ProductForm;
