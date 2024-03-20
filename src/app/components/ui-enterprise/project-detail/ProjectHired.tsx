import { Content } from "antd/es/layout/layout";
import { Layout, theme } from "antd";
import CandidateList from "../candidate-list/candidate-list";
import { candidates } from "../../../../constants/testData";

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
        <CandidateList candidates={candidates} paying={true} />
      </Content>
    </Layout>
  );
}
