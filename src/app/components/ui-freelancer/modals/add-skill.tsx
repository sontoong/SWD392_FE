import { useState } from "react";
import { Form } from "antd";
import { AddNewButton } from "../../button/buttons";
import { CustomFormModal } from "../../modal/modal";
import { FreelancerDetail } from "../../../models/user";
import { DefaultForm } from "../../form/form";
import { FormSelect } from "../../select/select";
import { skills } from "../../../../constants/skill";

interface AddSkillProps {
  skills?: FreelancerDetail["skills"];
}
export default function AddSkill(props: AddSkillProps) {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const initialValues: AddSkillProps = props.skills
    ? { skills: props.skills }
    : { skills: [] };

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
        <DefaultForm form={form} name="AddSkill" initialValues={initialValues}>
          <Form.Item
            name="skills"
            label="Kỹ năng"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <FormSelect
              mode="tags"
              style={{ width: "100%" }}
              placeholder="Tags Mode"
              options={skills}
            />
          </Form.Item>
        </DefaultForm>
      </CustomFormModal>
    </>
  );
}
