import {
  CheckCircleOutlined,
  DeleteOutlined,
  ExclamationCircleFilled,
  LeftOutlined,
  TagOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";
import {
  Col,
  Divider,
  Layout,
  Menu,
  MenuProps,
  Modal,
  Row,
  Space,
  theme,
  Typography,
} from "antd";
import {
  calculateDateToNow,
  formatCurrency,
  generateProjectTypeMsg,
  generateRequirementMsg,
} from "../utils/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { project } from "../../constants/testData";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const { Content, Sider } = Layout;
const { Text, Title } = Typography;

export default function ProjectDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  useSetHeaderTitle([
    {
      title: `Chi tiết project`,
      path: location.pathname,
    },
  ]);

  const [reason, setReason] = useState<string>();

  const [modal, contextHolder] = Modal.useModal();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items: MenuProps["items"] = [
    {
      label: "Quay lại",
      key: "back",
      icon: <LeftOutlined />,
    },
    {
      type: "divider",
    },
    {
      label: "Duyệt dự án",
      key: "verify",
      className: "text-green-500",
      icon: <CheckCircleOutlined />,
    },
    {
      label: "Xóa dự án",
      key: "delete",
      danger: true,
      icon: <DeleteOutlined />,
    },
  ];

  const onMenuClick: MenuProps["onClick"] = (e) => {
    const { key } = e;
    switch (key) {
      case "back": {
        navigate(-1);
        break;
      }
      case "delete": {
        modal.confirm({
          title: "Xóa dự án",
          icon: <ExclamationCircleFilled />,
          content: (
            <Space direction="vertical" className="mb-3 w-full">
              <div className="font-semibold">Vui lòng nhập lý do</div>
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
              console.log(`${key}, Reason: ${prevReason}`);
              console.log(reason);
              return prevReason;
            });
          },
          onCancel() {},
        });
        break;
      }
      case "verify": {
        modal.confirm({
          title: "Lưu ý",
          icon: <ExclamationCircleFilled />,
          content: <div>Bạn muốn duyệt dự án</div>,
          okText: "Đồng ý",
          okType: "default",
          cancelText: "Hủy",
          onOk() {
            console.log(`${key}`);
          },
          onCancel() {},
        });
        break;
      }

      default:
        break;
    }
  };

  const {
    publishedTime,
    title,
    funding,
    initialFunding,
    freelancerRequirement,
    description,
    projectType,
    optionalRequirements,
    applicationCount,
    inviteSent,
    inviteAccepted,
  } = project;

  return (
    <>
      <Layout
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Sider style={{ background: colorBgContainer }} reverseArrow>
          <Menu
            mode="inline"
            style={{ height: "100%" }}
            onClick={onMenuClick}
            items={items}
            selectable={false}
          />
        </Sider>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Title level={2}>{title}</Title>
          <Text>Đã đăng cách đây {calculateDateToNow(publishedTime)}</Text>
          <Divider />
          <Title level={3}>{description}</Title>
          <Divider />
          <Row>
            <Col span={8}>
              <Title level={3}>
                <Space>
                  <TagOutlined />
                  <span>
                    {initialFunding
                      ? formatCurrency(initialFunding)
                      : generateRequirementMsg(freelancerRequirement).priceDesc}
                  </span>
                </Space>
              </Title>
              <Text type="secondary">
                {funding === "hourly" ? "Giá theo giờ" : "Giá theo công việc"}
              </Text>
            </Col>
            <Col span={8} offset={1}>
              <Title level={3}>
                <Space>
                  <TeamOutlined />
                  <span>
                    {generateRequirementMsg(freelancerRequirement).title}
                  </span>
                </Space>
              </Title>
              <Text type="secondary">
                {generateRequirementMsg(freelancerRequirement).desc}
              </Text>
            </Col>
          </Row>
          <Divider />
          <Title level={3}>
            Loại công việc: {generateProjectTypeMsg(projectType)}
          </Title>
          <Divider />
          <Row>
            <Col span={8}>
              <Title level={3}>Văn bằng ưu tiên</Title>
              <Title level={5}>
                Công việc đã hoàn thành:{" "}
                {optionalRequirements.minimumCompletedProjects}
              </Title>
              <Title level={5}>Đánh giá: {optionalRequirements.rating}</Title>
              <Title level={5}>Ngôn ngữ: {optionalRequirements.language}</Title>
              <Title level={5}>Đất nước: {optionalRequirements.location}</Title>
            </Col>
            <Col span={8} offset={1}>
              <Title level={3}>Hoạt động ở công việc này</Title>
              <Title level={5}>Báo giá: {applicationCount}</Title>
              <Title level={5}>Lời mời đã gửi: {inviteSent}</Title>
              <Title level={5}>
                Lời mời chưa được trả lời: {inviteAccepted}
              </Title>
            </Col>
          </Row>
        </Content>
      </Layout>
      {contextHolder}
    </>
  );
}
