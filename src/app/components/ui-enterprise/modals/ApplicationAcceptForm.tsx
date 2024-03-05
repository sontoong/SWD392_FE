import { EyeOutlined } from "@ant-design/icons";
import { IconButton } from "../../button/buttons";
import React, { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { Form, Typography } from "antd";
import { FormInput } from "../../input/inputs";
import { Applicant } from "../../../models/applicant";

interface ApplicationAcceptFormProp{
  record: Applicant
}

export default function ApplicationAcceptForm(props: ApplicationAcceptFormProp) {
  const {record}= props
  const [open, setOpen] = useState(false);
  const { Title, Paragraph } = Typography;
  const [form] = Form.useForm();

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmit = async (values: typeof props) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  return (
    <>
      <IconButton icon={<EyeOutlined />} onClick={() => setOpen(true)} />
      <CustomFormModal
        open={open}
        title={`Báo giá của ${record.name}`}
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
          name="ViewSignContract"
          initialValues={record}
        >
        {record.question.map((qna, index) => (
            <React.Fragment key={index}>
              <Title level={3}>{qna.question}</Title>
                <Paragraph>{qna.answer}</Paragraph>
            </React.Fragment>
        ))}

        <Title level={3}>
            Xem báo giá tại đây: 
        </Title>
        <Paragraph className="text-[#1890FF] underline">{record.file}</Paragraph>
        
        </Form>
      </CustomFormModal>
    </>
  );
}
