import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";
import EnterpriseDetailPage from "./EnterpriseDetailPage";

export default function TestPage() {
  useSetHeaderTitle([
    {
      title: `test1`,
      path: "/login",
    },
  ]);

  return (
    <div>
        <EnterpriseDetailPage/>
    </div>
  );
}
