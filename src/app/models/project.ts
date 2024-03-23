import { languages } from "../../constants/language";
import { Applicant } from "./applicant";

export type ExperienceLevel = "junior" | "senior" | "expert";

export type OptionalRequirements = {
  minimumCompletedProjects:
    | "all"
    | "<3 projects"
    | "5-10 projects"
    | ">10 projects";
  rating: "all" | ">3 stars" | ">4 stars";
  nation: string;
  language: languages;
  skills: Skill[];
  questions?: string[];
};

export type Skill = {
  skillId: string;
  skillName: string;
};

export type Field = {
  jobTitleId: number;
  jobTitleName: string;
  jobTitleDescription: string;
  popularity: number;
  candidateInfoId?: number;
  skills: Skill[];
};

export interface Contract {
  id: number;
  applicantId: number;
  fund: number;
  depositType: "full" | "period";
  date: number;
  status: "completed" | "doing" | "canceled" | "pending";
  signature?: string;
  applicant: Applicant;
}

export interface Project {
  projectId: number;
  title: string;
  language: languages;
  projectField: number;
  description: string;
  funding: "hourly" | "fixed";
  initialFunding: number;
  candidateRequirement: ExperienceLevel;
  optionalRequirements: OptionalRequirements;
  timeToComplete: "<1 month" | "1-3 month" | ">3 month";
  createdAt: string;
  createdBy: string;
  createdById: string;
  paidAmount: number;
  projectType: "longterm" | "shortterm" | "unknown";
  isCompleted: boolean;
  isVerified: boolean;
  privacy: "public" | "private" | "candidate";
  applicationCount: number;
  inviteSent: number;
  inviteAccepted: number;
  candidateCount: number;
  createdByProjectField?: {
    jobTitleId: number;
    jobTitleName: string;
    jobTitleDescription: string;
    popularity: number;
    candidateInfoId: number;
  };
}

export interface CreateProject
  extends Pick<
    Project,
    | "description"
    | "funding"
    | "initialFunding"
    | "candidateRequirement"
    | "timeToComplete"
    | "title"
    | "createdBy"
    | "privacy"
    | "projectType"
    | "optionalRequirements"
  > {
  projectField: number | null;
}

export interface CandidateProject extends Project {
  startDate: number;
  endDate?: number;
  status: "doing" | "stopped" | "contracting" | "verifying" | "denied";
  signature?: string;
}

export interface OutsideProject {
  title: string;
  jobRole: string;
  description: string;
  startEndDate: [number, number];
  images?: { name: string; url?: string; file?: File }[];
  projectDocumentImages?: {
    image: { name: string; url?: string; file?: File };
    description: string;
  }[];
}

export interface EnterpriseProject extends Project {
  status: "hiring" | "closed" | "doing";
}
