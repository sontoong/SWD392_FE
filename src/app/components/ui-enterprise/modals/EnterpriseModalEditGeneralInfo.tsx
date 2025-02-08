import { EditButton } from "../../button/buttons";
import { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { EnterpriseInfo } from "../../../models/enterprise";
import { FormDatePicker, FormInput } from "../../input/inputs";
import { Col, Form, Row } from "antd";
import { IdDocuments } from "../../../../constants/id-documents";
import { DocumentUploadInput } from "../../input/upload-document-input";
import { FormSelect } from "../../select/select";
import { enterpriseInfo, nations } from "../../../../constants/testData";
import { UploadImg } from "../../input/upload-img";
import { DefaultForm } from "../../form/form";

export default function EnterpriseModalEditGeneralInfo() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const initialValues: EnterpriseInfo = {
    ...enterpriseInfo,
  };

  return (
    <>
      <EditButton onClick={() => setOpen(true)} />
      <CustomFormModal
        title="NHÀ TUYỂN DỤNG"
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
          name="EnterpriseEditGeneralInfo"
          initialValues={initialValues}
        >
          <UploadImg listType="picture-circle" maxCount={1} />
          <Row>
            <Col span={6}>
              <Form.Item
                name="firstName"
                label="Họ"
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
            <Col span={6} offset={3}>
              <Form.Item
                name="middleName"
                label="Tên đệm"
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
            <Col span={6} offset={3}>
              <Form.Item
                name="lastName"
                label="Tên"
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
                name="dateOfBirth"
                label="Ngày sinh của bạn"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <FormDatePicker />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
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
            <Col span={6} offset={3}>
              <Form.Item
                name="documentType"
                label="Loại giấy tờ"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <FormSelect onChange={() => {}} options={IdDocuments} />
              </Form.Item>
            </Col>
            <Col span={6} offset={3}>
              <Form.Item
                name="documentNumber"
                label="Số tài liệu"
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
          <DocumentUploadInput name="enterpriseDocument" />
          <Row className="mb-[2rem]">
            <Col span={10}>
              <Form.Item
                name="enterpriseEmail"
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
            <Col span={10} offset={4}>
              <Form.Item
                name="enterprisePhone"
                label="SĐT"
                rules={[
                  {
                    type: "string",
                    required: true,
                    len: 11,
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
