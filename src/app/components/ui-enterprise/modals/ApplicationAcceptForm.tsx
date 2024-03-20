import { EyeOutlined } from "@ant-design/icons";
import { IconButton } from "../../button/buttons";
import React, { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { CheckboxOptionType, Col, Divider, Form, Row, Typography } from "antd";
import { Applicant } from "../../../models/applicant";
import { DefaultForm } from "../../form/form";
import {
  FormDatePicker,
  FormRadioGroup,
  InputNumberFix,
} from "../../input/inputs";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { Contract } from "../../../models/project";

interface ApplicationAcceptFormProp {
  record: Applicant;
}

export default function ApplicationAcceptForm(
  props: ApplicationAcceptFormProp,
) {
  const { record } = props;
  const [open, setOpen] = useState(false);
  const { Title, Paragraph } = Typography;
  const [form] = Form.useForm();
  const fundValue = Form.useWatch(["contract", "fund"], form);

  const initialValues: {
    contract: Pick<
      Contract,
      "fund" | "projectId" | "candidateId" | "date" | "depositType"
    >;
  } = {
    contract: {
      candidateId: "",
      projectId: "",
      date: 0,
      depositType: "full",
      fund: 0,
    },
  };

  const ContractDepositOptions: CheckboxOptionType<CheckboxValueType>[] = [
    {
      label: `Đặt cọc ${fundValue}VND cho toàn bộ công việc`,
      value: "full",
    },
    {
      label: "Đặt cọc theo từng hạng mục công việc",
      value: "period",
    },
  ];

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
        title={`Báo giá của ${record.candidateName}`}
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
          name="ApplicationAcceptForm"
          initialValues={initialValues}
        >
          {record.questions &&
            record.questions.map((qna, index) => (
              <React.Fragment key={index}>
                <Title level={3}>{qna.question}</Title>
                <Paragraph>{qna.answer}</Paragraph>
                <Paragraph>{qna.answer}</Paragraph>
              </React.Fragment>
            ))}
          <Title level={3}>Báo giá:</Title>
          <Paragraph>{record.money}VND</Paragraph>
          <Title level={3}>Thời gian ước tính:</Title>
          <Paragraph>{record.time} giờ</Paragraph>
          <Divider />
          <Title level={3}>Hợp đồng</Title>
          <Row>
            <Col span={7}>
              <Form.Item
                name={["contract", "fund"]}
                label="Tổng ngân sách"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tổng ngân sách",
                  },
                  {
                    type: "number",
                    min: 1000,
                  },
                ]}
              >
                <InputNumberFix suffix={"VND"} step={1000} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item
                name={["contract", "depositType"]}
                label="Chọn loại ngân sách"
                rules={[{}]}
              >
                <FormRadioGroup options={ContractDepositOptions} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={15}>
              <Form.Item
                name={["contract", "date"]}
                label="Ngày hoàn thành"
                rules={[
                  {
                    type: "number",
                    min: 1,
                    required: true,
                    message: "Vui lòng chọn ngày hoàn thành",
                  },
                ]}
                getValueFromEvent={(e: any) => e?.valueOf()}
              >
                <FormDatePicker />
              </Form.Item>
            </Col>
          </Row>
        </DefaultForm>
      </CustomFormModal>
    </>
  );
}
