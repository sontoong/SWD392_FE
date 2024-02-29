import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Divider, Layout, Row, Space, theme } from "antd";
import { Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

export default function EnterpriseDetailPage() {
  const { Title, Paragraph, Text } = Typography;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
            <Card
              title={
                <Title
                  level={4}
                  style={{ margin: 0, textTransform: "uppercase"}}
                >
                  Nhà tuyển dụng
                  <EditOutlined className="ml-[1rem]" />
                </Title>
              }
              style={{boxShadow:'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}
            //   style={{boxShadow:''}}
              type="inner"
            >
              <Space className="w-full" direction="vertical" size={"large"}>
                <Avatar size={80} icon={<UserOutlined />} />
                <Row>
                  <Col span={10}>
                    <Space className="w-full" size={90}>
                      <div>
                        <Title level={3}>Họ</Title>
                        <div>Nguyễn</div>
                      </div>
                      <div>
                        <Title level={3}>Tên đệm</Title>
                        <div>Nguyễn</div>
                      </div>
                      <div>
                        <Title level={3}>Tên</Title>
                        <div>Nguyễn</div>
                      </div>
                    </Space>
                  </Col>
                  <Col span={10} offset={4}>
                    <Title level={3}>Ngày sinh của bạn</Title>
                    <div>13/11/2003</div>
                  </Col>
                </Row>
              </Space>
              <Divider/>
              <Row>
                <Space className="w-full" size={420}>
                    <Col>
                        <Space direction="vertical" size={'large'}>
                            <div>
                                <Title level={3}>Quốc gia</Title>
                                <div>Việt Nam</div>
                            </div>
                            <div>
                                <Title level={3}>Loại giấy tờ</Title>
                                <div>Hộ chiếu</div>
                            </div>
                        </Space>
                    </Col>
                    <Col >
                        <Space direction="vertical" size={'large'}>
                            <div>
                                <Title level={3}>Giấy tờ</Title>
                                <Link to={'/'} className="text-[#1890FF]">FunnyMemeFrom9GAG.png</Link>
                            </div>
                            <div>
                                <Title level={3}>Số</Title>
                                <div>33333333333333</div>
                            </div>
                        </Space>
                    </Col>
                </Space>
              </Row>
            </Card>
          </Space>
        </Content>
      </Layout>
    </>
  );
}
