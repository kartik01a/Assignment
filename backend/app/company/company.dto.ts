import { type BaseSchema } from "../common/dto/base.dto";

export interface ICompany extends BaseSchema {
  companyName: string;
  companyType: string;
  companyOverview: string;
  companyOrigin: string;
  established: string;
  employees: string;
  companyWebsite: string;
  companyAddress: string;
  revenue: string;
  companyYears: string;
  companyLogo: string;
  companyBanner: string;
}
