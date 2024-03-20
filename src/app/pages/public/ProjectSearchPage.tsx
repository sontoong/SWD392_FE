import ProjectSearchForm from "../../components/ui-candidate/search/project-search";
import ProjectList from "../../components/ui-candidate/search/project-list";
import { projects } from "../../../constants/testData";
import { useSetHeaderTitle } from "../../hooks/useSetHeaderTitle";

export default function ProjectSearchPage() {
  useSetHeaderTitle([
    {
      title: ``,
    },
  ]);
  return (
    <div className="w-[1000px]">
      <div className="pb-5 text-xl uppercase">Tìm dự án</div>
      <ProjectSearchForm />
      <ProjectList projects={projects} />
    </div>
  );
}
