import { Layout, Row, Typography, theme } from "antd";
import { CustomCard } from "../components/ui/card";
import { Content } from "antd/es/layout/layout";
import { project } from "../../constants/testData";

export default function FreelancerProjectDetail() {
  const { Title } = Typography;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const data = project;

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
                {data.description}
              </Title>
            }
          >
            <Row>
                
            </Row>
          </CustomCard>
        </Content>
      </Layout>
    </>
  );
}
