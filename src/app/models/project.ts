// type Experience = {
//   name: string;
//   level: "junior" | "senior" | "expert";
//   time: string;
// };

// type Skill = {
//   name: string;
// };

// type Field = {
//   name: string;
//   skills: Skill[];
// };

// type Requirement = {
//   location: "Tất cả" | "location2";
//   skills?: Skill[];
//   experience: Experience;
// };

export interface Project {
  title: string;
  language: "English" | "Vietnamese";
  location: "Tất cả" | string;
  projectField: string;
  description: string;
  contract?: string;
  funding?: "hourly" | "fixed";
  initialFunding?: number;
  freelancerRequirement: "junior" | "senior" | "expert";
  timeToComplete: 1 | 2 | 3;
  publishedTime: number;
  createdBy: string;
  paidAmount: number;
  isCompleted: boolean;
  isVerified: boolean;
  applicationCount: number;
}

export interface CreateProject {
  title: string;
  language: "English" | "Vietnamese";
  location: "Tất cả" | string;
  projectField: string;
  description: string;
  contract?: string;
  funding?: "hourly" | "fixed";
  initialFunding?: number;
  freelancerRequirement?: "junior" | "senior" | "expert";
  timeToComplete: 1 | 2 | 3;
  publishTime: number;
  createdBy: string;
  applicantCount: number;
  paidAmount: number;
  isCompleted: boolean;
  isVerified: boolean;
}
