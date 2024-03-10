import { Button, Col, Form, FormInstance, Row, Typography } from "antd";
import { CreateProject } from "../../../models/project";
import { CustomCard } from "../../ui/card";
import { FormInput } from "../../input/inputs";
import { IconButton } from "../../button/buttons";
import { FormSelect, SelectMultiple } from "../../select/select";
import { language } from "../../../../constants/language";
import { location } from "../../../../constants/location";
import { skills } from "../../../../constants/skill";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import DefaultForm from "../../form/form";

export default function ProjectRequirementInfo({
  form,
}: {
  form: FormInstance<any>;
}) {
  const { Title } = Typography;

  const initialValues: CreateProject = {
    title: "",
    language: "vn",
    projectField: "",
    description: "",
    contract: {
      date: 1708532861,
      fund: 0,
      depositType: "full"
    },
    funding: "fixed",
    initialFunding: 0,
    freelancerRequirement: "junior",
    timeToComplete: "<1 month",
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
        <DefaultForm
          form={form}
          name="ProjectRequirementInfo"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={initialValues}
        >
          <Row>
            <Col span={10}>
              <Form.Item
                name={["optionalRequirements", "minimumCompletedProjects"]}
                label="Số lượng project Freelancer đã hoàn thành trên Wellancer"
                rules={[{}]}
              >
                <FormSelect options={Object.values(freelancerProjectAmount)} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <Form.Item
                name={["optionalRequirements", "rating"]}
                label="Điểm chất lượng"
                rules={[{}]}
              >
                <FormSelect options={Object.values(freelancerRating)} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <Form.Item
                name={["optionalRequirements", "language"]}
                label="Ngôn ngữ"
                rules={[{}]}
              >
                <FormSelect options={Object.values(language)} />
              </Form.Item>
            </Col>
            <Col span={10} offset={4}>
              <Form.Item
                name={["optionalRequirements", "location"]}
                label="Địa điểm"
                rules={[{}]}
              >
                <FormSelect options={Object.values(location)} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name={["optionalRequirements", "skills"]}
                label="Ngành nghề"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn ngành nghề",
                  },
                ]}
              >
                <SelectMultiple options={skills} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Title level={3}>Câu hỏi sàng lọc ứng viên (tùy chọn)</Title>
            <Col span={24}>
              <Form.List
                name={["optionalRequirements", "questions"]}
                rules={[
                  {
                    validator: async (_, names) => {
                      if (names.length >= 5) {
                        return Promise.reject(new Error("Tối đa 5 câu hỏi"));
                      }
                    },
                  },
                ]}
              >
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Row
                        key={key}
                        style={{
                          marginTop: 8,
                          marginBottom: 8,
                        }}
                      >
                        <Col span={18}>
                          <Form.Item
                            {...restField}
                            name={[name, "question"]}
                            rules={[
                              {
                                required: true,
                                type: "string",
                                message: "Vui lòng nhập câu hỏi",
                              },
                            ]}
                          >
                            <FormInput />
                          </Form.Item>
                        </Col>
                        <Col span={6}>
                          <IconButton
                            icon={<DeleteOutlined />}
                            onClick={() => remove(name)}
                          />
                        </Col>
                      </Row>
                    ))}
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
        </DefaultForm>
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
