import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";

export default function ProjectManage() {
  useSetHeaderTitle([
    {
      title: `Quản lý project`,
      path: "/project-manage",
    },
  ]);
  return <div>projectManage</div>;
}
