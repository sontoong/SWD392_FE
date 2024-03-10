import { useState } from "react";
import { Col, Form, Row, Space } from "antd";
import { EditButton } from "../../button/buttons";
import {
  FormInput,
  FormRadioButtonGroup,
  FormTextArea,
} from "../../input/inputs";
import { CustomFormModal } from "../../modal/modal";
import { FormSelect } from "../../select/select";
import { nations } from "../../../../constants/testData";
import { UploadProfileImage } from "../upload";
import { FreelancerDetail } from "../../../models/user";
import { DefaultForm } from "../../form/form";

interface EditOverviewProps {
  overview?: Pick<
    FreelancerDetail,
    | "firstName"
    | "middleName"
    | "lastName"
    | "desireSalary"
    | "nation"
    | "experienceLevel"
    | "description"
    | "profilePicture"
    | "jobRole"
  >;
}
export default function EditContact(props: EditOverviewProps) {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const initialValues: EditOverviewProps["overview"] = props.overview ?? {
    firstName: "",
    middleName: "",
    lastName: "",
    desireSalary: 0,
    experienceLevel: "junior",
    description: "",
    nation: "vn",
    profilePicture: "",
    jobRole: "",
  };

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <EditButton onClick={() => setOpen(true)} />
      <CustomFormModal
        open={open}
        title="Tổng quan"
        onCancel={() => {
          handleCancel();
          form.resetFields();
        }}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              handleSubmit(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <DefaultForm
          form={form}
          name="EditOverview"
          initialValues={initialValues}
        >
          <Form.Item
            name="profilePicture"
            label="Ảnh đại diện"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <UploadProfileImage />
          </Form.Item>
          <Space>
            <Form.Item
              name="firstName"
              label="Họ"
              rules={[
                {
                  required: true,
                  type: "string",
                  whitespace: true,
                },
              ]}
            >
              <FormInput />
            </Form.Item>
            <Form.Item
              name="middleName"
              label="Tên đệm"
              rules={[
                {
                  required: true,
                  type: "string",
                  whitespace: true,
                },
              ]}
            >
              <FormInput />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Tên"
              rules={[
                {
                  required: true,
                  type: "string",
                  whitespace: true,
                },
              ]}
            >
              <FormInput />
            </Form.Item>
          </Space>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item
                name="jobRole"
                label="Chức danh"
                rules={[{ required: true, type: "string", whitespace: true }]}
              >
                <FormInput />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="desireSalary"
                label="Chi phí/giờ"
                rules={[
                  {
                    required: true,
                    type: "number",
                  },
                ]}
              >
                <FormInput />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="nation" label="Quốc gia">
            <FormSelect options={Object.values(nations)} />
          </Form.Item>
          <Form.Item name="experienceLevel" label="Cấp độ kinh nghiệm">
            <FormRadioButtonGroup options={experienceLevels} />
          </Form.Item>
          <Form.Item
            name="description"
            label="Miêu tả"
            rules={[
              { required: true, type: "string", max: 180, whitespace: true },
            ]}
          >
            <FormTextArea maxLength={180} />
          </Form.Item>
        </DefaultForm>
      </CustomFormModal>
    </>
  );
}

const experienceLevels = [
  { label: "Mới đi làm", value: "junior" },
  { label: "Chuyên nghiệp", value: "senior" },
  { label: "Chuyên gia", value: "expert" },
];
