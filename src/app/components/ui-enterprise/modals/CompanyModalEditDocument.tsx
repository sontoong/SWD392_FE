import { EditButton } from "../../button/buttons";
import { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { FormInput } from "../../input/inputs";
import { Col, Form, Row } from "antd";
import { CompanyDetail } from "../../../models/company";
import { companyDocument } from "../../../../constants/company-doc";
import { DocumentUploadInput } from "../../input/upload-document-input";

import { SelectFix } from "../../select/select";
import { nations } from "../../../../constants/testData";

export default function CompanyModalEditDocument() {
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
      {
        label: "name",
        value: "name",
        skills: [
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
        ],
      },
      {
        label: "name",
        value: "name",
        skills: [
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
        ],
      },
    ],
    companyDocument: "FunnyMemeFrom9GAG.png",
    enterpriseCountry: { label: "Việt Nam", value: "vn" },
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
        title="ĐỊA CHỈ VÀ GIẤY TỜ"
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
          name="CompanyEditDocument"
          initialValues={initialValues}
        >
          <Row>
            <Col span={10}>
              <Form.Item
                name="registrationDocumentType"
                label="Loại giấy tờ"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <SelectFix
                  defaultValue="DKKD"
                  onChange={() => {}}
                  options={companyDocument}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DocumentUploadInput name="enterpriseDocument" />
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <Form.Item
                name="identificationNumber"
                label="Mã số doanh nghiệp"
                rules={[
                  {
                    type: "number",
                    required: true,
                  },
                ]}
              >
                <FormInput />
              </Form.Item>
            </Col>
            <Col span={10} offset={4}>
              <Form.Item
                name="taxNumber"
                label="Mã số thuế"
                rules={[
                  {
                    type: "number",
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
                name="enterpriseCountry"
                label="Quốc gia"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <SelectFix
                  defaultValue={"VN"}
                  onChange={() => {}}
                  options={Object.values(nations)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="address"
                label="Địa chỉ công ti"
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
        </Form>
      </CustomFormModal>
    </>
  );
}
