import { App, Form, Steps } from "antd";
import ProjectImportantInfo from "../../components/ui-enterprise/CreateProjectForm/ProjectImportantInfo";
import ProjectDetailInfo from "../../components/ui-enterprise/CreateProjectForm/ProjectDetailInfo";
import ProjectRequirementInfo from "../../components/ui-enterprise/CreateProjectForm/ProjectRequirementInfo";
import { useEffect, useState } from "react";
import { OutlineButton, PrimaryButton } from "../../components/button/buttons";
import { CreateProject, Project } from "../../models/project";
import { useSetHeaderTitle } from "../../hooks/useSetHeaderTitle";
// import { project } from "../../../constants/testData";
import { useAppDispatch } from "../../redux/hook";
import { createProject, fetchPostById } from "../../redux/slice/postSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateProjectForm({
  edit = false,
}: {
  edit?: boolean;
}) {
  useSetHeaderTitle([
    {
      title: ``,
    },
  ]);
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { projectId } = useParams();

  const [current, setCurrent] = useState(0);
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    async function fetch() {
      if (projectId) {
        const res = await dispatch(fetchPostById(projectId)).unwrap();
        setProject(res);
      }
    }
    fetch();
  }, [dispatch, projectId]);

  if (projectId && !project) return;

  const initialValues: CreateProject =
    edit && project
      ? project
      : {
          title: "",
          projectField: null,
          description: "",
          funding: "hourly",
          initialFunding: 0,
          candidateRequirement: "junior",
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
              {
                skillName: "Front-end Developer",
                skillId: "Front-end Developer",
              },
            ],
            questions: [],
          },
        };
  const formTitle = edit ? "Chỉnh sửa dự án" : "Tạo dự án";
  const steps = [
    {
      title: "Thông tin",
      content: (
        <ProjectImportantInfo
          formTitle={formTitle}
          form={form}
          initialValues={initialValues}
        />
      ),
    },
    {
      title: "Chi tiết",
      content: (
        <ProjectDetailInfo
          formTitle={formTitle}
          form={form}
          initialValues={initialValues}
        />
      ),
    },
    {
      title: "Năng lực",
      content: (
        <ProjectRequirementInfo
          formTitle={formTitle}
          form={form}
          initialValues={initialValues}
        />
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
    async function create() {
      const res = await dispatch(createProject(values)).unwrap();
      if (res) {
        message.success("Processing complete!");
        navigate("/ed/projects");
      }
    }
    create();
  };

  return (
    <div className="w-[741px]">
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
          <Form.Item name="description" hidden />
          <Form.Item name="funding" hidden />
          <Form.Item name="candidateRequirement" hidden />
          <Form.Item name="initialFunding" hidden />
          <Form.Item name="timeToComplete" hidden />
          <Form.Item name="privacy" hidden />
          <Form.Item name="projectType" hidden />
          <Form.Item name="optionalRequirements" hidden />
          <Form.Item name="projectField" hidden />
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
              <OutlineButton style={{ margin: "0 8px" }} onClick={() => prev()}>
                Quay lại
              </OutlineButton>
            )}
          </div>
        </Form>
      </Form.Provider>
    </div>
  );
}
