import { EyeOutlined } from "@ant-design/icons";
import { IconButton } from "../../button/buttons";
import { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { Form, Typography } from "antd";
import { FreelancerProjectContractForm } from "../../../../constants/testData";
import { FormInput } from "../../input/inputs";

export default function ViewSignContract(){
    const [open, setOpen] = useState(false);
    const { Title, Paragraph } = Typography;
    const [form] = Form.useForm();

    const isStatusWorkingOrStopped = FreelancerProjectContractForm?.status === "doing" || FreelancerProjectContractForm?.status === "stopped";

    const handleCancel = () => {
        setOpen(false);
    };

    const handleSubmit = async (values: typeof FreelancerProjectContractForm) => {
        console.log("Received values of form: ", values);
        setOpen(false);
    };

    return(
        <>
            <IconButton icon={<EyeOutlined/>} onClick={() => setOpen(true)}/>
            <CustomFormModal
                open={open}
                title="Ký hợp đồng"
                onCancel={() => {
                    handleCancel();
                    form.resetFields()
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
                initialValues={FreelancerProjectContractForm}
            >
                <Title level={4}>Tải hợp đồng tại đây</Title>
                <Paragraph className="text-[#1890FF] underline">{FreelancerProjectContractForm?.contract}</Paragraph>
                <Paragraph className="">Lưu ý:</Paragraph>
                <Paragraph>Hãy xem rõ hợp đồng trước khi ký kết, website này sẽ không chịu trách nhiệm khi hợp đồng đã ký</Paragraph>
                <Form.Item
                    name="signature"
                    label="Ký tên"
                    rules={[
                {
                    type:"string",
                    required: true,
                },
                ]}
                >
                <FormInput value={FreelancerProjectContractForm?.signature} disabled={isStatusWorkingOrStopped}/>
                </Form.Item>
            </Form>
            </CustomFormModal>
        </>
    );
}