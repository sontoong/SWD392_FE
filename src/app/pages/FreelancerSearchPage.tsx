import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import FreelancerList from "../components/ui-enterprise/freelancer-list/freelancer-list";
import { freelancers } from "../../constants/testData";
import FreelancerSearchForm from "../components/ui-enterprise/search/freelancer-search";

export default function FreelancerSearchPage(){
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
            <FreelancerSearchForm />
            <FreelancerList freelancers={freelancers}/>
          </Content>
          </Layout>
      )
}