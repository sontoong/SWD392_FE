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
import {
  FormInput,
  FormRadioButtonGroup,
  FormTextArea,
  InputNumberFix,
} from "../../input/inputs";
import { FormTreeSelect } from "../../select/select";
import { projectFields } from "../../../../constants/project-field";
import { useState } from "react";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { DefaultForm } from "../../form/form";

interface Props {
  formTitle: string;
  form: FormInstance<any>;
  initialValues: CreateProject;
}

export default function ProjectImportantInfo({
  form,
  initialValues,
  formTitle,
}: Props) {
  const { Title, Paragraph } = Typography;

  const [renderFunding, setRenderFunding] = useState<string>(
    initialValues.funding,
  );

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const renderContentBasedOnFundingType = () => {
    switch (renderFunding) {
      case "hourly":
        return (
          <>
            <Row>
              <Form.Item
                name="candidateRequirement"
                label="Bạn cần tìm candidate kinh nghiệm như thế nào?"
              >
                <FormRadioButtonGroup
                  options={projectCandidateRequirementHourly}
                />
              </Form.Item>
            </Row>
            <Row>
              <Form.Item
                name="timeToComplete"
                label="Project của bạn dự kiến kéo dài bao lâu?"
              >
                <FormRadioButtonGroup options={ProjectTimeToComplete} />
              </Form.Item>
            </Row>
          </>
        );
      case "fixed":
        return (
          <>
            <Row>
              <Col span={7}>
                <Form.Item
                  name="initialFunding"
                  label="Số tiền"
                  rules={[
                    {
                      type: "number",
                      min: 1000,
                      required: true,
                    },
                  ]}
                >
                  <InputNumberFix suffix={"VND"} step={1000} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Form.Item
                name="candidateRequirement"
                label="Bạn cần tìm candidate kinh nghiệm như thế nào?"
              >
                <FormRadioButtonGroup
                  options={projectCandidateRequirementFixed}
                />
              </Form.Item>
            </Row>
          </>
        );
      default:
        return null;
    }
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
            {formTitle}
          </Title>
        }
      >
        <DefaultForm
          form={form}
          name="ProjectImportantInfo"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={initialValues}
        >
          <Row>
            <Col span={24}>
              <Form.Item
                name="title"
                label="Tên Project"
                rules={[
                  {
                    type: "string",
                    required: true,
                    whitespace: true,
                  },
                ]}
              >
                <FormInput />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="projectField"
                label="Lĩnh vực ngành"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <FormTreeSelect treeData={Object.values(projectFields)} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Paragraph>Gợi ý thông tin mô tả</Paragraph>
              <Paragraph>1/ Bạn cần làm project gì?</Paragraph>
              <Paragraph>
                2/ Mô tả cụ thể yêu cầu cho project mà bạn cần làm
              </Paragraph>
              <Paragraph>
                3/ Thông tin về thời gian hoàn thành hoặc các thông tin khác
              </Paragraph>
              <Form.Item
                name="description"
                label="Miêu tả"
                rules={[
                  {
                    type: "string",
                    required: true,
                    whitespace: true,
                  },
                ]}
              >
                <FormTextArea maxLength={250} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Form.Item name="funding" label="Chọn loại ngân sách" rules={[{}]}>
              <FormRadioButtonGroup
                options={ProjectFundingTypes}
                onChange={(e) => setRenderFunding(e.target.value)}
              />
            </Form.Item>
          </Row>

          {renderContentBasedOnFundingType()}
        </DefaultForm>
      </CustomCard>
    </>
  );
}

const ProjectFundingTypes: CheckboxOptionType<CheckboxValueType>[] = [
  {
    label: "Tính theo giờ",
    value: "hourly",
  },
  {
    label: "Tính theo dự án",
    value: "fixed",
  },
];

const ProjectTimeToComplete: CheckboxOptionType<CheckboxValueType>[] = [
  {
    label: "Ít hơn 1 tháng",
    value: "<1 month",
  },
  {
    label: "1-3 tháng",
    value: "1-3 months",
  },
  {
    label: "3 tháng",
    value: ">3 months",
  },
];

const projectCandidateRequirementFixed: CheckboxOptionType<CheckboxValueType>[] =
  [
    {
      label: "Mới đi làm",
      value: "junior",
    },
    {
      label: "Chuyên nghiệp",
      value: "senior",
    },
    {
      label: "Chuyên gia",
      value: "expert",
    },
  ];

const projectCandidateRequirementHourly: CheckboxOptionType<CheckboxValueType>[] =
  [
    {
      label: (
        <div>
          <div>Mới đi làm</div>
          <div>Dưới 100,000VND/giờ</div>
        </div>
      ),
      value: "junior",
    },
    {
      label: (
        <div>
          <div>Chuyên nghiệp</div>
          <p>100,000VND - 500,000VND/giờ</p>
        </div>
      ),
      value: "senior",
    },
    {
      label: (
        <div>
          <div>Chuyên gia</div>
          <div>Trên 500,000/giờ</div>
        </div>
      ),
      value: "expert",
    },
  ];
