import {
  Avatar,
  Button,
  Card,
  Divider,
  Flex,
  Space,
  Tooltip,
  Typography,
} from "antd";
import { Project } from "../../../models/project";
import { formatCurrency, calculateDateToNow } from "../../../utils/utils";
import {
  generateProjectFunding,
  generateProjectFundingType,
  generateRequirementMsg,
} from "../../../utils/generators";
import {
  EnvironmentOutlined,
  EyeOutlined,
  FolderOpenOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { nations } from "../../../../constants/testData";

export default function ProjectCard({ project }: { project: Project }) {
  const {
    title,
    projectField,
    publishedTime,
    description,
    candidateRequirement,
    paidAmount,
    applicationCount,
    createdBy,
    optionalRequirements,
    funding,
    initialFunding,
  } = project;

  const { Title } = Typography;

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
      <Flex justify="space-between">
        <Space direction="vertical" size="middle" className="flex">
          <div className="flex gap-5">
            <Space className="whitespace-nowrap">
              <FolderOpenOutlined />
              {projectField.label}
            </Space>
            <Space className="whitespace-nowrap">
              <EnvironmentOutlined />
              {nations[optionalRequirements.nation].label}
            </Space>
            <div className="whitespace-nowrap">
              Đã đăng cách đây {calculateDateToNow(publishedTime)}
            </div>
          </div>
          <div>{description}</div>
          <div className="flex items-center gap-5">
            <div className="whitespace-nowrap">
              <span className="font-bold">Kinh nghiệm: </span>
              {generateRequirementMsg(candidateRequirement).short}
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
              <span>{createdBy}</span>
            </div>
            <Divider type="vertical" />
            <div className="whitespace-nowrap">
              <span className="font-bold">Đã chi trả: </span>
              {formatCurrency(paidAmount)}
            </div>
          </div>
        </Space>
        <Title level={3} className="text-right">
          {generateProjectFunding(
            funding,
            candidateRequirement,
            initialFunding,
          )}
          <br />
          <span className="text-[1.2rem] font-normal text-[#b1b1b1]">
            {generateProjectFundingType(funding)}
          </span>
        </Title>
      </Flex>
    </Card>
  );
}
