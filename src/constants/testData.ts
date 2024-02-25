import {
  Field,
  Project,
  Skill,
  OptionalRequirements,
} from "../app/models/project";

const skills: Skill[] = [
  { name: "Front-end Developer" },
  { name: "Back-end Developer" },
  { name: "Full-stack Developer" },
  { name: "Mobile Developer" },
  { name: "UI/UX Designer" },
  { name: "Data Scientist" },
  { name: "Data Engineer" },
];

const field: Field = {
  name: "name",
  skills: skills,
};

const optionalRequirements: OptionalRequirements = {
  minimumCompletedProjects: "Tất cả",
  language: "Tất cả",
  location: "Tất cả",
  rating: "Tất cả",
  skills: skills,
};

export const project: Project = {
  id: "1",
  title: "Lập trình Front-end",
  createdBy: "Nguyễn Văn A",
  description: "Viết app ứng dụng android",
  isVerified: true,
  paidAmount: 0,
  projectField: field,
  publishedTime: 1708532861,
  isCompleted: false,
  language: "English",
  location: "Tất cả",
  timeToComplete: 1,
  freelancerRequirement: "junior",
  optionalRequirements: optionalRequirements,
  funding: "hourly",
  initialFunding: 0,
  projectType: "longterm",
  privacy: "public",
  applicationCount: 5,
  inviteSent: 6,
  inviteAccepted: 3,
};

export const projects: Project[] = [project];
