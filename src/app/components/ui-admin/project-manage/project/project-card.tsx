import { Button, Card, Divider, Space, Tooltip } from "antd";
import { Project } from "../../../../models/project";
import {
  formatCurrency,
  formatToTimeDifference,
} from "../../../../utils/utils";
import {
  EnvironmentOutlined,
  EyeOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";
import Link from "antd/es/typography/Link";

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
  } = project;
  return (
    <Card
      bordered={true}
      title={title}
      className="overflow-auto"
      extra={
        <Tooltip title="Xem chi tiết">
          <Button icon={<EyeOutlined />} className="ml-auto">
            Chi tiết
          </Button>
        </Tooltip>
      }
    >
      <Space direction="vertical" size="middle" className="flex">
        <div className="flex gap-5">
          <Space className="whitespace-nowrap">
            <FolderOpenOutlined />
            {projectField}
          </Space>
          <Space className="whitespace-nowrap">
            <EnvironmentOutlined />
            {location}
          </Space>
          <div className="whitespace-nowrap">
            Đã đăng cách đây{" "}
            {formatToTimeDifference(
              Math.floor(Date.now() / 1000) - publishedTime,
            )}
          </div>
        </div>
        <div>{description}</div>
        <div className="flex gap-10">
          <div className="whitespace-nowrap">
            <span className="font-bold">Kinh nghiệm: </span>
            {freelancerRequirement}
          </div>
          <Divider type="vertical" />
          <div className="whitespace-nowrap">
            <span className="font-bold">Báo giá: </span> {applicationCount}
          </div>
        </div>
        <div className="flex gap-10">
          <div className="whitespace-nowrap">
            <span className="font-bold">Đăng bởi: </span>
            <Link href={`/admin/accounts?name=${createdBy}`}>{createdBy}</Link>
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
