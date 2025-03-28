import mongoose from "mongoose";
import { IProduct } from "./product.dto";
const Schema = mongoose.Schema;

const ProductShema = new Schema<IProduct>(
  {
    productName: { type: String, required: true },
    productOrigin: { type: String, required: true },
    productDetails: { type: String, required: true },
    productForecast: { type: String, required: true },
    productColor: { type: String, required: true },
    productCultivationType: { type: String, required: true },
    productMoisture: { type: String, required: true },
    productFormAndCut: { type: String, required: true },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "company",
      required: true,
    },
    productImages: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("product", ProductShema);
