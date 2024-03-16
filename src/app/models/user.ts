import { languages } from "../../constants/language";
import { ExperienceLevel, OutsideProject, Skill } from "./project";

export interface Experience {
  company: string;
  jobRole: string;
  nation: string;
  startEndYear: [number, number];
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  startEndYear: [number, number];
  description: string;
}

export interface UserDetail {
  id: string;
  username: string;
  email: string;
  phone: string;
  dob: number;
  role: "freelancer" | "enterprise" | "admin";
  address: string;
  nation: string;
  isVerified: boolean;
  averageRating: number;
  ratingCount: number;
  projectCount: number;
  createdAt: number;
  languages: languages[];
  description: string;
}

export interface FreelancerDetail extends UserDetail {
  firstName: string;
  middleName: string;
  lastName: string;
  profilePicture: string;
  desireSalary: number;
  experienceLevel: ExperienceLevel;
  jobRole: string;
  outsideProjects?: OutsideProject[];
  skills: Skill[];
  educations?: Education[];
  experiences?: Experience[];
}

export interface UserDetailTable extends UserDetail {
  key: string;
  dobString: string;
  status: string;
}
