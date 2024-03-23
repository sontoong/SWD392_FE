import { Project } from "./project";
import { UserDetail } from "./user";

export interface Question {
  question: string;
  answer: string;
}

export interface Applicant {
  applicantId: number;
  projectId: number;
  candidateId: number;
  date: number;
  questions?: Question[];
  money: number;
  time: number;
  status?: "accepted" | "rejected" | "pending";
  project: Project;
  candidate: UserDetail;
  createdAt?: string;
}
