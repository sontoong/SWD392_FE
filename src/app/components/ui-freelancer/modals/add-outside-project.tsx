import { useState } from "react";
import { AddNewButton } from "../../button/buttons";
import { Checkbox, Col, Form, Row } from "antd";
import { CustomFormModal } from "../../modal/modal";
import { FormInput, FormRangePicker, FormTextArea } from "../../input/inputs";
import { OutsideProject } from "../../../models/project";
import { DefaultForm } from "../../form/form";
import UploadOutsideProjectPicture from "../upload/outside-project-image";

interface AddOutsideProject {
  project?: OutsideProject;
}

export default function AddOutsideProject(props: AddOutsideProject) {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const initialValues: AddOutsideProject["project"] = props.project ?? {
    title: "",
    description: "",
    jobRole: "",
    startEndDate: [0, 0],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/swd392-41e12.appspot.com/o/images%2Fdefault_avatar?alt=media&token=7cf7aeef-800c-40c9-839a-3d1eadfba5c8",
      "https://firebasestorage.googleapis.com/v0/b/swd392-41e12.appspot.com/o/images%2Flogo?alt=media&token=7443eddd-8062-4e02-9ec6-0a2d71d346a9",
    ],
    projectProfileImages: [{ image: "", description: "" }],
  };
  const [haveEndDate, setHaveEndDate] = useState<boolean>(
    Boolean(initialValues.startEndDate[1]),
  );

  const handleSubmit = async (values: typeof initialValues) => {
    const { startEndDate, ...rest } = values;
    let newStartEndDate = startEndDate;
    if (!haveEndDate) {
      newStartEndDate = [startEndDate[0], 0];
    }
    const data = {
      ...rest,
      startEndDate: newStartEndDate,
    };
    console.log("Received values of form: ", data);
    setOpen(false);
    setHaveEndDate(Boolean(initialValues.startEndDate[1]));
  };

  const handleCancel = () => {
    setOpen(false);
    setHaveEndDate(Boolean(initialValues.startEndDate[1]));
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
              form.resetFields();
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
          <Row align={"middle"} gutter={20}>
            <Col>
              {haveEndDate ? (
                <Form.Item
                  name="startEndDate"
                  label="Ngày bắt đầu - Ngày kết thúc"
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
                  <FormRangePicker placeholder={["Bắt đầu", "Kết thúc"]} />
                </Form.Item>
              ) : (
                <Form.Item
                  name="startEndDate"
                  label="Ngày bắt đầu"
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
                >
                  <FormRangePicker
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
                Đang thực hiện
              </Checkbox>
            </Col>
          </Row>
          <Form.Item
            name="description"
            label="Miêu tả"
            extra={
              <div className="mt-5">
                Viết mô tả cụ thể về những gì bạn đã làm trong project này. Theo
                3 ý dưới đây: 1/ Mô tả mục tiêu khách hàng của bạn. Ví dụ: Khách
                hàng của tôi muốn viết ứng dụng thương mại điện tử. 2/ Mô tả chi
                tiết về project của bạn để hoàn thành mục tiêu mà khách hàng đưa
                ra. 3/ Kết quả project.
              </div>
            }
            rules={[
              {
                type: "string",
                required: true,
              },
            ]}
          >
            <FormTextArea maxLength={100} rows={10} />
          </Form.Item>
          <Form.Item
            name="images"
            label="Hình ảnh project"
            rules={[
              {
                type: "string",
                required: false,
              },
            ]}
            extra={
              <div className="mt-5">
                <div>*Định dạng tệp được chấp nhận: .jpg, .png</div>
                <div>*Kích thước tệp phải nhỏ hơn 4M</div>
              </div>
            }
          >
            <UploadOutsideProjectPicture />
          </Form.Item>
          {/* <Form.Item
            name="projectProfileImages"
            label="Hồ sơ project"
            rules={[
              {
                type: "string",
                required: false,
              },
            ]}
            extra={
              <div className="mt-5">
                <div>*Định dạng tệp được chấp nhận: .jpg, .png</div>
                <div>*Kích thước tệp phải nhỏ hơn 4M</div>
              </div>
            }
          >
            <UploadOutsideProjectPicture />
          </Form.Item> */}
        </DefaultForm>
      </CustomFormModal>
    </>
  );
}
