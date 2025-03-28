import { Router } from "express";
import { catchError } from "../common/middleware/cath-error.middleware";
import * as companyController from "./company.controller";
import * as companyValidator from "./company.validation";
import upload from "../common/middleware/cloudinary-config";

const router = Router();

router
  .get("/", companyController.getAllCompany)
  .get("/:id", companyController.getCompany)
  .post(
    "/",
    // companyValidator.createCompany,
    // catchError,
    upload.single("companyLogo"),
    companyController.createCompany
  );

export default router;
