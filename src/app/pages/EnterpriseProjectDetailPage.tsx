import { Layout, Steps, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import {
  DollarCircleOutlined,
  FileOutlined,
  SearchOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import EnterpriseProjectDetail from "../components/ui-enterprise/project-detail/ProjectDetail";
import ProjectCandidateSearch from "../components/ui-enterprise/project-detail/ProjectCandidateSearch";
import ProjectApplicationList from "../components/ui-enterprise/project-detail/ProjectApplicationList";
import ProjectHired from "../components/ui-enterprise/project-detail/ProjectHired";
import BackButton from "../components/button/back-button";
import { useLocation, useSearchParams } from "react-router-dom";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";

const { Step } = Steps;

const steps = [
  {
    title: "Chi tiết project",
    content: <EnterpriseProjectDetail />,
    icon: <FileOutlined />,
  },
  {
    title: "Tìm Candidate",
    content: <ProjectCandidateSearch />,
    icon: <SearchOutlined />,
  },
  {
    title: "Báo giá",
    content: <ProjectApplicationList />,
    icon: <DollarCircleOutlined />,
  },
  {
    title: "Tuyển dụng",
    content: <ProjectHired />,
    icon: <TeamOutlined />,
  },
];

export default function EnterpriseProjectDetailPage() {
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
  const [searchParams, setSearchParams] = useSearchParams();
  const current = Number(searchParams.get("tab") || 0);

  const onChange = (value: number) => {
    console.log("onChange:", value);
    setSearchParams({ tab: `${value}` });
  };

  return (
    <Layout>
      <Content
        style={{
          padding: "24px 50px 24px 50px",
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <BackButton className="mb-3" />
        <Steps type="navigation" current={current} onChange={onChange}>
          {steps.map((item, index) => (
            <Step
              key={item.title}
              title={item.title}
              icon={item.icon}
              status={index === current ? "process" : "wait"}
            />
          ))}
        </Steps>
        <div className="mt-5">{steps[current].content}</div>
      </Content>
    </Layout>
  );
}
