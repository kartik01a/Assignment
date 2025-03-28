import { Router } from "express";
import * as productController from "./product.controller";
import upload from "../common/middleware/cloudinary-config";

const router = Router();

router
  .get("/", productController.getAllProduct)
  .get("/:id", productController.getProduct)
  .post(
    "/",
    upload.single("productImages"),
    productController.createProduct
  );

export default router;
