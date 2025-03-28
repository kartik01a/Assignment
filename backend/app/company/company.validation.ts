import { body } from "express-validator";

export const createCompany = [
  body("companyName")
    .trim()
    .notEmpty()
    .withMessage("Company Name is required")
    .isString()
    .withMessage("Company Name must be a string")
    .isLength({ min: 2, max: 100 })
    .withMessage("Company Name must be between 2 and 100 characters"),

  body("companyType")
    .trim()
    .notEmpty()
    .withMessage("Company Type is required")
    .isString()
    .withMessage("Company Type must be a string")
    .withMessage("Invalid Company Type"),

  body("companyOverview")
    .trim()
    .notEmpty()
    .withMessage("Company Overview is required")
    .isString()
    .withMessage("Company Overview must be a string")
    .isLength({ min: 10, max: 1000 })
    .withMessage("Company Overview must be between 10 and 1000 characters"),

  body("companyOrigin")
    .trim()
    .notEmpty()
    .withMessage("Company Origin is required")
    .isString()
    .withMessage("Company Origin must be a string")
    .isLength({ max: 100 })
    .withMessage("Company Origin must be less than 100 characters"),

  body("established")
    .trim()
    .notEmpty()
    .withMessage("Company established year is required")
    .isString()
    .withMessage("Company established year must be a string")
    .matches(/^\d{4}$/)
    .withMessage("Established year must be a 4-digit year")
    .custom((value) => {
      const year = parseInt(value, 10);
      const currentYear = new Date().getFullYear();
      if (year < 1800 || year > currentYear) {
        throw new Error(
          "Established year must be between 1800 and current year"
        );
      }
      return true;
    }),

  body("employees")
    .trim()
    .notEmpty()
    .withMessage("Employees is required")
    .isString()
    .withMessage("Employees must be a string")
    .matches(/^\d+(-\d+)?$/)
    .withMessage(
      'Employees must be a number or range (e.g., "500" or "100-500")'
    ),

  body("companyWebsite")
    .trim()
    .notEmpty()
    .withMessage("Company Website is required")
    .isURL()
    .withMessage("Invalid Company Website URL")
    .customSanitizer((value) => {
      return value.startsWith("http") ? value : `https://${value}`;
    }),

  body("companyAddress")
    .trim()
    .notEmpty()
    .withMessage("Company Address is required")
    .isString()
    .withMessage("Company Address must be a string")
    .isLength({ min: 10, max: 200 })
    .withMessage("Company Address must be between 10 and 200 characters"),

  body("revenue")
    .trim()
    .notEmpty()
    .withMessage("Company Revenue is required")
    .isString()
    .withMessage("Company Revenue must be a string")
    .matches(/^\$?(\d{1,3}(,\d{3})*|\d+)(\.\d{1,2})?[MBK]?$/)
    .withMessage('Invalid revenue format. Use format like "$10M" or "500K"'),

  body("companyYears")
    .trim()
    .notEmpty()
    .withMessage("Company Years is required")
    .isString()
    .withMessage("Company Years must be a string")
    .matches(/^\d+$/)
    .withMessage("Company Years must be a positive number"),
];
