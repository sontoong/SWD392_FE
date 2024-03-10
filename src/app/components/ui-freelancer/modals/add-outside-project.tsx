import { useState } from "react";
import { AddNewButton, EditButton } from "../../button/buttons";
import { Checkbox, Col, Form, Row } from "antd";
import { CustomFormModal } from "../../modal/modal";
import { FormInput, FormRangePicker, FormTextArea } from "../../input/inputs";
import { OutsideProject } from "../../../models/project";
import { DefaultForm } from "../../form/form";
import { UploadOPImages } from "../upload";

interface AddOutsideProject {
  edit: boolean;
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
    images: [],
    projectDocumentImages: [{ image: { name: "" }, description: "" }],
  };
  const [haveEndDate, setHaveEndDate] = useState<boolean>(
    Boolean(initialValues.startEndDate[1]),
  );
  const [images, setImages] = useState<OutsideProject["images"]>(
    initialValues.images,
  );

  const handleSubmit = async (values: typeof initialValues) => {
    const { startEndDate, ...rest } = values;
    let newStartEndDate = startEndDate;
    if (!haveEndDate) {
      newStartEndDate = [startEndDate[0], 0];
    }
    const data: AddOutsideProject["project"] = {
      ...rest,
      startEndDate: newStartEndDate,
      images: images,
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
      {props.edit ? (
        <EditButton onClick={() => setOpen(true)} />
      ) : (
        <AddNewButton onClick={() => setOpen(true)} />
      )}
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
                <p>
                  Viết mô tả cụ thể về những gì bạn đã làm trong project này.
                  Theo 3 ý dưới đây:
                </p>
                <p>
                  1/ Mô tả mục tiêu khách hàng của bạn. Ví dụ: Khách hàng của
                  tôi muốn viết ứng dụng thương mại điện tử.
                </p>
                <p>
                  2/ Mô tả chi tiết về project của bạn để hoàn thành mục tiêu mà
                  khách hàng đưa ra.
                </p>
                <p>3/ Kết quả project.</p>
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
            label="Hình ảnh project (nếu có)"
            rules={[
              {
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
            <UploadOPImages setImages={setImages} />
          </Form.Item>
          {/* <Form.Item
            name="projectDocumentImages"
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
            <UploadOPDocuments setDocument={setDocumentImages} />
          </Form.Item> */}
        </DefaultForm>
      </CustomFormModal>
    </>
  );
}
