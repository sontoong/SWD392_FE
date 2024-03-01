import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";
import EnterpriseModalEditGeneralInfo from "../components/ui-enterprise/EnterpriseModalEditGeneralInfo";

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
