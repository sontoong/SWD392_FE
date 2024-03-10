import { Button, Form } from "antd";
import { CustomFormModal } from "../../modal/modal";
import { useState } from "react";
import { Paying } from "../../../models/paying";
import { DollarCircleOutlined } from "@ant-design/icons";
import { DefaultForm } from "../../form/form";
import { InputNumberFix } from "../../input/inputs";

export default function PayFreelancerModal({ title }: { title: string }) {
  // Accept title prop
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const initialValues: Paying = {
    payingAmount: 0,
  };

  return (
    <>
      <Button
        icon={<DollarCircleOutlined />}
        onClick={() => setOpen(true)}
        className="ml-auto"
      >
        Gửi tiền
      </Button>
      <CustomFormModal
        title={`CHUYỂN TIỀN CHO ${title}`}
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
          name="PayFreelancer"
          initialValues={initialValues}
        >
          <Form.Item
            name="payingAmount"
            label="Số tiền"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumberFix suffix={"VND"} step={1000} />
          </Form.Item>
        </DefaultForm>
      </CustomFormModal>
    </>
  );
}
