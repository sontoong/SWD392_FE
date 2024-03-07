import { PrimaryButton } from "../../button/buttons";
import { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { Col, Form, Row, Typography } from "antd";
import { project } from "../../../../constants/testData";
import { FormTextArea } from "../../input/inputs";
import { DocumentUploadInput } from "../../input/upload-document-input";

export default function ApplyForm() {
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
        <Form
          form={form}
          layout="vertical"
          name="ApplyForm"
          initialValues={initialValues}
        >
          <Form.List name={["optionalRequirements", "questions"]}>
            {(fields) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Row
                    key={key}
                    style={{
                      marginTop: 8,
                      marginBottom: 8,
                    }}
                  >
                    <Col span={18}>
                      <Form.Item>
                        <Title level={5}>
                          {form.getFieldValue([
                            "optionalRequirements",
                            "questions",
                            name,
                          ])}
                        </Title>
                        {/* <FormInput/> */}
                      </Form.Item>
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
        </Form>
      </CustomFormModal>
    </>
  );
}
