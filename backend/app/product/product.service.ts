import { IProduct } from "./product.dto";
import productSchema from "./product.schema";

export const createProduct = async (
  data: IProduct,
  file: { path?: string }
) => {
  const companyData = file?.path ? { ...data, companyLogo: file.path } : data;
  const result = await productSchema.create(companyData);
  return result;
};

export const getAllProduct = async () => {
  const result = await productSchema.find();
  return result;
};

export const getProduct = async (id: string) => {
  const result = await productSchema.findById(id).populate("company");
  return result;
};
export const getCompanyProduct = async (id: string) => {
  const result = await productSchema.find({ company: id });
  return result;
};
