import FreelancerList from "../components/ui-enterprise/freelancer-list/freelancer-list";
import { freelancers } from "../../constants/testData";
import FreelancerSearchForm from "../components/ui-enterprise/search/freelancer-search";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";

export default function FreelancerSearchPage() {
  useSetHeaderTitle([
    {
      title: ``,
      path: location.pathname,
    },
  ]);
  return (
    <div className="w-full">
      <FreelancerSearchForm />
      <FreelancerList freelancers={freelancers} />
    </div>
  );
}
