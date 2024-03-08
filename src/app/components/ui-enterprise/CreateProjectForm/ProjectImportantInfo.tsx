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
  FormRadioGroup,
  FormTextArea,
  InputNumberFix,
} from "../../input/inputs";
import { FormSelect, FormTreeSelect } from "../../select/select";
import { language } from "../../../../constants/language";
import { DocumentUploadInput } from "../../input/upload-document-input";
import { location } from "../../../../constants/location";
import { projectFields } from "../../../../constants/project-field";
import { useState } from "react";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import DefaultForm from "../../form/form";

export default function ProjectImportantInfo({
  form,
}: {
  form: FormInstance<any>;
}) {
  const { Title, Paragraph } = Typography;

  const initialValues: CreateProject = {
    title: "",
    language: "vn",
    projectField: "",
    description: "",
    contract: "",
    funding: "hourly",
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

  const [renderFunding, setRenderFunding] = useState<string>(
    initialValues.funding,
  );

  const renderContentBasedOnFundingType = () => {
    switch (renderFunding) {
      case "hourly":
        return (
          <>
            <Row>
              <Form.Item
                name="freelancerRequirement"
                label="Bạn cần tìm freelancer kinh nghiệm như thế nào?"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <FormRadioGroup options={projectFreelancerRequirementHourly} />
              </Form.Item>
            </Row>
            <Row>
              <Form.Item
                name="timeToComplete"
                label="Project của bạn dự kiến kéo dài bao lâu?"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <FormRadioGroup options={ProjectTimeToComplete} />
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
                  <InputNumberFix />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Form.Item
                name="freelancerRequirement"
                label="Bạn cần tìm freelancer kinh nghiệm như thế nào?"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <FormRadioGroup options={projectFreelancerRequirementFixed} />
              </Form.Item>
            </Row>
          </>
        );
      default:
        return null;
    }
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
            Tạo Project
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
                  },
                ]}
              >
                <FormInput />
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
                name={["optionalRequirements", "location"]}
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
                  },
                ]}
              >
                <FormTextArea maxLength={100} />
              </Form.Item>
            </Col>
          </Row>
          <Title level={3}>Tải lên hợp đồng</Title>
          <DocumentUploadInput name="contract" />
          <Paragraph>* Định dạng tệp được chấp nhận: .jpg, .png</Paragraph>
          <Paragraph>* Kích thước tệp phải nhỏ hơn 4M</Paragraph>
          <Row>
            <Form.Item
              name="funding"
              label="Chọn loại ngân sách"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <FormRadioGroup
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
    value: 1,
  },
  {
    label: "1-3 tháng",
    value: 2,
  },
  {
    label: "3 tháng",
    value: 3,
  },
];

const projectFreelancerRequirementFixed: CheckboxOptionType<CheckboxValueType>[] =
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

const projectFreelancerRequirementHourly: CheckboxOptionType<CheckboxValueType>[] =
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
