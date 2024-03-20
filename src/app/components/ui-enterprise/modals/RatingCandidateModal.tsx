import { useState } from "react";
import { CustomFormModal } from "../../modal/modal";
import { Avatar, Col, Divider, Flex, Form, Rate, Row, Typography } from "antd";
import { DefaultForm } from "../../form/form";
import { UserOutlined } from "@ant-design/icons";
import { formatCurrency } from "../../../utils/utils";
import { FormTextArea } from "../../input/inputs";
import { generateRatingName } from "../../../utils/generators";

interface RatingCandidateModalProps {
  money: number;
}

export default function RatingCandidateModal(props: RatingCandidateModalProps) {
  const { Title, Text } = Typography;
  const [open, setOpen] = useState(true);
  const [form] = Form.useForm();

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const initialValues = {
    rating: [
      {
        name: "quality",
        rating: 0,
      },
      {
        name: "price",
        rating: 0,
      },
      {
        name: "time",
        rating: 0,
      },
      {
        name: "response",
        rating: 0,
      },
      {
        name: "talking",
        rating: 0,
      },
    ],
    comment: "",
  };

  return (
    <>
      <CustomFormModal
        width={1200}
        title="NHÀ TUYỂN DỤNG"
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
        <Row>
          <Col span={24}>
            <Title level={3} type="success" className="text-center">
              CHUYỂN TIỀN THÀNH CÔNG
            </Title>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Flex justify="center">
              <Avatar size={80} icon={<UserOutlined />} />
            </Flex>
          </Col>
        </Row>
        <Row className="mt-[5%]">
          <Col span={24}>
            <Text className="font-bold">
              Mức lương:{" "}
              <Text className="font-normal">{formatCurrency(props.money)}</Text>
            </Text>
          </Col>
        </Row>
        <Divider />
        <DefaultForm
          form={form}
          name="RatingCandidate"
          initialValues={initialValues}
        >
          <Row
            style={{
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            <Form.List name={"rating"}>
              {(fields) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Col span={4} key={key}>
                      <Flex vertical>
                        <Title level={5}>
                          {generateRatingName(
                            form.getFieldValue(["rating", name, "name"]),
                          )}
                        </Title>
                        <Form.Item
                          {...restField}
                          name={[name, "rating"]}
                          rules={[
                            {
                              type: "number",
                            },
                          ]}
                        >
                          <Rate />
                        </Form.Item>
                      </Flex>
                      <Divider type="vertical" />
                    </Col>
                  ))}
                </>
              )}
            </Form.List>
          </Row>
          <Form.Item
            name={"comment"}
            label="Nhận xét"
            rules={[
              {
                type: "string",
                whitespace: true,
              },
            ]}
          >
            <FormTextArea maxLength={500} />
          </Form.Item>
        </DefaultForm>
      </CustomFormModal>
    </>
  );
}
