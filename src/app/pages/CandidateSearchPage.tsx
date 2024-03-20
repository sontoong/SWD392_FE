import CandidateList from "../components/ui-enterprise/candidate-list/candidate-list";
import { candidates } from "../../constants/testData";
import CandidateSearchForm from "../components/ui-enterprise/search/candidate-search";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";

export default function CandidateSearchPage() {
  useSetHeaderTitle([
    {
      title: ``,
      path: location.pathname,
    },
  ]);
  return (
    <div className="w-full">
      <CandidateSearchForm />
      <CandidateList candidates={candidates} />
    </div>
  );
}
