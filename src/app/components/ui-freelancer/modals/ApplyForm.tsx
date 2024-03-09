import { PrimaryButton } from "../../button/buttons";
import { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { Col, Form, Row, Typography } from "antd";
import {
  InputNumberFix,
  FormTextArea,
  InputNumberTimeFix,
} from "../../input/inputs";
import { Applicant } from "../../../models/applicant";

export default function ApplyForm() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const { Title } = Typography;

  const initialValues: Applicant = {
    id: "",
    name: "",
    date: 0,
    money: 0,
    time: 0,
    projectId: "",
    questions: [
      {
        question: "Câu 1",
        answer: "",
      },
      {
        question: "Câu 2",
        answer: "",
      },
      {
        question: "Câu 3",
        answer: "",
      },
    ],
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
          <Form.List name={["questions"]}>
            {(fields) => (
              <>
                {fields.map(({ key, name, ...restField }, index) => (
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
                          {initialValues.questions[index].question}
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
            <Form.Item
              name="money"
              label="Số tiền bạn muốn nhận"
              rules={[
                {
                  type: "string",
                  required: true,
                },
              ]}
            >
              <InputNumberFix />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item
              name="time"
              label="Số giờ để bạn hoàn thành công việc"
              
              rules={[
                {
                  type: "string",
                  required: true,
                },
              ]}
            >
              <InputNumberTimeFix />
            </Form.Item>
          </Row>
        </Form>
      </CustomFormModal>
    </>
  );
}
