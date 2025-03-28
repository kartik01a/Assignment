import * as z from "zod";

// Custom function to validate revenue format
const validateRevenue = (value: string) => {
  const revenueRegex = /^\$?(\d{1,3}(,\d{3})*|\d+)(\.\d{1,2})?[MBK]?$/;
  return revenueRegex.test(value);
};

// Custom function to validate employees (single number or range)
const validateEmployees = (value: string) => {
  const employeesRegex = /^\d+(-\d+)?$/;
  return employeesRegex.test(value);
};

export const createCompanySchema = z.object({
  companyName: z
    .string()
    .trim()
    .min(2, { message: "Company Name must be between 2 and 100 characters" })
    .max(100, { message: "Company Name must be between 2 and 100 characters" }),

  companyType: z
    .string()
    .trim()
    .min(1, { message: "Company Type is required" }),

  companyOverview: z
    .string()
    .trim()
    .min(10, {
      message: "Company Overview must be between 10 and 1000 characters",
    })
    .max(1000, {
      message: "Company Overview must be between 10 and 1000 characters",
    }),

  companyOrigin: z
    .string()
    .trim()
    .min(1, { message: "Company Origin is required" })
    .max(100, { message: "Company Origin must be less than 100 characters" }),

  established: z
    .string()
    .trim()
    .regex(/^\d{4}$/, { message: "Established year must be a 4-digit year" })
    .refine(
      (value) => {
        const year = parseInt(value, 10);
        const currentYear = new Date().getFullYear();
        return year >= 1800 && year <= currentYear;
      },
      { message: "Established year must be between 1800 and current year" }
    ),

  employees: z.string().trim().refine(validateEmployees, {
    message: 'Employees must be a number or range (e.g., "500" or "100-500")',
  }),

  companyWebsite: z
    .string()
    .trim()
    .min(1, { message: "Company Website is required" })
    .url({ message: "Invalid Company Website URL" })
    .transform((value) =>
      value.startsWith("http") ? value : `https://${value}`
    ),

  companyAddress: z
    .string()
    .trim()
    .min(10, {
      message: "Company Address must be between 10 and 200 characters",
    })
    .max(200, {
      message: "Company Address must be between 10 and 200 characters",
    }),

  revenue: z.string().trim().refine(validateRevenue, {
    message: 'Invalid revenue format. Use format like "$10M" or "500K"',
  }),

  companyYears: z
    .string()
    .trim()
    .regex(/^\d+$/, { message: "Company Years must be a positive number" }),
});

export const createProductSchema = z.object({
  productName: z.string().trim().min(1, "Product name is required"),
  productOrigin: z.string().trim().min(1, "Product origin is required"),
  productDetails: z
    .string()
    .trim()
    .min(10, "Product details must be at least 10 characters"),
  productForecast: z.string().trim().min(1, "Product forecast is required"),
  productColor: z.string().trim().min(1, "Product color is required"),
  productCultivationType: z
    .string()
    .trim()
    .min(1, "Cultivation type is required"),
  productMoisture: z
    .string()
    .trim()
    .min(1, "Product moisture content is required"),
  productFormAndCut: z
    .string()
    .trim()
    .min(1, "Product form and cut is required"),
  company: z
    .string()
    .trim()
    .regex(/^[a-fA-F0-9]{24}$/, "Invalid company ID format"),
});

export type ProductType = z.infer<typeof createProductSchema>;
export type CreateCompanyInput = z.infer<typeof createCompanySchema>;
