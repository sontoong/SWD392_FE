import { languages } from "../../constants/language";

export interface ProjectSearch {
  input?: string;
  projectField?: string;
  funding: "all" | "hourly" | "fixed";
  enterpriseProject: "all" | "none" | "<3 projects" | ">3 projects";
  timeToComplete: "all" | "<1 month" | "1-3 month" | ">3 month";
}

export interface FreelancerSearch {
  input?: string;
  projectField?: string;
  nation: string;
  language: languages;
  desiredSalary: "all" | "<100K" | "100K-200K" | "200K-500K" | ">500K";
  experienceLevel: "all" | "junior" | "senior" | "expert";
  lastLogIn: "all" | "2 weeks" | "1 month" | "2 months";
}

export interface EnterpriseProjectSearch{
  input?: string;
  display: "all" | "public" | "private";
  status: "all" | "hiring" | "closed" | "doing";
  funding: "all" | "hourly" | "fixed";
}
