import { EditButton } from "../../button/buttons";
import { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { FormInput } from "../../input/inputs";
import { Col, Form, Row } from "antd";
import { CompanyDetail } from "../../../models/company";

export default function CompanyModalEditContact() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const initialValues: CompanyDetail = {
    companyName: "FPT Software",
    website: "http://domainexpansion.com",
    videoLink: "https://youtu.be/dQw4w9WgXcQ?si=kCbyzyW8_XaVT8-j",
    companySize: "10-20",
    introduction:
      "This is the place for cooking, like Gordon's grilled cheese sandwich.",
    industryFields: [
      { label: "IT", value: "it" },
      { label: "Nấu ăn", value: "cook" },
    ],
    enterpriseCountry: { label: "Việt Nam", value: "vn" },
    companyDocument: "FunnyMemeFrom9GAG.png",
    registrationDocumentType: "Giấy phép ĐKKD",
    identificationNumber: 333333333333333,
    companyCountry: "Việt Nam",
    taxNumber: 33333333333333,
    address: "Đường D1, Đ. D1, Phường Tân Phú, Quận 9, Hồ Chí Minh, Việt Nam",
    companyEmail: "CoolMathGame@gmail.com",
    companyPhone: "33333333333333",
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
        title="LIÊN HỆ"
        open={open}
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
          name="CompanyEditContact"
          initialValues={initialValues}
        >
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item
                name="companyEmail"
                label="Email"
                rules={[
                  {
                    type: "email",
                    required: true,
                  },
                ]}
              >
                <FormInput />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="companyPhone"
                label="SĐT"
                rules={[
                  {
                    required: true,
                    type: "string",
                    pattern: /^[0-9]+$/,
                    len: 11,
                  },
                ]}
              >
                <FormInput />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </CustomFormModal>
    </>
  );
}
