import { useState } from "react";
import { Form } from "antd";
import { AddNewButton, EditButton } from "../../button/buttons";
import { FormInput, FormRangePicker, FormTextArea } from "../../input/inputs";
import { CustomFormModal } from "../../modal/modal";
import { Education } from "../../../models/user";
import { DefaultForm } from "../../form/form";

interface AddEducationProps {
  education?: Education;
  edit: boolean;
}
export default function AddEducation(props: AddEducationProps) {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const initialValues: AddEducationProps["education"] = props.education ?? {
    school: "",
    degree: "",
    startEndYear: [0, 0],
    description: "",
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
      {props.edit ? (
        <EditButton onClick={() => setOpen(true)} />
      ) : (
        <AddNewButton onClick={() => setOpen(true)} />
      )}
      <CustomFormModal
        open={open}
        title="Học vấn"
        onCancel={() => {
          handleCancel();
          form.resetFields();
        }}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              handleSubmit(values);
              form.resetFields();
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <DefaultForm
          form={form}
          name={props.edit ? "EditEducation" : "AddEducation"}
          initialValues={initialValues}
        >
          <Form.Item
            name="school"
            label="Trường"
            rules={[
              {
                type: "string",
                required: true,
                whitespace: true,
              },
            ]}
          >
            <FormInput />
          </Form.Item>
          <Form.Item
            name="degree"
            label="Trình độ"
            rules={[
              {
                type: "string",
                required: true,
                whitespace: true,
              },
            ]}
          >
            <FormInput />
          </Form.Item>
          <Form.Item
            name="startEndYear"
            label="Từ năm - đến năm"
            rules={[
              {
                required: true,
              },
              () => ({
                validator(_, value) {
                  if (value[0] === 0) {
                    return Promise.reject(
                      new Error("Vui lòng chọn năm bắt đầu"),
                    );
                  }
                  if (value[1] === 0) {
                    return Promise.reject(
                      new Error("Vui lòng chọn năm kết thúc"),
                    );
                  }
                  return Promise.resolve();
                },
              }),
            ]}
            getValueFromEvent={(e: any) => {
              const formatDates = e?.map((i: any) => i.valueOf());
              return formatDates;
            }}
          >
            <FormRangePicker picker="month" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Miêu tả"
            rules={[
              {
                type: "string",
                required: true,
                whitespace: true,
              },
            ]}
          >
            <FormTextArea maxLength={250} />
          </Form.Item>
        </DefaultForm>
      </CustomFormModal>
    </>
  );
}
