import { Nation } from "./language";
import { SkillField } from "./project";

export interface CompanyDetail {
  companyName: string;
  website: string;
  videoLink: string;
  companySize: string;
  introduction: string;
  industryFields: SkillField[];
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
