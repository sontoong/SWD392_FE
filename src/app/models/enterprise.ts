import { CompanyDetail } from "./company";
import { Nation } from "./language";
import { Project } from "./project";

export interface EnterpriseInfo {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: number;
  enterpriseCountry: Nation[string];
  documentType: string;
  enterpriseDocument: string;
  documentNumber: number;
  enterpriseEmail: string;
  enterprisePhone: string;
  companyDetail: CompanyDetail;
  projectList: Project[];
  currentHiringProject: number;
}
