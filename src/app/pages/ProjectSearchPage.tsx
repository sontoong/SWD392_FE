import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import ProjectSearchForm from "../components/ui-freelancer/search/project-search";
import ProjectList from "../components/ui-freelancer/search/project-list";
import { projects } from "../../constants/testData";

export default function ProjectSearchPage(){

    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return(
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
          <ProjectSearchForm />
          <ProjectList projects={projects}/>
        </Content>
        </Layout>
    );
}