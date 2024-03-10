import { ExperienceLevel, OutsideProject, Skill } from "./project";

interface Experience {
  name: string;
  level: "junior" | "senior" | "expert";
  time: string;
}

export interface Education {
  school: string;
  degree: string;
  startYear: number;
  endYear: number;
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
  language: string[];
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
