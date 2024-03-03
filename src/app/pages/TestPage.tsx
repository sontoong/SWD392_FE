// import ViewSignContract from "../components/ui-freelancer/modals/ViewSignContract";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";
// import FreeLancerIncomeList from "./FreelancerIncomeList";
import TransactionList from "./TransactionList";
// import EnterpriseModalEditGeneralInfo from "../components/ui-enterprise/EnterpriseModalEditGeneralInfo";
// import EnterpriseDetailPage from "./EnterpriseDetailPage";
// import FreelancerProjectList from "./FreelancerProjectList";

export default function TestPage() {
  useSetHeaderTitle([
    {
      title: `test1`,
      path: "/login",
    },
  ]);

  return (
    // <EnterpriseModalEditGeneralInfo/>
    // <EnterpriseDetailPage/>
    // <FreelancerProjectList/>
    <TransactionList role={"freelancer"}/>
    // <ViewSignContract/>
  );
}
