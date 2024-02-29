import { EditOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Col,
  Divider,
  Flex,
  Image,
  Layout,
  Row,
  Space,
  theme,
} from "antd";
import { Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import CustomCard from "../components/ui/card";
import { EmailCensored } from "../components/ui/email-censored";
import { Link } from "react-router-dom";
import CustomTag from "../components/ui/tag";
import { companyDetail, enterpriseInfo } from "../../constants/testData";

export default function EnterpriseDetailPage() {
  const { Title, Text } = Typography;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const {
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    enterpriseCountry,
    documentType,
    enterpriseDocument,
    documentNumber,
    enterpriseEmail,
    enterprisePhone,
  } = enterpriseInfo;

  const {
    companyName,
    website,
    videoLink,
    companySize,
    introduction,
    industry,
    companyDocument,
    registrationDocumentType,
    registrationNumber,
    companyCountry,
    taxNumber,
    address,
    companyEmail,
    companyPhone,
  } = companyDetail;

  return (
    <>
      {" "}
      <Layout>
        <Content
          style={{
            padding: "24px 250px 24px 250px",
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Space direction="vertical" className="w-full" size={"large"}>
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
                  Nhà tuyển dụng
                  <EditOutlined className="ml-[1rem]" />
                </Title>
              }
              type="inner"
            >
              <Space className="w-full" direction="vertical" size={"large"}>
                <Avatar size={80} icon={<UserOutlined />} />
                <Row>
                  <Col span={10}>
                    <Row>
                      <Col span={2}>
                        <Title level={3}>Họ</Title>
                        <div>{lastName}</div>
                      </Col>
                      <Col span={6} offset={4}>
                        <Title level={3}>Tên đệm</Title>
                        <div>{middleName}</div>
                      </Col>
                      <Col span={3} offset={4}>
                        <Title level={3}>Tên</Title>
                        <div>{firstName}</div>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={10} offset={4}>
                    <Title level={3}>Ngày sinh của bạn</Title>
                    <div>{dateOfBirth}</div>
                  </Col>
                </Row>
              </Space>
              <Divider />
              <Row>
                <Col span={10}>
                  <Space direction="vertical" size={"large"}>
                    <div>
                      <Title level={3}>Quốc gia</Title>
                      <div>{enterpriseCountry}</div>
                    </div>
                    <div>
                      <Title level={3}>Loại giấy tờ</Title>
                      <div>{documentType}</div>
                    </div>
                  </Space>
                </Col>
                <Col span={10} offset={4}>
                  <Space direction="vertical" size={"large"}>
                    <div>
                      <Title level={3}>Giấy tờ</Title>
                      <Text className="text-[#1890FF] underline">
                        {enterpriseDocument}
                      </Text>
                    </div>
                    <div>
                      <Title level={3}>Số</Title>
                      <div>{documentNumber}</div>
                    </div>
                  </Space>
                </Col>
              </Row>
              <Divider />
              <Row className="mb-[3%]">
                <Col span={10}>
                  <Title level={3}>Email</Title>
                  <EmailCensored suffixCount={12}>
                    {enterpriseEmail}
                  </EmailCensored>
                </Col>
                <Col span={10} offset={4}>
                  <Title level={3}>SĐT</Title>
                  <div>{enterprisePhone}</div>
                </Col>
              </Row>
            </CustomCard>
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
                  Thông tin công ty
                </Title>
              }
              type="inner"
            >
              <Space className="w-full" direction="vertical" size={"large"}>
                <Row>
                  <Col span={2}>
                    <Avatar size={80} icon={<UserOutlined />} />
                  </Col>
                  <Col span={2} offset={20}>
                    <Title level={2}>
                      <EditOutlined className="ml-[1rem] text-[#74BA7B]" />
                    </Title>
                  </Col>
                </Row>
                <Flex justify="center">
                  <Image
                    width={500}
                    height={200}
                    src="error"
                    fallback="data:image/png;base64,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"
                  />
                </Flex>
                <Row>
                  <Col span={10}>
                    <Space direction="vertical" size={"large"}>
                      <div>
                        <Title level={3}>Tên công ty</Title>
                        <div>{companyName}</div>
                      </div>
                      <div>
                        <Title level={3}>Trang web công ty</Title>
                        <Link to={"/"} className="text-[#1890FF] underline">
                          {website}
                        </Link>
                      </div>
                    </Space>
                  </Col>
                  <Col span={10} offset={4}>
                    <Space direction="vertical" size={"large"}>
                      <div>
                        <Title level={3}>Qui mô công ti</Title>
                        <div>{companySize}</div>
                      </div>
                      <div>
                        <Title level={3}>Video công ty</Title>
                        <Link to={"/"} className="text-[#1890FF] underline">
                          {videoLink}
                        </Link>
                      </div>
                    </Space>
                  </Col>
                </Row>
                <div>
                  <Title level={3}>Giới thiệu công ti</Title>
                  <div>{introduction}</div>
                </div>
                <div>
                  <Title level={3}>Ngành nghề</Title>
                  <Space size={[0, 8]} wrap>
                    {industry.map((item, index) => (
                      <CustomTag key={index}>{item}</CustomTag>
                    ))}
                  </Space>
                </div>
              </Space>
              <Divider />
              <Row>
                <Col span={8}>
                  <Space direction="vertical" size={"large"}>
                    <div>
                      <Title level={3}>Loại giấy tờ</Title>
                      <div>{registrationDocumentType}</div>
                    </div>
                    <div>
                      <Title level={3}>Mã số doanh nghiệp</Title>
                      <div>{registrationNumber}</div>
                    </div>
                    <div>
                      <Title level={3}>Quốc gia</Title>
                      <div>{companyCountry}</div>
                    </div>
                  </Space>
                </Col>
                <Col span={8} offset={6}>
                  <Space direction="vertical" size={"large"}>
                    <div>
                      <Title level={3}>Giấy tờ</Title>
                      <Text className="text-[#1890FF] underline">
                        {companyDocument}
                      </Text>
                    </div>
                    <div>
                      <Title level={3}>Mã số thuế</Title>
                      <div>{taxNumber}</div>
                    </div>
                    <div>
                      <Title level={3}>Địa chỉ</Title>
                      <div className="w-[40%]">{address}</div>
                    </div>
                  </Space>
                </Col>
                <Col span={2}>
                  <Title level={2}>
                    <EditOutlined className="ml-[1rem] text-[#74BA7B]" />
                  </Title>
                </Col>
              </Row>
              <Divider />
              <Row className="mb-[3%]">
                <Col span={10}>
                  <Title level={3}>Email</Title>
                  <EmailCensored suffixCount={12}>{companyEmail}</EmailCensored>
                </Col>
                <Col span={8} offset={4}>
                  <Title level={3}>SĐT</Title>
                  <div>{companyPhone}</div>
                </Col>
                <Col span={2}>
                  <Title level={2}>
                    <EditOutlined className="ml-[1rem] text-[#74BA7B]" />
                  </Title>
                </Col>
              </Row>
            </CustomCard>
          </Space>
        </Content>
      </Layout>
    </>
  );
}
