import { Nation } from "./language";
import { Field } from "./project";

export interface CompanyDetail {
  companyName: string;
  website: string;
  videoLink: string;
  companySize: string;
  introduction: string;
  industryFields: Field[];
  companyDocument: string;
  registrationDocumentType: string;
  identificationNumber: number;
  companyCountry: string;
  taxNumber: number;
  address: string;
  enterpriseCountry: Nation[string];
  companyEmail: string;
  companyPhone: string;
}
