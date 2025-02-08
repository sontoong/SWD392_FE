import { Button, Col, Form, FormInstance, Row, Typography } from "antd";
import { CreateProject } from "../../../models/project";
import { CustomCard } from "../../ui/card";
import { FormInput } from "../../input/inputs";
import { IconButton } from "../../button/buttons";
import { FormSelect, SelectMultiple } from "../../select/select";
import { languages } from "../../../../constants/language";
import { skills } from "../../../../constants/skill";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { DefaultForm } from "../../form/form";
import { nations } from "../../../../constants/testData";

interface Props {
  formTitle: string;
  form: FormInstance<any>;
  initialValues: CreateProject;
}

export default function ProjectRequirementInfo({
  form,
  initialValues,
  formTitle,
}: Props) {
  const { Title } = Typography;

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
            {formTitle} (Năng lực)
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
                label="Số lượng project Candidate đã hoàn thành trên Wellancer"
                rules={[{}]}
              >
                <FormSelect options={Object.values(candidateProjectAmount)} />
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
                <FormSelect options={Object.values(candidateRating)} />
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
                <FormSelect options={Object.values(languages)} />
              </Form.Item>
            </Col>
            <Col span={10} offset={4}>
              <Form.Item
                name={["optionalRequirements", "nation"]}
                label="Địa điểm"
              >
                <FormSelect options={Object.values(nations)} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name={["optionalRequirements", "skills"]}
                label="Kỹ năng"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn kỹ năng",
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
                            name={[name]}
                            rules={[
                              {
                                required: true,
                                type: "string",
                                message: "Vui lòng nhập câu hỏi",
                                whitespace: true,
                              },
                            ]}
                          >
                            <FormInput maxLength={250} />
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
                    <Col span={18}>
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
                    </Col>
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

const candidateProjectAmount = [
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

const candidateRating = [
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
