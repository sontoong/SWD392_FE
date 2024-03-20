import CandidateList from "../candidate-list/candidate-list";
import { candidates } from "../../../../constants/testData";

export default function ProjectHired() {
  return <CandidateList candidates={candidates} paying={true} />;
}
