import { CompanyDetail } from "./company";
import { Project } from "./project";

export interface EnterpriseInfo {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: number;
  enterpriseCountry: string;
  documentType: string;
  enterpriseDocument: string;
  documentNumber: number;
  enterpriseEmail: string;
  enterprisePhone: string;
  companyDetail: CompanyDetail;
  projectList: Project[];
}
