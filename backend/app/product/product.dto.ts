import mongoose from "mongoose";
import { type BaseSchema } from "../common/dto/base.dto";

export interface IProduct extends BaseSchema {
  productName: string;
  productOrigin: string;
  productDetails: string;
  productForecast: string;
  productColor: string;
  productCultivationType: string;
  productMoisture: string;
  productFormAndCut: string;
  company: mongoose.Types.ObjectId;
  productImages: string[];
}
