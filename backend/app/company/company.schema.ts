import mongoose from "mongoose";
import { type ICompany } from "./company.dto";
const Schema = mongoose.Schema;

const CompanySchema = new Schema<ICompany>(
  {
    companyName: { type: String, required: true },
    companyType: { type: String, required: true },
    companyOverview: { type: String, required: true },
    companyOrigin: { type: String, required: true },
    established: { type: String, required: true },
    employees: { type: String, required: true },
    companyWebsite: { type: String, required: true },
    companyAddress: { type: String, required: true },
    revenue: { type: String, required: true },
    companyYears: { type: String, required: true },
    companyLogo: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<ICompany>("company", CompanySchema);
