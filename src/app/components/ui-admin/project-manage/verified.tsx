import { Project } from "../../../models/project";
import ProjectList from "./project/project-list";

const projects: Project[] = [
  {
    title: "Viết app ứng dụng android",
    createdBy: "Nguyễn Văn A",
    description: "Viết app ứng dụng android",
    isVerified: true,
    paidAmount: 0,
    projectField: "CNTT - Phần Mềm",
    publishedTime: 1708532861,
    isCompleted: false,
    language: "English",
    location: "Tất cả",
    timeToComplete: 1,
    applicationCount: 2,
    freelancerRequirement: "senior",
  },
];

export default function Verified() {
  // const verified = true;

  return <ProjectList projects={projects} />;
}
