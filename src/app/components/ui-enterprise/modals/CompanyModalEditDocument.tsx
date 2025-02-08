import { EditButton } from "../../button/buttons";
import { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { FormInput } from "../../input/inputs";
import { Col, Form, Row, Typography } from "antd";
import { CompanyDetail } from "../../../models/company";
import { companyDocument } from "../../../../constants/company-doc";
import { DocumentUploadInput } from "../../input/upload-document-input";

import { FormSelect } from "../../select/select";
import { companyDetail, nations } from "../../../../constants/testData";
import { DefaultForm } from "../../form/form";

export default function CompanyModalEditDocument() {
  const { Title, Paragraph } = Typography;
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
    ...companyDetail,
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
        <DefaultForm
          form={form}
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
                <FormSelect onChange={() => {}} options={companyDocument} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Title level={3}>Giấy tờ</Title>
              <DocumentUploadInput name="enterpriseDocument" />
              <Paragraph>* Định dạng tệp được chấp nhận: .jpg, .png</Paragraph>
              <Paragraph>* Kích thước tệp phải nhỏ hơn 4M</Paragraph>
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
                <FormSelect
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
                label="Địa chỉ công ty"
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
        </DefaultForm>
      </CustomFormModal>
    </>
  );
}
