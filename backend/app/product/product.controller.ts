import { createResponse } from "../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from "express";
import * as productService from "./product.service"

export const createProduct = asyncHandler(async (req: any, res: Response) => {
  const file = req?.file;
  const result = await productService.createProduct(req.body, file);
  res.send(createResponse(result, "Company created sucssefully"));
});

export const getAllProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const result = await productService.getAllProduct();
    res.send(createResponse(result, "Companies fetched sucssefully"));
  }
);
export const getProduct = asyncHandler(async (req: Request, res: Response) => {
  const result = await productService.getProduct(req.params.id);
  res.send(createResponse(result, "Company fetched sucssefully"));
});

export const getCompanyProduct = asyncHandler(async (req: Request, res: Response) => {
  const result = await productService.getCompanyProduct(req.params.id);
  res.send(createResponse(result, "Company fetched sucssefully"));
});
