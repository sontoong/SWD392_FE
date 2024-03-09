import {
  Avatar,
  Col,
  Divider,
  Flex,
  Image,
  Layout,
  Modal,
  Rate,
  Row,
  Select,
  Skeleton,
  Space,
  Tag,
  Typography,
  theme,
} from "antd";
import React from "react";
import BackButton from "../components/button/back-button";
import { comments, freelancer, nations } from "../../constants/testData";
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  EnvironmentOutlined,
  ExclamationCircleFilled,
  StarFilled,
  UserOutlined,
} from "@ant-design/icons";
import { generateVerifyMsg } from "../utils/generators";
import { formatCurrency, formatUnixToLocal } from "../utils/utils";
import { defaultImage } from "../../constants/images";
import { qualityFactors } from "../../constants/quality";
import Meta from "antd/es/card/Meta";
import { PrimaryButton } from "../components/button/buttons";
import { CustomCard } from "../components/ui/card";
import { EditContact, EditOverview } from "../components/ui-freelancer/modals";
import { InputFix } from "../components/input/inputs";
import AddOutsideProject from "../components/ui-freelancer/modals/add-outside-project";

const { Content, Sider } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function FreelancerDetailPage() {
  const [modal, contextHolder] = Modal.useModal();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const {
    username,
    nation,
    isVerified,
    averageRating,
    ratingCount,
    projectCount,
    desireSalary,
    language,
    description,
    email,
    address,
    phone,
    jobRole,
    outsideProjects,
    experienceLevel,
    firstName,
    lastName,
    middleName,
    profilePicture,
  } = freelancer;

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
          <BackButton className="mb-3" />
          <Space direction="vertical" className="w-full" size={"large"}>
            {/* overview */}
            <CustomCard
              title={
                <Space>
                  <Title
                    level={4}
                    style={{ margin: 0, textTransform: "uppercase" }}
                  >
                    Tổng quan
                  </Title>
                  <EditOverview
                    overview={{
                      description,
                      desireSalary,
                      experienceLevel,
                      firstName,
                      jobRole,
                      lastName,
                      middleName,
                      nation,
                      profilePicture,
                    }}
                  />
                </Space>
              }
              type="inner"
            >
              <Space size={"large"}>
                <Avatar size={80} icon={<UserOutlined />} />
                <Space direction="vertical">
                  <Row>
                    <Col span={8}>
                      <Title level={3} ellipsis style={{ margin: 0 }}>
                        {username}
                      </Title>
                    </Col>
                    <Col span={5} className="flex items-center">
                      <div className="font-semibold">
                        <Space>
                          <EnvironmentOutlined />
                          <span className="capitalize">
                            {nations[nation].label}
                          </span>
                        </Space>
                      </div>
                    </Col>
                    <Col span={8} className="flex items-center">
                      <div className="font-semibold">
                        {isVerified ? (
                          <Space>
                            <CheckCircleTwoTone twoToneColor={"#52c41a"} />
                            <span className="text-green-500">
                              {generateVerifyMsg(isVerified)}
                            </span>
                          </Space>
                        ) : (
                          <Space>
                            <CloseCircleTwoTone twoToneColor={"red"} />
                            <span className="text-red-500">
                              {generateVerifyMsg(isVerified)}
                            </span>
                          </Space>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Text type="secondary">{jobRole}</Text>
                  </Row>
                  <Row className="items-center">
                    <Space>
                      Đánh giá:
                      <Rate
                        disabled
                        defaultValue={averageRating}
                        character={<StarFilled style={{ fontSize: "15px" }} />}
                        allowHalf
                      />
                      {`(${ratingCount} đánh giá)`}
                    </Space>
                    <Divider type="vertical" />
                    <span>Dự án: {projectCount}</span>
                    <Divider type="vertical" />
                    <span>Chi phí/giờ: {formatCurrency(desireSalary)}</span>
                    <Divider type="vertical" />
                    <span>Ngôn ngữ: {language.length}</span>
                  </Row>
                </Space>
              </Space>
              <Divider />
              <Paragraph ellipsis>{description}</Paragraph>
            </CustomCard>
            {/* projects outside */}
            <CustomCard
              title={
                <Title
                  level={4}
                  style={{ margin: 0, textTransform: "uppercase" }}
                >
                  Project làm ngoài Wellancer
                </Title>
              }
              extra={<AddOutsideProject />}
              type="inner"
            >
              {outsideProjects?.map((project) => {
                const {
                  title,
                  description,
                  startDate,
                  endDate,
                  images,
                  jobRole,
                } = project;
                return (
                  <Flex justify="space-between">
                    <Space direction="vertical">
                      <Title level={4}>{title}</Title>
                      <Space>
                        <Title level={5}>{jobRole}</Title>
                        <Title level={5} style={{ fontWeight: "400" }}>
                          {`${formatUnixToLocal(startDate)} - ${endDate ? formatUnixToLocal(endDate) : "now"}`}
                        </Title>
                      </Space>
                      <Paragraph>{description}</Paragraph>
                    </Space>
                    <Image
                      width={200}
                      height={200}
                      src={images ? images[0] : "error"}
                      fallback={defaultImage}
                    />
                  </Flex>
                );
              })}
              <Divider />
            </CustomCard>
            {/* rating */}
            <CustomCard
              title={
                <Title
                  level={4}
                  style={{ margin: 0, textTransform: "uppercase" }}
                >
                  Nhận xét khách hàng qua các project
                </Title>
              }
              type="inner"
            >
              <Space direction="vertical" size={"middle"} className="w-full">
                <Row className="flex items-center">
                  <Tag color="#ffa500">
                    <Title level={5} style={{ margin: "0", color: "white" }}>
                      {averageRating}
                    </Title>
                  </Tag>
                  <Rate disabled defaultValue={averageRating} allowHalf />
                </Row>
                <Row
                  className="flex justify-around"
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                >
                  {qualityFactors.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <Col>
                          <Title level={4}>{item.name}</Title>
                          <Space direction="horizontal" size={"small"}>
                            <Text type="secondary">{item.ratingCount}</Text>
                            <Rate
                              disabled
                              defaultValue={item.rating}
                              allowHalf
                            />
                          </Space>
                        </Col>
                        {index !== qualityFactors.length - 1 && (
                          <Divider type="vertical" className="h-auto" />
                        )}
                      </React.Fragment>
                    );
                  })}
                </Row>
                <div>
                  <Divider />
                  <Row>
                    <Flex justify="space-between" className="w-full">
                      <Title level={4} style={{ margin: "0" }}>
                        Nhận xét gần đây
                      </Title>
                      <Space>
                        <Title level={4} style={{ margin: "0" }}>
                          Nhận xét gần đây:
                        </Title>
                        <Select
                          defaultValue="new"
                          style={{ width: 120 }}
                          onChange={handleChange}
                          options={[
                            { value: "new", label: "Mới nhất" },
                            { value: "best", label: "Đánh giá cao nhất" },
                          ]}
                        />
                      </Space>
                    </Flex>
                  </Row>
                  <Divider />
                </div>
                <Row>
                  {/* comment card */}
                  <Space direction="vertical" size={"middle"}>
                    {comments.map((comment, index) => (
                      <React.Fragment key={index}>
                        <CustomCard style={{ width: "100%" }}>
                          <Skeleton loading={false} avatar active>
                            <Meta
                              avatar={
                                <Avatar size={64} icon={<UserOutlined />} />
                              }
                              title={
                                <>
                                  <Title level={5} style={{ margin: "0" }}>
                                    {comment.title}
                                  </Title>
                                  <Rate
                                    disabled
                                    defaultValue={comment.rating}
                                    character={
                                      <StarFilled
                                        style={{ fontSize: "15px" }}
                                      />
                                    }
                                    allowHalf
                                  />
                                </>
                              }
                              description={
                                <Paragraph>{comment.description}</Paragraph>
                              }
                            />
                          </Skeleton>
                        </CustomCard>
                      </React.Fragment>
                    ))}
                  </Space>
                </Row>
              </Space>
            </CustomCard>
            {/* skills */}
            <CustomCard
              title={
                <Title
                  level={4}
                  style={{ margin: 0, textTransform: "uppercase" }}
                >
                  Kỹ năng
                </Title>
              }
              type="inner"
            >
              <Space size={[0, 8]} wrap>
                <Tag color="#87d068">Front-end Developing</Tag>
                <Tag color="#87d068">Back-end Developing</Tag>
                <Tag color="#87d068">UI/UX Design</Tag>
              </Space>
            </CustomCard>
            {/* languages */}
            <CustomCard
              title={
                <Title
                  level={4}
                  style={{ margin: 0, textTransform: "uppercase" }}
                >
                  Ngôn ngữ
                </Title>
              }
              type="inner"
            >
              <Space size={[0, 8]} wrap>
                {language.map((language, index) => (
                  <Tag key={index} color="#87d068">
                    {language}
                  </Tag>
                ))}
              </Space>
            </CustomCard>
            {/* experiences */}
            <CustomCard
              title={
                <Title
                  level={4}
                  style={{ margin: 0, textTransform: "uppercase" }}
                >
                  Kinh nghiệm
                </Title>
              }
              type="inner"
            >
              <Space direction="vertical">
                <Title level={4}>FPT Fap</Title>
                <Space>
                  <Title level={5}>Back-end Developer</Title>
                  <Title level={5} style={{ fontWeight: "400" }}>
                    09/2023 - 12/2023
                  </Title>
                </Space>
                <Paragraph>
                  Tôi tạo và quản lý database và flow cho project
                </Paragraph>
              </Space>
              <Divider />
              <Space direction="vertical">
                <Title level={4}>FPT Fap</Title>
                <Space>
                  <Title level={5}>Back-end Developer</Title>
                  <Title level={5} style={{ fontWeight: "400" }}>
                    09/2023 - 12/2023
                  </Title>
                </Space>
                <Paragraph>
                  Tôi tạo và quản lý database và flow cho project
                </Paragraph>
              </Space>
            </CustomCard>
            {/* education */}
            <CustomCard
              title={
                <Title
                  level={4}
                  style={{ margin: 0, textTransform: "uppercase" }}
                >
                  Học vấn
                </Title>
              }
              type="inner"
            >
              <Space direction="vertical">
                <Title level={4}>FPT University</Title>
                <Title level={5}>Tốt nghiệp, Lập trình IT</Title>
                <Title level={5} style={{ fontWeight: "400" }}>
                  09/2023 - 12/2023
                </Title>
                <Paragraph>Sinh viên tốt nghiệp tại FPT sau 3 năm</Paragraph>
              </Space>
              <Divider />
              <Space direction="vertical">
                <Title level={4}>FPT University</Title>
                <Title level={5}>Tốt nghiệp, Lập trình IT</Title>
                <Title level={5} style={{ fontWeight: "400" }}>
                  09/2023 - 12/2023
                </Title>
                <Paragraph>Sinh viên tốt nghiệp tại FPT sau 3 năm</Paragraph>
              </Space>
            </CustomCard>
          </Space>
        </Content>

        <Sider
          width={350}
          style={{ background: colorBgContainer, padding: 24 }}
        >
          <Space direction="vertical" size={"large"}>
            <PrimaryButton
              block
              onClick={() => {
                modal.confirm({
                  title: "Lưu ý",
                  icon: <ExclamationCircleFilled />,
                  content: <div>Bạn muốn gửi xác nhận hồ sơ</div>,
                  okText: "Đồng ý",
                  okType: "default",
                  cancelText: "Hủy",
                  onOk() {
                    console.log(`duyệt`);
                  },
                  onCancel() {},
                });
              }}
            >
              Gửi xác nhận
            </PrimaryButton>
            <Space direction="vertical">
              <Space>
                <Title level={4}>Thông tin liên hệ</Title>
                <EditContact />
              </Space>
              <CustomCard>
                <Space direction="vertical" size={"large"}>
                  <div>
                    <Title level={4}>Mail</Title>
                    {email}
                  </div>
                  <div>
                    <Title level={4}>Địa chỉ</Title>
                    {address}
                  </div>
                  <div>
                    <Title level={4}>Múi giờ</Title>
                    {nations[nation].label}
                  </div>
                  <div>
                    <Title level={4}>SĐT</Title>
                    {phone}
                  </div>
                </Space>
              </CustomCard>
            </Space>
            <div>
              <Title
                level={4}
                copyable={{
                  text: "https://freelancerviet.vn/ho-so/thang-vo-minh-3.html",
                }}
              >
                Sao chép đường dẫn hồ sơ
              </Title>
              <InputFix defaultValue="https://freelancerviet.vn/ho-so/thang-vo-minh-3.html" />
            </div>
          </Space>
        </Sider>
      </Layout>
      {contextHolder}
    </>
  );
}
