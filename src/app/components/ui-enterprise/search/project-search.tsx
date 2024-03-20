import { useState } from "react";
import { Col, Form, Row, Typography } from "antd";
import { DefaultForm } from "../../form/form";
import { EnterpriseProjectSearch } from "../../../models/search";
import { CustomCard } from "../../ui/card";
import { IconButton } from "../../button/buttons";
import { FilterOutlined } from "@ant-design/icons";
import { FormRadioGroup, SearchInput } from "../../input/inputs";

export default function ProjectSearchForm() {
  const [form] = Form.useForm();
  const [showFilter, setShowFilter] = useState(false);

  const { Title } = Typography;

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const initialValues: EnterpriseProjectSearch = {
    input: "",
    display: "all",
    status: "all",
    funding: "all",
  };

  return (
    <CustomCard
      styles={{
        body: { backgroundColor: "#74BA7B", borderRadius: "8px" },
      }}
    >
      <DefaultForm
        form={form}
        name="CandidateSearchForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={initialValues}
      >
        <Row>
          <Col span={22}>
            <Form.Item
              name="input"
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <SearchInput onSearch={() => form.submit()} />
            </Form.Item>
          </Col>
          <Col span={1} offset={1}>
            <IconButton
              style={{
                color: "white",
                backgroundColor: showFilter ? "#58A35F" : "transparent",
              }}
              icon={<FilterOutlined />}
              onClick={() => {
                setShowFilter(!showFilter);
              }}
            />
          </Col>
        </Row>
        {showFilter && (
          <Row>
            <Col span={4} offset={2}>
              <Title level={4} style={{ color: "white" }}>
                Chế độ hiển thị
              </Title>
              <Form.Item
                name="display"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <FormRadioGroup
                  options={display}
                  textStyle={{ color: "white" }}
                />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Title level={4} style={{ color: "white" }}>
                Trạng thái
              </Title>
              <Form.Item
                name="status"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <FormRadioGroup
                  options={status}
                  textStyle={{ color: "white" }}
                />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Title level={4} style={{ color: "white" }}>
                Loại ngân sách
              </Title>
              <Form.Item
                name="funding"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <FormRadioGroup
                  options={funding}
                  textStyle={{ color: "white" }}
                />
              </Form.Item>
            </Col>
          </Row>
        )}
      </DefaultForm>
    </CustomCard>
  );
}

const display = [
  { label: "Tất cả", value: "all" },
  { label: "Công khai", value: "public" },
  { label: "Riêng tư", value: "private" },
];

const status = [
  { label: "Tất cả", value: "all" },
  { label: "Đang mời", value: "hiring" },
  { label: "Đã đóng", value: "closed" },
  { label: "Đang làm", value: "doing" },
];

const funding = [
  { label: "Tất cả", value: "all" },
  { label: "Theo giờ", value: "hourly" },
  { label: "Theo dự án", value: "fixed" },
];
