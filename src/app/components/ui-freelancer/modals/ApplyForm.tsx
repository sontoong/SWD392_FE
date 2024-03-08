import { PrimaryButton } from "../../button/buttons";
import { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { Col, Form, Row, Typography } from "antd";
import { FormTextArea } from "../../input/inputs";
import { DocumentUploadInput } from "../../input/upload-document-input";
import { Project } from "../../../models/project";
import DefaultForm from "../../form/form";

export default function ApplyForm({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const { Title, Paragraph } = Typography;

  const initialValues = project;

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <PrimaryButton onClick={() => setOpen(true)}>Gửi báo giá</PrimaryButton>
      <CustomFormModal
        open={open}
        title={`Báo giá`}
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
        <DefaultForm form={form} name="ApplyForm" initialValues={initialValues}>
          <Form.List name={["optionalRequirements", "questions"]}>
            {(fields) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Row key={key} style={{}}>
                    <Col span={18}>
                      <Title level={5}>
                        {form.getFieldValue([
                          "optionalRequirements",
                          "questions",
                          name,
                        ])}
                      </Title>
                      <Form.Item
                        {...restField}
                        name={[name, "answer"]}
                        rules={[
                          {
                            required: true,
                            type: "string",
                            message: "Vui lòng nhập câu trả lời",
                          },
                        ]}
                      >
                        <FormTextArea maxLength={200} />
                      </Form.Item>
                    </Col>
                  </Row>
                ))}
              </>
            )}
          </Form.List>
          <Row>
            <Title level={3}>Tải lên báo giá</Title>
            <DocumentUploadInput name="" />
            <Paragraph>* Định dạng tệp được chấp nhận: .jpg, .png</Paragraph>
            <Paragraph>* Kích thước tệp phải nhỏ hơn 4M</Paragraph>
          </Row>
        </DefaultForm>
      </CustomFormModal>
    </>
  );
}
