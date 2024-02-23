import { Col, Row } from "antd";
import { Project } from "../../../../models/project";
import ProjectCard from "./project-card";

export interface Projectlist {
  projects: Project[];
}

export default function ProjectList({ projects }: Projectlist) {
  return (
    <Row gutter={[16, 16]} className="w-full p-4">
      {projects.map((project, index) => {
        return (
          <Col xs={24} md={12} lg={8} key={index}>
            <ProjectCard project={project} />
          </Col>
        );
      })}
    </Row>
  );
}
