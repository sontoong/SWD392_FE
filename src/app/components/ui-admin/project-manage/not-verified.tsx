import ProjectList from "./project/project-list";
import { projects } from "../../../../constants/testData";

export default function NotVerified() {
  // const verified = false;

  return <ProjectList projects={projects} />;
}
