import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  TagOutlined,
  TeamOutlined,
} from "@ant-design/icons";

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

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { nations, project } from "../../../../constants/testData";
import { calculateDateToNow, formatCurrency } from "../../../utils/utils";
import {
  generateLanguage,
  generateProjectCompleted,
  generateProjectTypeMsg,
  generateRating,
  generateRequirementMsg,
} from "../../../utils/generators";
import { CustomCard } from "../../ui/card";

const { Content, Sider } = Layout;
const { Text, Title } = Typography;

export default function EnterpriseProjectDetail() {
  const navigate = useNavigate();

  const [reason, setReason] = useState<string>();

  const [modal, contextHolder] = Modal.useModal();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items: MenuProps["items"] = [
    {
      label: "Chỉnh sửa project",
      key: "edit",
      icon: <EditOutlined />,
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
      case "delete": {
        modal.confirm({
          title: "Xóa dự án",
          icon: <ExclamationCircleFilled />,
          content: (
            <Space direction="vertical" className="mb-3 w-full">
              <div className="font-semibold">
                Bạn có muốn xóa project không?
              </div>
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

      case "edit":
        {
          navigate(`/ed/edit-project/${1}`);
        }

        break;

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
    projectField,
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
          <CustomCard>
            <Title level={2}>{title}</Title>
            <Title level={4}>{projectField.label}</Title>
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
                        : generateRequirementMsg(freelancerRequirement)
                            .priceDesc}
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
                  {generateProjectCompleted(
                    optionalRequirements.minimumCompletedProjects,
                  )}
                </Title>
                <Title level={5}>
                  Đánh giá: {generateRating(optionalRequirements.rating)}
                </Title>
                <Title level={5}>
                  Ngôn ngữ: {generateLanguage(optionalRequirements.language)}
                </Title>
                <Title level={5}>
                  Đất nước: {nations[optionalRequirements.nation].label}
                </Title>
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
          </CustomCard>
        </Content>
      </Layout>
      {contextHolder}
    </>
  );
}
