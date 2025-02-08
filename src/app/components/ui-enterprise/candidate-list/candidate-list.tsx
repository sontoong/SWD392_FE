import { Col, Row } from "antd";
import { CandidateDetail } from "../../../models/user";
import CandidateCard from "./candidate-card";

interface CandidateListProps {
  candidates: CandidateDetail[];
  paying?: boolean;
}

export default function CandidateList({
  candidates,
  paying,
}: CandidateListProps) {
  return (
    <Row gutter={[0, 16]} className="w-full pt-4">
      {candidates.map((candidate, index) => {
        return (
          <Col xs={24} md={12} lg={24} key={index}>
            <CandidateCard candidate={candidate} paying={paying} />
          </Col>
        );
      })}
    </Row>
  );
}
