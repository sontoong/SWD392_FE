import CandidateList from "../../components/ui-enterprise/candidate-list/candidate-list";
import { candidates } from "../../../constants/testData";
import CandidateSearchForm from "../../components/ui-enterprise/search/candidate-search";
import { useSetHeaderTitle } from "../../hooks/useSetHeaderTitle";

export default function CandidateSearchPage() {
  useSetHeaderTitle([
    {
      title: ``,
    },
  ]);
  return (
    <div className="w-[1000px]">
      <div className="pb-5 text-xl uppercase">Tìm hồ sơ</div>
      <CandidateSearchForm />
      <CandidateList candidates={candidates} />
    </div>
  );
}
