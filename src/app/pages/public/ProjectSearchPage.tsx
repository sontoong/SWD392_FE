import ProjectSearchForm from "../../components/ui-candidate/search/project-search";
import ProjectList from "../../components/ui-candidate/search/project-list";
import { projectsTest } from "../../../constants/testData";
import { useSetHeaderTitle } from "../../hooks/useSetHeaderTitle";
import { useAppDispatch } from "../../redux/hook";
import { useEffect, useState } from "react";
import { fetchAllPostsPagination } from "../../redux/slice/postSlice";
import { Project } from "../../models/project";

export default function ProjectSearchPage() {
  useSetHeaderTitle([
    {
      title: ``,
    },
  ]);
  const dispatch = useAppDispatch();
  const [projects, setProjects] = useState<Project[]>([]);
  console.log(projects);

  useEffect(() => {
    async function fetch() {
      const projects = await dispatch(fetchAllPostsPagination()).unwrap();
      setProjects(projects);
    }
    fetch();
  }, [dispatch]);

  return (
    <div className="w-[1000px]">
      <div className="pb-5 text-xl uppercase">Tìm dự án</div>
      <ProjectSearchForm />
      <ProjectList projects={projectsTest} />
    </div>
  );
}
