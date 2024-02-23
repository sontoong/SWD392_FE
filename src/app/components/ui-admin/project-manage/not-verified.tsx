import { Project } from "../../../models/project";
import ProjectList from "./project/project-list";

const projects: Project[] = [
  {
    title: "Viết app ứng dụng android",
    createdBy: "Nguyễn Văn A",
    description: "Viết app ứng dụng android",
    isVerified: false,
    paidAmount: 0,
    projectField: "CNTT - Phần Mềm",
    publishedTime: 1708607379,
    isCompleted: false,
    language: "English",
    location: "Tất cả",
    timeToComplete: 1,
    applicationCount: 2,
    freelancerRequirement: "junior",
  },
  {
    title: "Viết app ứng dụng android",
    createdBy: "Nguyễn Văn A",
    description: "Viết app ứng dụng android",
    isVerified: false,
    paidAmount: 0,
    projectField: "CNTT - Phần Mềm",
    publishedTime: 1708607379,
    isCompleted: false,
    language: "English",
    location: "Tất cả",
    timeToComplete: 1,
    applicationCount: 2,
    freelancerRequirement: "junior",
  },
  {
    title: "Viết app ứng dụng android",
    createdBy: "Nguyễn Văn A",
    description: "Viết app ứng dụng android",
    isVerified: false,
    paidAmount: 0,
    projectField: "CNTT - Phần Mềm",
    publishedTime: 1708607379,
    isCompleted: false,
    language: "English",
    location: "Tất cả",
    timeToComplete: 1,
    applicationCount: 2,
    freelancerRequirement: "junior",
  },
  {
    title: "Viết app ứng dụng android",
    createdBy: "Nguyễn Văn A",
    description: "Viết app ứng dụng android",
    isVerified: false,
    paidAmount: 0,
    projectField: "CNTT - Phần Mềm",
    publishedTime: 1708607379,
    isCompleted: false,
    language: "English",
    location: "Tất cả",
    timeToComplete: 1,
    applicationCount: 2,
    freelancerRequirement: "junior",
  },
];

export default function NotVerified() {
  // const verified = false;

  return <ProjectList projects={projects} />;
}
