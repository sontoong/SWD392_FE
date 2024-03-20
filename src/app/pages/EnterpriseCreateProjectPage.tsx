import { App, Form, Layout, Steps, theme } from "antd";
import ProjectImportantInfo from "../components/ui-enterprise/CreateProjectForm/ProjectImportantInfo";
import { Content } from "antd/es/layout/layout";
import ProjectDetailInfo from "../components/ui-enterprise/CreateProjectForm/ProjectDetailInfo";
import ProjectRequirementInfo from "../components/ui-enterprise/CreateProjectForm/ProjectRequirementInfo";
import { useState } from "react";
import { OutlineButton, PrimaryButton } from "../components/button/buttons";
import { CreateProject } from "../models/project";
import { useSetHeaderTitle } from "../hooks/useSetHeaderTitle";

export default function CreateProjectForm({
  edit = false,
}: {
  edit?: boolean;
}) {
  useSetHeaderTitle([
    {
      title: ``,
      path: location.pathname,
    },
  ]);
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  console.log(edit);

  const [current, setCurrent] = useState(0);

  const initialValues: CreateProject = {
    title: "",
    projectField: "",
    description: "",
    funding: "hourly",
    initialFunding: 0,
    freelancerRequirement: "junior",
    timeToComplete: "<1 month",
    createdBy: "",
    privacy: "public",
    projectType: "unknown",
    optionalRequirements: {
      language: "all",
      nation: "all",
      minimumCompletedProjects: "all",
      rating: "all",
      skills: [
        { label: "Front-end Developer", value: "Front-end Developer" },
        { label: "Back-end Developer", value: "Back-end Developer" },
        { label: "Full-stack Developer", value: "Full-stack Developer" },
      ],
      questions: [],
    },
  };

  const steps = [
    {
      title: "Thông tin",
      content: (
        <ProjectImportantInfo form={form} initialValues={initialValues} />
      ),
    },
    {
      title: "Chi tiết",
      content: <ProjectDetailInfo form={form} initialValues={initialValues} />,
    },
    {
      title: "Năng lực",
      content: (
        <ProjectRequirementInfo form={form} initialValues={initialValues} />
      ),
    },
  ];

  const next = () => {
    window.scrollTo(0, 0);
    setCurrent(current + 1);
  };

  const prev = () => {
    window.scrollTo(0, 0);
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const onFinish = (values: CreateProject) => {
    if (typeof values.initialFunding != "number") {
      values = { ...values, initialFunding: 0 };
    }
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
            {/* hidden fields for form to record */}
            <Form.Item name="title" hidden />
            <Form.Item name="optionalRequirements" hidden />
            <Form.Item name="projectField" hidden />
            <Form.Item name="description" hidden />
            <Form.Item name="contract" hidden />
            <Form.Item name="funding" hidden />
            <Form.Item name="initialFunding" hidden />
            <Form.Item name="freelancerRequirement" hidden />
            <Form.Item name="timeToComplete" hidden />
            <Form.Item name="privacy" hidden />
            <Form.Item name="projectType" hidden />

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
