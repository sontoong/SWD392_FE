import { useState } from "react";
import { Col, Form, Row, Typography } from "antd";
import DefaultForm from "../../form/form";
import { ProjectSearch } from "../../../models/search";
import { CustomCard } from "../../ui/card";
import { IconButton } from "../../button/buttons";
import { FilterOutlined } from "@ant-design/icons";
import { FormRadioGroup, SearchInput } from "../../input/inputs";
import { FormTreeSelect } from "../../select/select";
import { projectFields } from "../../../../constants/project-field";



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

  const initialValues: ProjectSearch = {
    input: "",
    projectField: "all",
    timeToComplete: "all",
    enterpriseProject: "all",
    funding: "all",
  };

  return (
    <CustomCard
      bodyStyle={{ backgroundColor: "#74BA7B" }}
      headStyle={{ backgroundColor: "#74BA7B" }}
      title={
        <Title
          level={4}
          style={{
            margin: 0,
            textTransform: "uppercase",
            color: "white",
          }}
        >
          Tìm Project
        </Title>
      }
    >
      <DefaultForm
        form={form}
        name="ProjectSearchForm"
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
              <SearchInput onSearch={() => form.submit()}/>
            </Form.Item>
          </Col>
          <Col span={1} offset={1}>
            <IconButton
              style={{ color: "white", backgroundColor: showFilter ? "#58A35F" : "transparent"}}
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
              <Title level={4} style={{color:"white"}}>Chọn lĩnh vực</Title>
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
            <Col span={4} offset={2}>
            <Title level={4} style={{color:"white"}}>Loại ngân sách</Title>
            <Form.Item
                name="funding"
                rules={[
                  {
                    type: "string",
                  },
                ]}
            >
                <FormRadioGroup options={funding} textStyle={{color:"white"}}/>
            </Form.Item>
            </Col>
            <Col span={4} offset={2}>
            <Title level={4} style={{color:"white"}}>Lịch sử khách hàng</Title>
            <Form.Item
                name="enterpriseProject"
                rules={[
                  {
                    type: "string",
                  },
                ]}
            >
                <FormRadioGroup options={enterpriseProject} textStyle={{color:"white"}}/>
            </Form.Item>
            </Col>
            <Col span={4} offset={2}>
            <Title level={4} style={{color:"white"}}>Thời gian project</Title>
            <Form.Item
                name="timeToComplete"
                rules={[
                  {
                    type: "string",
                  },
                ]}
            >
                <FormRadioGroup options={time} textStyle={{color:"white"}}/>
            </Form.Item>
            </Col>
          </Row>
        )}
      </DefaultForm>
    </CustomCard>
  );
}

const time = [
  {label: "Tất cả", value:"all"},
  {label: "Ít hơn 1 tháng", value:"<1 month"},
  {label: "1-3 tháng", value:"1-3 months"},
  {label: "Hơn 3 tháng", value:">3 months"},
]

const enterpriseProject = [
  {label: "Tất cả", value: "all"},
  {label: "Chưa đăng tuyển", value: "none"},
  {label: "Dưới 3 project", value: "<3 projects"},
  {label: "Hơn 3 project", value: ">3 projects"},
]

const funding = [
  {label:"Tất cả", value:"all"},
  {label:"Theo giờ", value:"hourly"},
  {label:"Theo project", value:"fixed"},
]