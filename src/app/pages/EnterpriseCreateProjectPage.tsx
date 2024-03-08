import { App, Form, Layout, Steps, theme } from "antd";
import ProjectImportantInfo from "../components/ui-enterprise/CreateProjectForm/ProjectImportantInfo";
import { Content } from "antd/es/layout/layout";
import ProjectDetailInfo from "../components/ui-enterprise/CreateProjectForm/ProjectDetailInfo";
import ProjectRequirementInfo from "../components/ui-enterprise/CreateProjectForm/ProjectRequirementInfo";
import { useState } from "react";
import { OutlineButton, PrimaryButton } from "../components/button/buttons";

export default function CreateProject() {
  const { message } = App.useApp();
  const [form] = Form.useForm();

  const [current, setCurrent] = useState(0);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const steps = [
    {
      title: "Thông tin",
      content: <ProjectImportantInfo form={form} />,
    },
    {
      title: "Chi tiết",
      content: <ProjectDetailInfo form={form} />,
    },
    {
      title: "Năng lực",
      content: <ProjectRequirementInfo form={form} />,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const onFinish = (values: any) => {
    console.log("Finish:", values);
    message.success("Processing complete!");
  };

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
          onFormFinish={(name, { values, forms }) => {
            const { mainForm } = forms;
            if (name === "ProjectImportantInfo") {
              mainForm.setFieldsValue({ ...values });
              next();
            }
            if (name === "ProjectDetailInfo") {
              mainForm.setFieldsValue({ ...values });
              next();
            }
            if (name === "ProjectRequirementInfo") {
              mainForm.setFieldsValue({ ...values });
              mainForm.submit();
            }
          }}
        >
          <div>{steps[current].content}</div>
          <Form name="mainForm" onFinish={onFinish}>
            <div style={{ marginTop: 24 }}>
              {current < steps.length - 1 && (
                <PrimaryButton
                  onClick={() => {
                    form.submit();
                  }}
                >
                  Tiếp tục
                </PrimaryButton>
              )}
              {current === steps.length - 1 && (
                <PrimaryButton
                  onClick={() => {
                    form.submit();
                  }}
                >
                  Gửi ngay
                </PrimaryButton>
              )}
              {current > 0 && (
                <OutlineButton
                  style={{ margin: "0 8px" }}
                  onClick={() => prev()}
                >
                  Quay lại
                </OutlineButton>
              )}
            </div>
          </Form>
        </Form.Provider>
      </Content>
    </Layout>
  );
}
