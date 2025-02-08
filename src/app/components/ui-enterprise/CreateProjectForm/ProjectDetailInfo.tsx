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
import { FormRadioButtonGroup } from "../../input/inputs";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { DefaultForm } from "../../form/form";

interface Props {
  formTitle: string;
  form: FormInstance<any>;
  initialValues: CreateProject;
}

export default function ProjectDetailInfo({
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
            {formTitle} (Chi tiết)
          </Title>
        }
      >
        <DefaultForm
          form={form}
          name="ProjectDetailInfo"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={initialValues}
        >
          <Row>
            <Col span={24}>
              <Form.Item
                name="privacy"
                label="Ai có thể xem project này?"
                rules={[{}]}
              >
                <FormRadioButtonGroup options={projectPrivacy} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="projectType"
                label="Chọn loại hình project"
                rules={[{}]}
              >
                <FormRadioButtonGroup options={projectType} />
              </Form.Item>
            </Col>
          </Row>
        </DefaultForm>
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
        <div>Candidate</div>
        <p>Chỉ Candidate trên Wellancer</p>
      </div>
    ),
    value: "candidate",
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
