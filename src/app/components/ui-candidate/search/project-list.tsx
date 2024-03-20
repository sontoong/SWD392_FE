import { Col, Row } from "antd";
import ProjectCard from "./project-card";
import { Project } from "../../../models/project";

export interface Projectlist {
  projects: Project[];
}

export default function ProjectList({ projects }: Projectlist) {
  return (
    <Row gutter={[0, 16]} className="w-full pt-4">
      {projects.map((project, index) => {
        return (
          <Col xs={24} md={12} lg={24} key={index}>
            <ProjectCard project={project} />
          </Col>
        );
      })}
    </Row>
  );
}
