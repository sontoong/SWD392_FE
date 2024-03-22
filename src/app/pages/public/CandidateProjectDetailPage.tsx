import {
  Avatar,
  Col,
  Divider,
  Flex,
  Layout,
  Row,
  Space,
  Typography,
  theme,
} from "antd";
import { CustomCard } from "../../components/ui/card";
import { Content } from "antd/es/layout/layout";
import { enterpriseInfo, nations, project } from "../../../constants/testData";
import {
  EnvironmentOutlined,
  FolderOpenOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  generateProjectFundingType,
  generateRequirementMsg,
  generateTimeToComplete,
} from "../../utils/generators";
import { formatCurrency } from "../../utils/utils";
import CustomTag from "../../components/ui/tag";
import Sider from "antd/es/layout/Sider";
import { ApplyProject } from "../../components/ui-candidate/modals";
import BackButton from "../../components/button/back-button";
import { useAppDispatch } from "../../redux/hook";
import { fetchPostById } from "../../redux/slice/postSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Project } from "../../models/project";

export default function CandidateProjectDetail() {
  const { Title, Text } = Typography;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const dispatch = useAppDispatch();
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState<Project>(project);

  // const projectData = project;
  const creatorData = enterpriseInfo;

  useEffect(() => {
    async function fetch() {
      if (projectId) {
        const res = await dispatch(fetchPostById(projectId)).unwrap();
        console.log(res);
        setProjectData({ ...res });
      }
    }
    fetch();
  }, [dispatch, projectId]);

  return (
    <Layout>
      <Content
        style={{
          padding: "0px 24px",
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <BackButton className="mb-3" />
        <CustomCard
          title={
            <Title
              level={4}
              style={{
                margin: 0,
                textTransform: "uppercase",
                color: "#74BA7B",
              }}
            >
              {projectData.title}
            </Title>
          }
        >
          <Row>
            <Col span={5} className="text-[1.2rem] font-semibold">
              <FolderOpenOutlined />{" "}
              {projectData.createdByProjectField?.jobTitleName}
            </Col>
            <Col span={5} offset={2} className="text-[1.2rem] font-semibold">
              <EnvironmentOutlined />{" "}
              {nations[projectData.optionalRequirements.nation]?.label}
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={5} className="text-[1.2rem] font-semibold">
              {projectData.initialFunding
                ? formatCurrency(projectData.initialFunding)
                : generateRequirementMsg(projectData.candidateRequirement)
                    .priceDesc}{" "}
              <span className="text-[.75rem] font-normal text-gray-400">
                {generateProjectFundingType(projectData.funding)}
              </span>
            </Col>
            <Col span={5} offset={2} className="text-[1.2rem] font-semibold">
              Kinh nghiệm{" "}
              <span className=" font-normal text-gray-400">
                {generateRequirementMsg(projectData.candidateRequirement).short}
              </span>
            </Col>
            <Divider type="vertical" />
            <Col span={5} offset={2} className="text-[1.2rem] font-semibold">
              Báo giá:{" "}
              <span className=" font-normal text-gray-400">
                {projectData.applicationCount}
              </span>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={24}>
              <Title level={4}>Yêu cầu project</Title>
              <Text>{projectData.description}</Text>
            </Col>
          </Row>
          <Divider />
          <Space direction="vertical" size={"large"}>
            <Row>
              <Col span={24}>
                <Title level={4}>
                  Thời gian project:{" "}
                  <span className="font-normal text-gray-400">
                    {generateTimeToComplete(projectData.timeToComplete)}
                  </span>
                </Title>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Title level={4}>Kỹ năng cần có:</Title>
                {projectData.optionalRequirements &&
                  projectData.optionalRequirements.skills.map((item, index) => (
                    <CustomTag key={index}>{item.label}</CustomTag>
                  ))}
              </Col>
            </Row>
          </Space>
        </CustomCard>
      </Content>
      <Sider
        width={350}
        style={{ background: colorBgContainer, padding: "0px 24px" }}
      >
        <Space direction="vertical" size={"large"}>
          <Row>
            <Col span={24}>
              <ApplyProject project={projectData} />
            </Col>
          </Row>
          <Title level={3}>Khách hàng</Title>
          <div>
            <Space direction="vertical">
              <Row>
                <Flex align="center" justify="space-evenly">
                  <Col span={2}>
                    <Avatar size={40} icon={<UserOutlined />} />
                  </Col>
                  <Col span={21} offset={4}>
                    <Title level={4}>
                      {creatorData.firstName} {creatorData.middleName}{" "}
                      {creatorData.lastName}
                    </Title>
                  </Col>
                </Flex>
              </Row>
              <Row>
                <Col>
                  <EnvironmentOutlined />
                </Col>
                <Col offset={1}>
                  <Text>{creatorData.enterpriseCountry.label}</Text>
                </Col>
              </Row>
            </Space>
          </div>
          <div>
            <Row>
              <Col>
                <Title level={5}>
                  Việc đã đăng:
                  <Text className="font-normal">
                    {" "}
                    {creatorData.projectList.length}
                  </Text>
                </Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text className="font-normal">
                  {creatorData.currentHiringProject} project đang nhận báo giá
                </Text>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Title level={5}>
                Đã chi trả:
                <Text className="font-normal">
                  {" "}
                  {projectData.paidAmount &&
                    formatCurrency(projectData.paidAmount)}
                </Text>
              </Title>
            </Row>
            <Row>
              <Col>
                <Text className="font-normal">
                  {projectData.candidateCount} đã tuyển
                </Text>
              </Col>
            </Row>
          </div>
        </Space>
      </Sider>
    </Layout>
  );
}
