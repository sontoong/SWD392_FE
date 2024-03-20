import { useState } from "react";
import { Checkbox, Col, Form, Row } from "antd";
import { AddNewButton, EditButton } from "../../button/buttons";
import { FormInput, FormRangePicker, FormTextArea } from "../../input/inputs";
import { CustomFormModal } from "../../modal/modal";
import { Experience } from "../../../models/user";
import { DefaultForm } from "../../form/form";
import { nations } from "../../../../constants/testData";
import { FormSelect } from "../../select/select";

interface AddExperienceProps {
  experience?: Experience;
  edit: boolean;
}
export default function AddExperience(props: AddExperienceProps) {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const initialValues: AddExperienceProps["experience"] = props.experience ?? {
    company: "",
    jobRole: "",
    nation: "",
    startEndYear: [0, 0],
    description: "",
  };
  const [haveEndDate, setHaveEndDate] = useState<boolean>(
    Boolean(initialValues.startEndYear[1]),
  );

  const handleSubmit = async (values: typeof initialValues) => {
    const { startEndYear, ...rest } = values;
    let newStartEndDate = startEndYear;
    if (!haveEndDate) {
      newStartEndDate = [startEndYear[0], 0];
    }
    const data: AddExperienceProps["experience"] = {
      ...rest,
      startEndYear: newStartEndDate,
    };
    console.log("Received values of form: ", data);
    setOpen(false);
    setHaveEndDate(Boolean(initialValues.startEndYear[1]));
  };

  const handleCancel = () => {
    setOpen(false);
    setHaveEndDate(Boolean(initialValues.startEndYear[1]));
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
        title="Kinh nghiệm"
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
          name={props.edit ? "EditExperience" : "AddExperience"}
          initialValues={initialValues}
        >
          <Form.Item
            name="company"
            label="Công ty"
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
            name="jobRole"
            label="Chức năng"
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
          <Form.Item name="nation" label="Quốc gia">
            <FormSelect
              options={Object.values(nations).filter(
                (nation) => nation.value !== "all",
              )}
            />
          </Form.Item>
          <Row align={"middle"} gutter={20}>
            <Col span={14}>
              {haveEndDate ? (
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
                            new Error("Vui lòng chọn ngày bắt đầu"),
                          );
                        }
                        if (value[1] === 0) {
                          return Promise.reject(
                            new Error("Vui lòng chọn ngày kết thúc"),
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
                  <FormRangePicker
                    placeholder={["Bắt đầu", "Kết thúc"]}
                    picker="month"
                  />
                </Form.Item>
              ) : (
                <Form.Item
                  name="startEndYear"
                  label="Từ năm"
                  rules={[
                    {
                      required: true,
                    },
                    () => ({
                      validator(_, value) {
                        if (value[0] === 0) {
                          return Promise.reject(
                            new Error("Vui lòng chọn ngày bắt đầu"),
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
                  getValueProps={(e: number[]) => ({
                    value: [e[0], 0],
                  })}
                >
                  <FormRangePicker
                    picker="month"
                    placeholder={["Bắt đầu", "Bây giờ"]}
                    allowEmpty={[false, true]}
                    disabled={[false, true]}
                  />
                </Form.Item>
              )}
            </Col>
            <Col>
              <Checkbox
                checked={!haveEndDate}
                onChange={() => setHaveEndDate((prev) => !prev)}
              >
                Tôi đang làm việc tại đây
              </Checkbox>
            </Col>
          </Row>
          <Form.Item
            name="description"
            label="Miêu tả"
            rules={[
              {
                type: "string",
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
