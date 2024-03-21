import { Button, Form } from "antd";
import { CustomFormModal } from "../../modal/modal";
import { useState } from "react";
import { Paying } from "../../../models/paying";
import { DollarCircleOutlined } from "@ant-design/icons";
import { DefaultForm } from "../../form/form";
import { InputNumberFix } from "../../input/inputs";
import RatingCandidateModal from "./RatingCandidateModal";

export default function PayCandidateModal({ title }: { title: string }) {
  // Accept title prop
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [open2, setOpen2] = useState(false);

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Received values of form: ", values);
    setOpen(false);
    setOpen2(true);
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
          name="PayCandidate"
          initialValues={initialValues}
        >
          <Form.Item
            name="payingAmount"
            label="Số tiền"
            rules={[
              {
                type: "number",
                min: 1000,
                required: true,
              },
            ]}
          >
            <InputNumberFix suffix={"VND"} step={1000} />
          </Form.Item>
        </DefaultForm>
      </CustomFormModal>
      <RatingCandidateModal money={300000} open={open2} setOpen={setOpen2} />
    </>
  );
}
