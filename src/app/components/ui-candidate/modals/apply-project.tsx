import { PrimaryButton } from "../../button/buttons";
import { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { App, Col, Form, Row, Typography } from "antd";
import { InputNumberFix, FormTextArea } from "../../input/inputs";
import { Applicant } from "../../../models/applicant";
import { Project } from "../../../models/project";
import { DefaultForm } from "../../form/form";
import { useAppDispatch } from "../../../redux/hook";
import { createApplication } from "../../../redux/slice/applicationSlice";
import { useParams } from "react-router-dom";

const { Title } = Typography;

export default function ApplyForm({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { message } = App.useApp();
  const { projectId } = useParams();

  const initialValues: Applicant = {
    id: 0,
    date: 0,
    money: 0,
    time: 0,
    candidateId: 0,
    projectId: 0,
    questions:
      project.optionalRequirements &&
      project.optionalRequirements.questions?.map((question) => ({
        question: question,
        answer: "",
      })),
  };

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Received values of form: ", values);
    const { money, time, questions } = values;
    async function create() {
      if (projectId) {
        const parseProjectId = Number(projectId);
        const res = await dispatch(
          createApplication({
            projectId: parseProjectId,
            money,
            time,
            questions,
          }),
        ).unwrap();
        if (res) {
          message.success("Processing complete!");
          setOpen(false);
        }
      }
    }
    create();
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
              form.resetFields();
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
                  min: 1,
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
