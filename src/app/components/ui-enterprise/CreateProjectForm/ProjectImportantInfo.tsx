import {
  CheckboxOptionType,
  Col,
  Divider,
  Form,
  FormInstance,
  Row,
  Typography,
} from "antd";
import { CreateProject } from "../../../models/project";
import { CustomCard } from "../../ui/card";
import {
  FormDatePicker,
  FormInput,
  FormRadioButtonGroup,
  FormRadioGroup,
  FormTextArea,
  InputNumberFix,
} from "../../input/inputs";
import { FormSelect, FormTreeSelect } from "../../select/select";
import { language } from "../../../../constants/language";
import { location } from "../../../../constants/location";
import { projectFields } from "../../../../constants/project-field";
import { useState } from "react";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import DefaultForm from "../../form/form";

export default function ProjectImportantInfo({
  form,
  initialValues,
}: {
  form: FormInstance<any>;
  initialValues: CreateProject;
}) {
  const { Title, Paragraph } = Typography;
  const fundValue = Form.useWatch(["contract", "fund"], form);

  const ContractDepositOptions: CheckboxOptionType<CheckboxValueType>[] = [
    {
      label: `Đặt cọc ${fundValue}VND cho toàn bộ công việc`,
      value: "full",
    },
    {
      label: "Đặt cọc theo từng hạng mục công việc",
      value: "period",
    },
  ];

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
                name="freelancerRequirement"
                label="Bạn cần tìm freelancer kinh nghiệm như thế nào?"
              >
                <FormRadioButtonGroup
                  options={projectFreelancerRequirementHourly}
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
                name="freelancerRequirement"
                label="Bạn cần tìm freelancer kinh nghiệm như thế nào?"
              >
                <FormRadioButtonGroup
                  options={projectFreelancerRequirementFixed}
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
                    whitespace: true,
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
                <FormSelect options={Object.values(language)} />
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
                <FormSelect options={Object.values(location)} />
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
                <FormTextArea maxLength={100} />
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Title level={3}>Hợp đồng</Title>
          <Row>
            <Col span={7}>
              <Form.Item
                name={["contract", "fund"]}
                label="Tổng ngân sách"
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
            <Col>
              <Form.Item
                name={["contract", "depositType"]}
                label="Chọn loại ngân sách"
                rules={[{}]}
              >
                <FormRadioGroup options={ContractDepositOptions} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={15}>
              <Form.Item
                name={["contract", "date"]}
                label="Ngày hoàn thành"
                rules={[
                  {
                    type: "number",
                    min: 1,
                    required: true,
                    message: "Vui lòng chọn ngày hoàn thành",
                  },
                ]}
                getValueFromEvent={(e: any) => e?.valueOf()}
              >
                <FormDatePicker />
              </Form.Item>
            </Col>
          </Row>
          <Divider />
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
