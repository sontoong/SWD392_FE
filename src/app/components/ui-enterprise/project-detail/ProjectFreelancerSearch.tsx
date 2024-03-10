import { Col, Layout, Row, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import FreelancerSearchForm from "../search/freelancer-search";
import { freelancers } from "../../../../constants/testData";
import FreelancerList from "../freelancer-list/freelancer-list";
import { useState } from "react";
import { OutlineButton } from "../../button/buttons";

export default function ProjectFreelancerSearch() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [activeList, setActiveList] = useState<"search" | "invited">("search");
  const [activeButton, setActiveButton] = useState<"search" | "invited">("search");

  const handleSwitchList = (list: "search" | "invited") => {
    setActiveList(list);
    setActiveButton(list);
  };

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
        <FreelancerSearchForm />
          <Row  style={{ marginBottom: 16, marginTop: 16 }}>
            <Col style={{marginRight:"1rem"}}>
              <OutlineButton
                onClick={() => handleSwitchList("search")}
                className={activeButton === "search" ? "bg-[#00b96b] text-white" : ""}
              >
                Tìm kiếm
              </OutlineButton>
            </Col>
            <Col>
              <OutlineButton
                onClick={() => handleSwitchList("invited")}
                className={activeButton === "invited" ? "bg-[#00b96b] text-white" : ""}
              >
                Đã mời
              </OutlineButton>
            </Col>
          </Row>
        {activeList === "search" && <FreelancerList freelancers={freelancers} />}
        {activeList === "invited" && <FreelancerList freelancers={freelancers} />}
      </Content>
    </Layout>
  );
}
