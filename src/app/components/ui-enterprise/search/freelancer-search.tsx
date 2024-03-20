import { useState } from "react";
import { Col, Form, Row, Typography } from "antd";
import { DefaultForm } from "../../form/form";
import { FreelancerSearch } from "../../../models/search";
import { CustomCard } from "../../ui/card";
import { IconButton } from "../../button/buttons";
import { FilterOutlined } from "@ant-design/icons";
import { FormRadioGroup, SearchInput } from "../../input/inputs";
import { FormSelect, FormTreeSelect } from "../../select/select";
import { projectFields } from "../../../../constants/project-field";
import { languages } from "../../../../constants/language";
import { nations } from "../../../../constants/testData";

export default function FreelancerSearchForm() {
  const [form] = Form.useForm();
  const [showFilter, setShowFilter] = useState(false);

  const { Title } = Typography;

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const initialValues: FreelancerSearch = {
    input: "",
    desiredSalary: "all",
    experienceLevel: "all",
    language: "all",
    lastLogIn: "all",
    nation: "all",
  };

  return (
    <CustomCard
      title={
        <Title
          level={4}
          style={{
            margin: 0,
            textTransform: "uppercase",
            color: "white",
          }}
        >
          Tìm Freelancer
        </Title>
      }
      styles={{
        header: { backgroundColor: "#74BA7B" },
        body: { backgroundColor: "#74BA7B" },
      }}
    >
      <DefaultForm
        form={form}
        name="FreelancerSearchForm"
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
            <Col span={4}>
              <Col>
                <Title level={4} style={{ color: "white" }}>
                  Chọn lĩnh vực
                </Title>
                <Form.Item
                  name="projectField"
                  rules={[
                    {
                      type: "string",
                    },
                  ]}
                >
                  <FormTreeSelect treeData={Object.values(projectFields)} />
                </Form.Item>
              </Col>
              <Col>
                <Title level={4} style={{ color: "white" }}>
                  Địa điểm
                </Title>
                <Form.Item
                  name="nation"
                  rules={[
                    {
                      type: "string",
                    },
                  ]}
                >
                  <FormSelect options={Object.values(nations)} />
                </Form.Item>
              </Col>
              <Col>
                <Title level={4} style={{ color: "white" }}>
                  Ngôn ngữ giao tiếp
                </Title>
                <Form.Item
                  name="language"
                  rules={[
                    {
                      type: "string",
                    },
                  ]}
                >
                  <FormSelect options={Object.values(languages)} />
                </Form.Item>
              </Col>
            </Col>
            <Col span={4} offset={2}>
              <Title level={4} style={{ color: "white" }}>
                Chi phí/giờ
              </Title>
              <Form.Item
                name="desiredSalary"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <FormRadioGroup
                  options={salary}
                  textStyle={{ color: "white" }}
                />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Title level={4} style={{ color: "white" }}>
                Kinh nghiệm
              </Title>
              <Form.Item
                name="experienceLevel"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <FormRadioGroup
                  options={experience}
                  textStyle={{ color: "white" }}
                />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Title level={4} style={{ color: "white" }}>
                Lần truy cập gần đây
              </Title>
              <Form.Item
                name="lastLogIn"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <FormRadioGroup
                  options={login}
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

const salary = [
  { label: "Tất cả", value: "all" },
  { label: "Dưới 100K VND", value: "<100K" },
  { label: "100K-200K VND", value: "100K-200K" },
  { label: "200K-500K VND", value: "200K-500K" },
  { label: "Trên >500K VND", value: ">500K" },
];

const login = [
  { label: "Tất cả", value: "all" },
  { label: "Trong vòng 2 tuần", value: "2 weeks" },
  { label: "Trong vòng 1 tuần", value: "1 month" },
  { label: "Trong vòng 2 tháng", value: "2 months" },
];

const experience = [
  { label: "Mọi kinh nghiệm", value: "all" },
  { label: "1-2 năm", value: "junior" },
  { label: "2-5 năm", value: "senior" },
  { label: "Hơn 5 năm", value: "expert" },
];
