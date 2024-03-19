import { UserOutlined } from "@ant-design/icons";
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
import { CustomCard } from "../components/ui/card";
import { EmailCensored } from "../components/ui/email-censored";
import { Link, useLocation } from "react-router-dom";
import CustomTag from "../components/ui/tag";
import { companyDetail, enterpriseInfo } from "../../constants/testData";
import {
  CompanyEditDocument,
  CompanyEditGeneralInfo,
  CopanyEditContact,
  EnterpriseEditGeneralInfo,
} from "../components/ui-enterprise/modals";
import { defaultImage } from "../../constants/images";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";

const { Title, Text } = Typography;
export default function EnterpriseDetailPage() {
  const location = useLocation();
  useSetHeaderTitle([
    {
      title: ``,
      path: location.pathname,
    },
  ]);
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
    industryFields,
    companyDocument,
    registrationDocumentType,
    identificationNumber,
    companyCountry,
    taxNumber,
    address,
    companyEmail,
    companyPhone,
  } = companyDetail;

  return (
    <>
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
                  <EnterpriseEditGeneralInfo />
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
                      <div>{enterpriseCountry.label}</div>
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
                    <CompanyEditGeneralInfo />
                  </Col>
                </Row>
                <Flex justify="center">
                  <Image
                    width={500}
                    height={200}
                    src="error"
                    fallback={defaultImage}
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
                    {industryFields.map((item, index) => (
                      <CustomTag key={index}>{item.label}</CustomTag>
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
                      <div>{identificationNumber}</div>
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
                  <CompanyEditDocument />
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
                  <CopanyEditContact />
                </Col>
              </Row>
            </CustomCard>
          </Space>
        </Content>
      </Layout>
    </>
  );
}
