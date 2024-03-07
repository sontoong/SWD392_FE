// type Experience = {
//   name: string;
//   level: "junior" | "senior" | "expert";
//   time: string;
// };

import { Question, QuestionCreate } from "./applicant";

export type ExperienceLevel = "junior" | "senior" | "expert";

export type OptionalRequirementsCreate = {
  minimumCompletedProjects:
    | "all"
    | "<3 projects"
    | "5-10 projects"
    | ">10 projects";
  rating: "all" | ">3 stars" | ">4 stars";
  location: "all" | "hcm";
  language: "all" | "en" | "vn" | "cn";
  skills: Skill[];
  questions?: QuestionCreate[];
};

export type OptionalRequirements = {
  minimumCompletedProjects:
    | "all"
    | "<3 projects"
    | "5-10 projects"
    | ">10 projects";
  rating: "all" | ">3 stars" | ">4 stars";
  location: "all" | "hcm";
  language: "all" | "en" | "vn" | "cn";
  skills: Skill[];
  questions?: Question[];
};

export type Skill = {
  label: string;
  value: string;
};

export type SkillField = {
  label: string;
  value: string;
  skills: Skill[];
};

export interface Project {
  id: string;
  title: string;
  language: "en" | "vn" | "cn";
  projectField: SkillField;
  description: string;
  contract?: string;
  funding: "hourly" | "fixed";
  initialFunding: number;
  freelancerRequirement: ExperienceLevel;
  optionalRequirements: OptionalRequirements;
  timeToComplete: 1 | 2 | 3;
  publishedTime: number;
  createdBy: string;
  createdById: string;
  paidAmount: number;
  projectType: "longterm" | "shortterm" | "unknown";
  isCompleted: boolean;
  isVerified: boolean;
  privacy: "public" | "private" | "freelancer";
  applicationCount: number;
  inviteSent: number;
  inviteAccepted: number;
  freelancerCount: number;
}

export interface CreateProject {
  title: string;
  language: "all" | "en" | "vn" | "cn";
  projectField: string;
  description: string;
  contract?: string;
  funding: "hourly" | "fixed";
  initialFunding?: number;
  freelancerRequirement?: ExperienceLevel;
  timeToComplete: 1 | 2 | 3;
  publishTime: number;
  createdBy: string;
  applicantCount: number;
  paidAmount: number;
  isCompleted: boolean;
  privacy: "public" | "private" | "freelancer";
  projectType: "longterm" | "shortterm" | "unknown";
  optionalRequirements: OptionalRequirementsCreate;
}

export interface FreelancerProject extends Project {
  startDate: number;
  endDate?: number;
  status: "doing" | "stopped" | "contracting" | "verifying" | "denied";
  signature?: string;
}

export interface OutsideProject {
  title: string;
  jobRole: string;
  description: string;
  startDate?: number;
  endDate?: number;
  images?: string[];
  projectProfileImages?: [{ image: string; description: string }];
}

export interface EnterpriseProject extends Project {
  status: "hiring" | "closed" | "doing";
}
