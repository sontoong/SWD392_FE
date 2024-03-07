import {
  CheckboxOptionType,
  Col,
  Form,
  FormInstance,
  Row,
  Typography,
} from "antd";
import { CreateProject } from "../../../models/project";
import { CustomCard } from "../../ui/card";
import { FormRadioGroup } from "../../input/inputs";
import { OutlineButton, PrimaryButton } from "../../button/buttons";
import { CheckboxValueType } from "antd/es/checkbox/Group";

export default function ProjectDetailInfo({
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
      questions: [],
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
            Tạo Project (Chi tiết)
          </Title>
        }
      >
        <Form
          form={form}
          layout="vertical"
          name="ProjectDetailInfo"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            ...initialValues,
          }}
        >
          <Row className="mt-[5%]">
            <Col span={24}>
              <Form.Item
                name="privacy"
                label="Ai có thể xem project này?"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <FormRadioGroup options={projectPrivacy} />
              </Form.Item>
            </Col>
          </Row>
          <Row className="mt-[5%]">
            <Col span={24}>
              <Form.Item
                name="projectType"
                label="Chọn loại hình project"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <FormRadioGroup options={projectType} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={10} justify={"end"}>
            <Form.Item wrapperCol={{ span: 5 }}>
              <PrimaryButton htmlType="submit">Tiếp tục</PrimaryButton>
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

const projectType: CheckboxOptionType<CheckboxValueType>[] = [
  {
    label: "Tôi chưa biết",
    value: "unknown",
  },
  {
    label: "Dài hạn",
    value: "longterm",
  },
  {
    label: "Ngắn hạn",
    value: "shortterm",
  },
];

const projectPrivacy: CheckboxOptionType<CheckboxValueType>[] = [
  {
    label: (
      <div>
        <div>Công khai</div>
        <div>Tất cả đều xem được</div>
      </div>
    ),
    value: "public",
  },
  {
    label: (
      <div>
        <div>Freelancer</div>
        <p>Chỉ Freelancer trên Wellancer</p>
      </div>
    ),
    value: "freelancer",
  },
  {
    label: (
      <div>
        <div>Riêng tư</div>
        <div>Chỉ những người được mời</div>
      </div>
    ),
    value: "private",
  },
];
