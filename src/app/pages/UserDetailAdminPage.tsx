import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  EnvironmentOutlined,
  ExclamationCircleFilled,
  StarFilled,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Image,
  Input,
  Layout,
  Modal,
  Rate,
  Row,
  Select,
  Skeleton,
  Space,
  Typography,
  theme,
} from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { defaultImage } from "../../constants/images";
import { comments, user } from "../../constants/testData";
import BackButton from "../components/button/back-button";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";
import { generateVerifyMsg } from "../utils/generators";
import { formatCurrency } from "../utils/utils";
import TextArea from "antd/es/input/TextArea";
import { qualityFactors } from "../../constants/quality";
import { OkButton } from "../components/button/buttons";
import CustomTag from "../components/ui/tag";

const { Content, Sider } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function UserDetailAdminPage({ verify }: { verify?: boolean }) {
  const location = useLocation();
  const [modal, contextHolder] = Modal.useModal();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  useSetHeaderTitle([
    {
      title: `Thông tin tài khoản`,
      path: location.pathname,
    },
  ]);

  const [reason, setReason] = useState<string>();

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const {
    name,
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
  } = user;

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
            <Card
              title={
                <Title
                  level={4}
                  style={{ margin: 0, textTransform: "uppercase" }}
                >
                  Tổng quan
                </Title>
              }
              type="inner"
            >
              <Space size={"large"}>
                <Avatar size={80} icon={<UserOutlined />} />
                <Space direction="vertical">
                  <Row>
                    <Col span={8}>
                      <Title level={3} ellipsis style={{ margin: 0 }}>
                        {name}
                      </Title>
                    </Col>
                    <Col span={5} className="flex items-center">
                      <div className="font-semibold">
                        <Space>
                          <EnvironmentOutlined />
                          <span className="capitalize">{nation}</span>
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
                    <Text type="secondary">IT Developer</Text>
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
            </Card>
            {/* projects outside */}
            <Card
              title={
                <Title
                  level={4}
                  style={{ margin: 0, textTransform: "uppercase" }}
                >
                  Project làm ngoài Wellancer
                </Title>
              }
              type="inner"
            >
              <Flex justify="space-between">
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
                <Image
                  width={200}
                  height={200}
                  src="error"
                  fallback={defaultImage}
                />
              </Flex>
              <Divider />
              <Flex justify="space-between">
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
                <Image
                  width={200}
                  height={200}
                  src="error"
                  fallback={defaultImage}
                />
              </Flex>
            </Card>
            {/* rating */}
            <Card
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
                  <CustomTag>
                    <Title level={5} style={{ margin: "0", color: "white" }}>
                      {averageRating}
                    </Title>
                  </CustomTag>
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
                        <Card style={{ width: "100%" }}>
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
                        </Card>
                      </React.Fragment>
                    ))}
                  </Space>
                </Row>
              </Space>
            </Card>
            {/* skills */}
            <Card
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
                <CustomTag>Front-end Developing</CustomTag>
                <CustomTag>Back-end Developing</CustomTag>
                <CustomTag>UI/UX Design</CustomTag>
              </Space>
            </Card>
            {/* languages */}
            <Card
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
                  <CustomTag key={index} color="#87d068">
                    {language}
                  </CustomTag>
                ))}
              </Space>
            </Card>
            {/* experiences */}
            <Card
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
            </Card>
            {/* education */}
            <Card
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
            </Card>
          </Space>
        </Content>
        <Sider
          width={350}
          style={{ background: colorBgContainer, padding: 24 }}
        >
          <Space direction="vertical" size={"large"}>
            {verify ? (
              <Space direction="vertical" size={"middle"}>
                <OkButton
                  block
                  onClick={() => {
                    modal.confirm({
                      title: "Lưu ý",
                      icon: <ExclamationCircleFilled />,
                      content: <div>Bạn muốn duyệt hồ sơ</div>,
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
                  Xác nhận hồ sơ
                </OkButton>
                <Button
                  danger
                  type="default"
                  block
                  onClick={() => {
                    modal.confirm({
                      title: "Từ chối duyệt",
                      icon: <ExclamationCircleFilled />,
                      content: (
                        <Space direction="vertical" className="mb-3 w-full">
                          <div className="font-semibold">
                            Vui lòng nhập lý do
                          </div>
                          <TextArea
                            rows={4}
                            placeholder="Nhập lý do"
                            maxLength={100}
                            showCount
                            onChange={(e) => setReason(e.target.value)}
                          />
                        </Space>
                      ),
                      okText: "Đồng ý",
                      okType: "danger",
                      cancelText: "Hủy",
                      onOk() {
                        setReason((prevReason) => {
                          console.log(`Không duyệt, Reason: ${prevReason}`);
                          console.log(reason);
                          return prevReason;
                        });
                      },
                      onCancel() {},
                    });
                  }}
                >
                  Từ chối
                </Button>
              </Space>
            ) : (
              <></>
            )}
            <div>
              <Title level={4}>Thông tin liên hệ</Title>
              <Card>
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
                    {nation}
                  </div>
                  <div>
                    <Title level={4}>SĐT</Title>
                    {phone}
                  </div>
                </Space>
              </Card>
            </div>
            <div>
              <Title
                level={4}
                copyable={{
                  text: "https://freelancerviet.vn/ho-so/thang-vo-minh-3.html",
                }}
              >
                Sao chép đường dẫn hồ sơ
              </Title>
              <Input
                defaultValue="https://freelancerviet.vn/ho-so/thang-vo-minh-3.html"
                className="rounded-[6px] border-[1px] border-[#d9d9d9]"
              />
            </div>
          </Space>
        </Sider>
      </Layout>
      {contextHolder}
    </>
  );
}
