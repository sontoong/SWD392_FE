import { EyeOutlined } from "@ant-design/icons";
import { IconButton } from "../../button/buttons";
import { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { Col, Form, Row, Space, Typography } from "antd";
import { FormInput } from "../../input/inputs";
import { FreelancerProject } from "../../../models/project";
import { DefaultForm } from "../../form/form";
import { generateDepositType } from "../../../utils/generators";
import { formatUnixToLocal } from "../../../utils/utils";
import { contract } from "../../../../constants/testData";

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
          <Title level={4}>Hợp đồng</Title>
          <Space size="large" direction="vertical">
            <Row>
              <Col span={5}>
                <Title level={5}>Ngân sách</Title>
                <Paragraph>{contract.fund} VND</Paragraph>
              </Col>
              <Col span={7} offset={8}>
                <Title level={5}>Ngày hoàn thành</Title>
                <Paragraph>{formatUnixToLocal(contract.date)}</Paragraph>
              </Col>
            </Row>
            <Row>
              <Col>
                <Title level={5}>Đặt cọc</Title>
                {generateDepositType(
                  contract.depositType,
                  contract.fund,
                )}
              </Col>
            </Row>
            <Row>
              <Title level={5}>Lưu ý:</Title>
              <Paragraph className="text-[.75rem]">
                Hãy xem rõ hợp đồng trước khi ký kết, website này sẽ không chịu
                trách nhiệm khi hợp đồng đã ký
              </Paragraph>
            </Row>
            <Row>
              <Form.Item
                name="signature"
                label="Ký tên"
                rules={[
                  {
                    type: "string",
                    required: true,
                    whitespace: true,
                  },
                ]}
              >
                <FormInput
                  value={record?.signature}
                  disabled={isStatusWorkingOrStopped}
                />
              </Form.Item>
            </Row>
          </Space>
        </DefaultForm>
      </CustomFormModal>
    </>
  );
}
