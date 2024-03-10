import { useState } from "react";
import { AddNewButton } from "../../button/buttons";
import { Col, Form, Row } from "antd";
import { CustomFormModal } from "../../modal/modal";
import { FormInput } from "../../input/inputs";
import { FormSelect } from "../../select/select";
import { nations } from "../../../../constants/testData";
import { OutsideProject } from "../../../models/project";
import { DefaultForm } from "../../form/form";

interface AddOutsideProject {
  project?: OutsideProject;
}

export default function AddOutsideProject(props: AddOutsideProject) {
  console.log(props.project);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const initialValues: AddOutsideProject["project"] = props.project ?? {
    title: "a",
    description: "a",
    jobRole: "a",
    startDate: 0,
    endDate: 0,
    images: [],
    projectProfileImages: [{ image: "", description: "" }],
  };

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <AddNewButton onClick={() => setOpen(true)} />
      <CustomFormModal
        open={open}
        title="Project"
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
          name="EditContact"
          initialValues={initialValues}
        >
          <Form.Item
            name="title"
            label="Tên project"
            rules={[
              {
                type: "string",
                required: true,
              },
            ]}
          >
            <FormInput />
          </Form.Item>
          <Form.Item
            name="jobRole"
            label="Vai trò"
            rules={[
              {
                type: "string",
                required: true,
              },
            ]}
          >
            <FormInput />
          </Form.Item>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item name="nation" label="Múi giờ">
                <FormSelect
                  onChange={() => {}}
                  options={Object.values(nations)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="SĐT"
                rules={[
                  {
                    required: true,
                    type: "number",
                  },
                ]}
              >
                <FormInput />
              </Form.Item>
            </Col>
          </Row>
        </DefaultForm>
      </CustomFormModal>
    </>
  );
}
