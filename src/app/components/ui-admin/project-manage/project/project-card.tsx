import { Avatar, Button, Card, Divider, Space, Tooltip } from "antd";
import { Project } from "../../../../models/project";
import { formatCurrency, calculateDateToNow } from "../../../../utils/utils";
import { generateRequirementMsg } from "../../../../utils/generators";
import {
  EnvironmentOutlined,
  EyeOutlined,
  FolderOpenOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }: { project: Project }) {
  const {
    title,
    projectField,
    location,
    publishedTime,
    description,
    freelancerRequirement,
    paidAmount,
    applicationCount,
    createdBy,
    createdById,
  } = project;
  return (
    <Card
      bordered={true}
      title={title}
      className="overflow-auto"
      extra={
        <Tooltip title="Xem chi tiết">
          <Link to={`${project.id}`}>
            <Button icon={<EyeOutlined />} className="ml-auto">
              Chi tiết
            </Button>
          </Link>
        </Tooltip>
      }
    >
      <Space direction="vertical" size="middle" className="flex">
        <div className="flex gap-5">
          <Space className="whitespace-nowrap">
            <FolderOpenOutlined />
            {projectField.name}
          </Space>
          <Space className="whitespace-nowrap">
            <EnvironmentOutlined />
            {location}
          </Space>
          <div className="whitespace-nowrap">
            Đã đăng cách đây {calculateDateToNow(publishedTime)}
          </div>
        </div>
        <div>{description}</div>
        <div className="flex items-center gap-5">
          <div className="whitespace-nowrap">
            <span className="font-bold">Kinh nghiệm: </span>
            {generateRequirementMsg(freelancerRequirement).short}
          </div>
          <Divider type="vertical" />
          <div className="whitespace-nowrap">
            <span className="font-bold">Báo giá: </span> {applicationCount}
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Avatar size={"default"} icon={<UserOutlined />} />
          <div className="whitespace-nowrap">
            <span className="font-bold">Đăng bởi: </span>
            <Link to={`/admin/user/${createdById}`}>
              <span className="text-blue-500">{createdBy}</span>
            </Link>
          </div>
          <Divider type="vertical" />
          <div className="whitespace-nowrap">
            <span className="font-bold">Đã chi trả: </span>
            {formatCurrency(paidAmount)}
          </div>
        </div>
      </Space>
    </Card>
  );
}
