import { PrimaryButton } from "../../button/buttons";
import { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { Col, Form, Row, Typography } from "antd";
import { InputNumberFix, FormTextArea } from "../../input/inputs";
import { Applicant } from "../../../models/applicant";
import { Project } from "../../../models/project";
import { DefaultForm } from "../../form/form";

export default function ApplyForm({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const { Title } = Typography;

  const initialValues: Applicant = {
    id: "",
    candidateName: "",
    candidateId: "",
    date: 0,
    money: 0,
    time: 0,
    projectId: "",
    questions: project.optionalRequirements.questions?.map((question) => ({
      question: question,
      answer: "",
    })),
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
        <DefaultForm form={form} name="ApplyForm" initialValues={initialValues}>
          <Form.List name={"questions"}>
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
                      <Title level={5}>
                        {form.getFieldValue(["questions", name, "question"])}
                      </Title>
                      <Form.Item
                        {...restField}
                        name={[name, "answer"]}
                        rules={[
                          {
                            required: true,
                            type: "string",
                            message: "Vui lòng nhập câu trả lời",
                            whitespace: true,
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
                  required: true,
                  message: "Vui lòng nhập số tiền",
                },
                {
                  type: "number",
                  min: 1000,
                },
              ]}
            >
              <InputNumberFix suffix={"VND"} step={1000} />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item
              name="time"
              label="Số giờ để bạn hoàn thành công việc"
              rules={[
                { required: true, message: "Vui lòng nhập số giờ" },
                {
                  type: "number",
                  min: 0,
                },
              ]}
              wrapperCol={{ span: 12 }}
            >
              <InputNumberFix suffix={"giờ"} step={1} />
            </Form.Item>
          </Row>
        </DefaultForm>
      </CustomFormModal>
    </>
  );
}
