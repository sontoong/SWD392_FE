import { Col, Row } from "antd";
import { FreelancerDetail } from "../../../models/user";
import FreelancerCard from "./freelancer-card";

interface FreelancerListProps {
  freelancers: FreelancerDetail[];
  paying?: boolean;
}

export default function FreelancerList({ freelancers, paying }: FreelancerListProps) {
  return (
    <Row gutter={[16, 16]} className="w-full p-4">
      {freelancers.map((freelancer, index) => {
        return (
          <Col xs={24} md={12} lg={24} key={index}>
            <FreelancerCard freelancer={freelancer} paying={paying} />
          </Col>
        );
      })}
    </Row>
  );
}