import { Layout, theme } from "antd";
import ProjectImportantInfo from "../components/ui-enterprise/ProjectImportantInfo";
import { Content } from "antd/es/layout/layout";


export default function CreateProject() {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

    return(
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
                <ProjectImportantInfo/>
            </Content>
        </Layout>
    );
}