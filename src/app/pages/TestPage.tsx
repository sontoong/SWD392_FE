import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";
import EnterpriseModalEditGeneralInfo from "./EnterpriseModalEditGeneralInfo";

export default function TestPage() {
  useSetHeaderTitle([
    {
      title: `test1`,
      path: "/login",
    },
  ]);

  return (
    <EnterpriseModalEditGeneralInfo/>
  );
}
