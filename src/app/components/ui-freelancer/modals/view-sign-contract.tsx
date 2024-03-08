import { EyeOutlined } from "@ant-design/icons";
import { IconButton } from "../../button/buttons";
import { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { Form, Typography } from "antd";
import { FormInput } from "../../input/inputs";
import { FreelancerProject } from "../../../models/project";
import DefaultForm from "../../form/form";

interface ViewSignContractProp {
  record: FreelancerProject;
}
export default function ViewSignContract(props: ViewSignContractProp) {
  const { record } = props;
  const [open, setOpen] = useState(false);
  const { Title, Paragraph } = Typography;
  const [form] = Form.useForm();

  const isStatusWorkingOrStopped =
    record?.status === "doing" || record?.status === "stopped";

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
        title="Ký hợp đồng"
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
        <DefaultForm form={form} name="ViewSignContract" initialValues={record}>
          <Title level={4}>Tải hợp đồng tại đây</Title>
          <Paragraph className="text-[#1890FF] underline">
            {record?.contract}
          </Paragraph>
          <Paragraph className="">Lưu ý:</Paragraph>
          <Paragraph>
            Hãy xem rõ hợp đồng trước khi ký kết, website này sẽ không chịu
            trách nhiệm khi hợp đồng đã ký
          </Paragraph>
          <Form.Item
            name="signature"
            label="Ký tên"
            rules={[
              {
                type: "string",
                required: true,
              },
            ]}
          >
            <FormInput
              value={record?.signature}
              disabled={isStatusWorkingOrStopped}
            />
          </Form.Item>
        </DefaultForm>
      </CustomFormModal>
    </>
  );
}
