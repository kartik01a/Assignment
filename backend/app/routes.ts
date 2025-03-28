import express from "express";
import userRoutes from "./user/user.route";
import companyRoutes from "./company/company.route";
import productRoutes from "./product/product.route";

// routes
const router = express.Router();

router.use("/users", userRoutes);
router.use("/company", companyRoutes);
router.use("/product", productRoutes);

export default router;