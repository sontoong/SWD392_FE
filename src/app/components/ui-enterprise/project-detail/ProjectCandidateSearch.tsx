import { Col, Row } from "antd";
import CandidateSearchForm from "../search/candidate-search";
import { candidates } from "../../../../constants/testData";
import CandidateList from "../candidate-list/candidate-list";
import { useState } from "react";
import { OutlineButton, PrimaryButton } from "../../button/buttons";

export default function ProjectCandidateSearch() {
  const [activeList, setActiveList] = useState<"search" | "invited">("search");
  const [activeButton, setActiveButton] = useState<"search" | "invited">(
    "search",
  );

  const handleSwitchList = (list: "search" | "invited") => {
    setActiveList(list);
    setActiveButton(list);
  };

  return (
    <div className="max-w-[1000px]">
      <CandidateSearchForm />
      <Row style={{ marginBottom: 16, marginTop: 16 }}>
        <Col style={{ marginRight: "1rem" }}>
          {activeButton === "search" ? (
            <PrimaryButton>Tìm kiếm</PrimaryButton>
          ) : (
            <OutlineButton onClick={() => handleSwitchList("search")}>
              Tìm kiếm
            </OutlineButton>
          )}
        </Col>
        <Col>
          {activeButton === "invited" ? (
            <PrimaryButton>Đã mời</PrimaryButton>
          ) : (
            <OutlineButton onClick={() => handleSwitchList("invited")}>
              Đã mời
            </OutlineButton>
          )}
        </Col>
      </Row>
      {activeList === "search" && <CandidateList candidates={candidates} />}
      {activeList === "invited" && <CandidateList candidates={candidates} />}
    </div>
  );
}
