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
import { CustomCard } from "../components/ui/card";
import { Content } from "antd/es/layout/layout";
import { enterpriseInfo, nations, project } from "../../constants/testData";
import {
  EnvironmentOutlined,
  FolderOpenOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  generateProjectFundingType,
  generateRequirementMsg,
  generateTimeToComplete,
} from "../utils/generators";
import { formatCurrency } from "../utils/utils";
import CustomTag from "../components/ui/tag";
import Sider from "antd/es/layout/Sider";
import ApplyForm from "../components/ui-freelancer/modals/ApplyForm";

export default function FreelancerProjectDetail() {
  const { Title, Text } = Typography;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const data = project;
  const creatorData = enterpriseInfo;

  return (
    <>
      <Layout>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
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
                {data.title}
              </Title>
            }
          >
            <Row>
              <Col span={5} className="text-[1.2rem] font-semibold">
                <FolderOpenOutlined /> {data.projectField.label}
              </Col>
              <Col span={5} offset={2} className="text-[1.2rem] font-semibold">
                <EnvironmentOutlined />{" "}
                {nations[data.optionalRequirements.nation].label}
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col span={5} className="text-[1.2rem] font-semibold">
                {data.initialFunding
                  ? formatCurrency(data.initialFunding)
                  : generateRequirementMsg(data.freelancerRequirement)
                      .priceDesc}{" "}
                <span className="text-[.75rem] font-normal text-gray-400">
                  {generateProjectFundingType(data.funding)}
                </span>
              </Col>
              <Col span={5} offset={2} className="text-[1.2rem] font-semibold">
                Kinh nghiệm{" "}
                <span className=" font-normal text-gray-400">
                  {generateRequirementMsg(data.freelancerRequirement).short}
                </span>
              </Col>
              <Divider type="vertical" />
              <Col span={5} offset={2} className="text-[1.2rem] font-semibold">
                Báo giá:{" "}
                <span className=" font-normal text-gray-400">
                  {data.applicationCount}
                </span>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col span={24}>
                <Title level={4}>Yêu cầu project</Title>
                <Text>{data.description}</Text>
              </Col>
            </Row>
            <Divider />
            <Space direction="vertical" size={"large"}>
              <Row>
                <Col span={24}>
                  <Title level={4}>
                    Thời gian project:{" "}
                    <span className="font-normal text-gray-400">
                      {generateTimeToComplete(data.timeToComplete)}
                    </span>
                  </Title>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Title level={4}>Kỹ năng cần có:</Title>
                  {data.projectField.skills.map((item, index) => (
                    <CustomTag key={index}>{item.label}</CustomTag>
                  ))}
                </Col>
              </Row>
            </Space>
          </CustomCard>
        </Content>
        <Sider
          width={350}
          style={{ background: colorBgContainer, padding: 24 }}
        >
          <Space direction="vertical" size={"large"}>
            <Row>
              <Col span={24}>
                <ApplyForm project={data} />
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
                    {formatCurrency(data.paidAmount)}
                  </Text>
                </Title>
              </Row>
              <Row>
                <Col>
                  <Text className="font-normal">
                    {data.freelancerCount} đã tuyển
                  </Text>
                </Col>
              </Row>
            </div>
          </Space>
        </Sider>
      </Layout>
    </>
  );
}
