import { createResponse } from "../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from "express";
import * as companyService from "./company.service";

export const createCompany = asyncHandler(async (req: any, res: Response) => {
  console.log(req.body, "req.body");
  const file = req?.file;
  console.log(file,"file")
  const result = await companyService.createCompany(req.body, file);
  res.send(createResponse(result, "Company created sucssefully"));
});

export const getAllCompany = asyncHandler(
  async (req: Request, res: Response) => {
    const result = await companyService.getAllCompany();
    res.send(createResponse(result, "Companies fetched sucssefully"));
  }
);
export const getCompany = asyncHandler(async (req: Request, res: Response) => {
  const result = await companyService.getCompany(req.params.id);
  res.send(createResponse(result, "Company fetched sucssefully"));
});
