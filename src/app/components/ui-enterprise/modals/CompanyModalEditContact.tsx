import { EditButton } from "../../button/buttons";
import { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { FormInput } from "../../input/inputs";
import { Col, Form, Row } from "antd";
import { CompanyDetail } from "../../../models/company";
import { DefaultForm } from "../../form/form";
import { companyDetail } from "../../../../constants/testData";

export default function CompanyModalEditContact() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const initialValues: CompanyDetail = {
    ...companyDetail,
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
        <DefaultForm
          form={form}
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
        </DefaultForm>
      </CustomFormModal>
    </>
  );
}
