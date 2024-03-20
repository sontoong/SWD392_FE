import ProjectSearchForm from "../components/ui-candidate/search/project-search";
import ProjectList from "../components/ui-candidate/search/project-list";
import { projects } from "../../constants/testData";

export default function ProjectSearchPage() {
  return (
    <>
      <ProjectSearchForm />
      <ProjectList projects={projects} />
    </>
  );
}
