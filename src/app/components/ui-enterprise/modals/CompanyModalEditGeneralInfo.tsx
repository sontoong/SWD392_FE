import { EditButton } from "../../button/buttons";
import { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { FormInput, FormTextArea } from "../../input/inputs";
import { Col, Form, Row } from "antd";
import { IdDocuments } from "../../../../constants/id-documents";
import { CompanyDetail } from "../../../models/company";
import { FormSelect, SelectMultiple } from "../../select/select";
import { UploadImg } from "../../input/upload-img";
import { fields } from "../../../../constants/testData";

export default function CompanyModalEditGeneralInfo() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

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

  return (
    <>
      <EditButton onClick={() => setOpen(true)} />
      <CustomFormModal
        title="THÔNG TIN CHUNG"
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
          name="CompanyEditGeneralInfo"
          initialValues={initialValues}
        >
          <UploadImg listType="picture-circle" maxCount={1} />
          <UploadImg listType="picture-card" maxCount={1} />
          <Row>
            <Col span={10}>
              <Form.Item
                name="companyName"
                label="Tên công ty"
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
            <Col span={10} offset={4}>
              <Form.Item
                name="companySize"
                label="Qui mô công ty"
                rules={[
                  {
                    type: "string",
                    required: true,
                  },
                ]}
              >
                <FormSelect
                  defaultValue="passport"
                  onChange={() => {}}
                  options={IdDocuments}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="website"
                label="Trang công ty"
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
            <Col span={24}>
              <Form.Item
                name="videoLink"
                label="Video công ty"
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
            <Col span={24}>
              <Form.Item
                name="introduction"
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
          <Row>
            <Col span={24}>
              <Form.Item
                name="industryFields"
                label="Ngành nghề"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <SelectMultiple
                  options={fields}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </CustomFormModal>
    </>
  );
}
