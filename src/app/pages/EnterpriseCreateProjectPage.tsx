import { Form, Layout, Steps, message, theme } from "antd";
import ProjectImportantInfo from "../components/ui-enterprise/CreateProjectForm/ProjectImportantInfo";
import { Content } from "antd/es/layout/layout";
import ProjectDetailInfo from "../components/ui-enterprise/CreateProjectForm/ProjectDetailInfo";
import ProjectRequirementInfo from "../components/ui-enterprise/CreateProjectForm/ProjectRequirementInfo";
import { useState } from "react";
import { OutlineButton, PrimaryButton } from "../components/button/buttons";

export default function CreateProject() {
  const [current, setCurrent] = useState(0);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const steps = [
    {
      title: "Thông tin",
      content: <ProjectImportantInfo />,
    },
    {
      title: "Chi tiết",
      content: <ProjectDetailInfo />,
    },
    {
      title: "Năng lực",
      content: <ProjectRequirementInfo />,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
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
        <Steps current={current} items={items} className="mb-[2rem]" />
        <Form.Provider
          onFormFinish={(name) => {
            if (name === "form1") {
              // Do something...
            }
          }}
        >
          <div>{steps[current].content}</div>
        </Form.Provider>

        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <PrimaryButton type="primary" onClick={() => next()}>
              Tiếp tục
            </PrimaryButton>
          )}
          {current === steps.length - 1 && (
            <PrimaryButton
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Gửi ngay
            </PrimaryButton>
          )}
          {current > 0 && (
            <OutlineButton style={{ margin: "0 8px" }} onClick={() => prev()}>
              Quay lại
            </OutlineButton>
          )}
        </div>
      </Content>
    </Layout>
  );
}
