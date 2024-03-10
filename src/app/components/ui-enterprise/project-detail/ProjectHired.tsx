import { Content } from "antd/es/layout/layout";
import { Layout, theme } from "antd";
import FreelancerList from "../freelancer-list/freelancer-list"
import { freelancers } from "../../../../constants/testData";

export default function ProjectHired() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
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
        <FreelancerList freelancers={freelancers} paying={true}/>
      </Content>
    </Layout>
  );
}
