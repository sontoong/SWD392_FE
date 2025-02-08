import { EyeOutlined } from "@ant-design/icons";
import { IconButton, OutlineButton } from "../../button/buttons";
import { useState } from "react";
import { Col, Form, Modal, Row, Space, Typography } from "antd";
import { Contract } from "../../../models/project";
import { DefaultForm } from "../../form/form";
import { generateDepositType } from "../../../utils/generators";
import { formatUnixToLocal } from "../../../utils/utils";
import { contract } from "../../../../constants/testData";

interface ViewContractHistoryProps {
  record?: Contract;
}
export function ViewContractHistory(props: ViewContractHistoryProps) {
  //   const { record } = props;
  const record = contract;
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
      <Modal
        open={open}
        title={<Title level={4}>Hợp đồng</Title>}
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
        footer={[
          <OutlineButton key="cancel" onClick={() => handleCancel()}>
            Đóng
          </OutlineButton>,
        ]}
      >
        <DefaultForm form={form} name="ViewSignContract" initialValues={record}>
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
                {generateDepositType(contract.depositType, contract.fund)}
              </Col>
            </Row>
            <Row>
              <Title level={5}>Lưu ý:</Title>
              <Paragraph className="text-[.75rem]">
                Hãy xem rõ hợp đồng trước khi ký kết, website này sẽ không chịu
                trách nhiệm khi hợp đồng đã ký
              </Paragraph>
            </Row>
            {/* <Row>
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
            </Row> */}
          </Space>
        </DefaultForm>
      </Modal>
    </>
  );
}
