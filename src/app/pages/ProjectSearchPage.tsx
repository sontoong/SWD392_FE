import ProjectSearchForm from "../components/ui-freelancer/search/project-search";
import ProjectList from "../components/ui-freelancer/search/project-list";
import { projects } from "../../constants/testData";

export default function ProjectSearchPage() {
  return (
    <>
      <ProjectSearchForm />
      <ProjectList projects={projects} />
    </>
  );
}
