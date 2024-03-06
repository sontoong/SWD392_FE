import { useState } from "react";
import { Col, Form, Row, Space } from "antd";
import { EditButton } from "../../button/buttons";
import { FormInput, FormRadioGroup, FormTextArea } from "../../input/inputs";
import { CustomFormModal } from "../../modal/modal";
import { SelectFix } from "../../select/select";
import { nations } from "../../../../constants/testData";
import UploadProfilePicture from "../upload/profile-picture";
import { FreelancerDetail } from "../../../models/user";

export default function EditContact() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const initialValues: Pick<
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
  > = {
    firstName: "Nguyen",
    middleName: "Van",
    lastName: "A",
    desireSalary: 1000000,
    experienceLevel: "junior",
    description: "abc",
    nation: { label: "Việt Nam", value: "vn" },
    profilePicture: "",
    jobRole: "ceo",
  };

  const experienceLevels = [
    { label: "Mới đi làm", value: "junior" },
    { label: "Chuyên nghiệp", value: "senior" },
    { label: "Chuyên gia", value: "expert" },
  ];

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
        <Form
          form={form}
          layout="vertical"
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
            <UploadProfilePicture />
          </Form.Item>
          <Space>
            <Form.Item
              name="firstName"
              label="Họ"
              rules={[
                {
                  required: true,
                  type: "string",
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
                rules={[{ required: true, type: "string" }]}
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
            <SelectFix
              defaultValue="vn"
              onChange={() => {}}
              options={Object.values(nations)}
            />
          </Form.Item>
          <Form.Item name="experienceLevel" label="Cấp độ kinh nghiệm">
            <FormRadioGroup options={experienceLevels} />
          </Form.Item>
          <Form.Item
            name="description"
            label="Miêu tả"
            rules={[{ required: true, type: "string", max: 180 }]}
          >
            <FormTextArea maxLength={180} />
          </Form.Item>
        </Form>
      </CustomFormModal>
    </>
  );
}
