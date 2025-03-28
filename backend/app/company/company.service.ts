import { type ICompany } from "./company.dto";
import companySchema from "./company.schema";

export const createCompany = async (
  data: ICompany,
  file: { path?: string }
) => {
  const companyData = file?.path ? { ...data, companyLogo: file.path } : data;
  console.log(companyData,"companyDAta")
  const result = await companySchema.create(companyData);
  return result;
};

export const getAllCompany = async () => {
  const result = await companySchema.find();
  return result;
};

export const getCompany = async (id: string) => {
  const result = await companySchema.findById(id);
  return result;
};
