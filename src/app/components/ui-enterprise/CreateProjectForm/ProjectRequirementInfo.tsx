import { Button, Col, Form, Row, Space, Typography } from "antd";
import { CreateProject } from "../../../models/project";
import { CustomCard } from "../../ui/card";
import { FormInput } from "../../input/inputs";
import { IconButton, OutlineButton, PrimaryButton } from "../../button/buttons";
import { FormSelect, SelectMultiple } from "../../select/select";
import { language } from "../../../../constants/language";
import { location } from "../../../../constants/location";
import { skills } from "../../../../constants/skill";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

export default function ProjectRequirementInfo() {
  const { Title } = Typography;
  const [form] = Form.useForm();

  const initialValues: CreateProject = {
    title: "",
    language: "vn",
    location: "hcm",
    projectField: "",
    description: "",
    contract: "",
    funding: "fixed",
    initialFunding: 0,
    freelancerRequirement: "junior",
    timeToComplete: 1,
    publishTime: 0,
    createdBy: "",
    applicantCount: 0,
    paidAmount: 0,
    isCompleted: false,
    privacy: "public",
    projectType: "unknown",
    optionalRequirements: {
      language: "all",
      location: "all",
      minimumCompletedProjects: "all",
      rating: "all",
      skills: [
        { label: "Front-end Developer", value: "Front-end Developer" },
        { label: "Back-end Developer", value: "Back-end Developer" },
        { label: "Full-stack Developer", value: "Full-stack Developer" },
      ],
      questions: [
        {
          question: "",
        },
      ],
    },
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <CustomCard
        title={
          <Title
            level={4}
            style={{
              margin: 0,
              textTransform: "uppercase",
              color: "#74BA7B",
            }}
          >
            Tạo Project (Năng lực)
          </Title>
        }
      >
        <Form
          form={form}
          layout="vertical"
          name="ProjectRequirementInfo"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            ...initialValues.optionalRequirements,
          }}
        >
          <Row>
            <Col span={10}>
              <Form.Item
                name="minimumCompletedProjects"
                label="Số lượng project Freelancer đã hoàn thành trên Wellancer"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <FormSelect
                  onChange={() => {}}
                  options={Object.values(freelancerProjectAmount)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <Form.Item
                name="rating"
                label="Điểm chất lượng"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <FormSelect
                  onChange={() => {}}
                  options={Object.values(freelancerRating)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <Form.Item
                name="language"
                label="Ngôn ngữ"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <FormSelect
                  onChange={() => {}}
                  options={Object.values(language)}
                />
              </Form.Item>
            </Col>
            <Col span={10} offset={4}>
              <Form.Item
                name="location"
                label="Địa điểm"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <FormSelect
                  onChange={() => {}}
                  options={Object.values(location)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="industryFields"
                label="Ngành nghề"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <SelectMultiple
                  options={skills}
                  defaultValue={initialValues.optionalRequirements.skills.map(
                    (field) => field.value,
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Title level={3}>Câu hỏi sàng lọc ứng viên (tùy chọn)</Title>
            <Col span={24}>
              <Form.List
                name="questions"
                rules={[
                  {
                    validator: async (_, names) => {
                      if (names.length >= 5) {
                        return Promise.reject(
                          new Error("Tối đa 5 câu hỏi"),
                        );
                      }
                    },
                  },
                ]}
              >
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "question"]}
                          rules={[{ required: true, type: "string" }]}
                            style={{width:"55rem"}}
                        >
                          <FormInput />
                        </Form.Item>
                        <IconButton
                          icon={<DeleteOutlined />}
                          onClick={() => remove(name)}
                        />
                      </Space>
                    ))}
                    <Form.ErrorList errors={errors} className="text-[red]"/>
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                        disabled={fields.length >= 5}
                      >
                        Thêm câu hỏi
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Col>
          </Row>

          <Row gutter={10} justify={"end"}>
            <Form.Item wrapperCol={{ span: 5 }}>
              <PrimaryButton htmlType="submit">Gửi ngay</PrimaryButton>
            </Form.Item>
            <Col span={4}>
              <OutlineButton htmlType="submit">Quay lại</OutlineButton>
            </Col>
          </Row>
        </Form>
      </CustomCard>
    </>
  );
}

const freelancerProjectAmount = [
  {
    label: "Tất cả",
    value: "all",
  },
  {
    label: "Ít hơn 3 project",
    value: "<3 projects",
  },
  {
    label: "5 đến 10 project",
    value: "5-10 projects",
  },
  {
    label: "Nhiều hơn 10 project",
    value: ">10 projects",
  },
];

const freelancerRating = [
  {
    label: "Tất cả",
    value: "all",
  },
  {
    label: "Hơn 3 sao",
    value: ">3 stars",
  },
  {
    label: "Hơn 4 sao",
    value: ">4 stars",
  },
];
