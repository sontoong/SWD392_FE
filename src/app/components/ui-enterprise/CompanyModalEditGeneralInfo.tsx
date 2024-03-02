import { EditOutlined } from "@ant-design/icons";
import { IconButton } from "../button/buttons";
import { useState } from "react";
import { UploadShowIcon, UploadShowImage } from "../input/upload-input";
import CustomModal from "../modal/modal";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { Form } from "react-router-dom";
import {
  MyInput,
  MySelectInput,
  MySelectSkillFieldInput,
  MyTextArea,
} from "../input/inputs";
// import { ENTERPRISE_INFO_TEXT, LANGUAGES } from "../../utils/language";
import { Col, Row, Space } from "antd";
import { IdDocuments } from "../../../constants/id-documents";
import { CompanyDetail } from "../../models/company";
import { skills } from "../../../constants/skill";

export default function CompanyModalEditGeneralInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //   const [selectedLanguage, setSelectedLanguage] = useState(
  //     LANGUAGES.VIETNAMESE,
  //   );

  //   const languageText = ENTERPRISE_INFO_TEXT[selectedLanguage];
  //   const validate = ENTERPRISE_INFO_TEXT[selectedLanguage];

  const handleSubmit = async () => {
    //Cool stuff
  };

  const initialValues: CompanyDetail = {
    companyName: "FPT Software",
    website: "http://domainexpansion.com",
    videoLink: "https://youtu.be/dQw4w9WgXcQ?si=kCbyzyW8_XaVT8-j",
    companySize: "10-20",
    introduction:
      "This is the place for cooking, like Gordon's grilled cheese sandwich.",
    industryFields: [
      {
        label: "name",
        value: "name",
        skills: [
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
        ],
      },
      {
        label: "name",
        value: "name",
        skills: [
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
          {
            label: "Front-end Developer",
            value: "Front-end Developer",
          },
        ],
      },
    ],
    companyDocument: "FunnyMemeFrom9GAG.png",
    registrationDocumentType: "Giấy phép ĐKKD",
    identificationNumber: 333333333333333,
    companyCountry: "Việt Nam",
    taxNumber: 33333333333333,
    address: "Đường D1, Đ. D1, Phường Tân Phú, Quận 9, Hồ Chí Minh, Việt Nam",
    companyEmail: "CoolMathGame@gmail.com",
    companyPhone: "33333333333333",
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("Tên công ty là bắt buộc"),
    companySize: Yup.string().required("Qui mô công ty là bắt buộc"),
    website: Yup.string().url("Địa chỉ trang web không hợp lệ"),
    videoLink: Yup.string().url("Đường dẫn video không hợp lệ"),
    introduction: Yup.string().required("Miêu tả là bắt buộc"),
    industryFields: Yup.array()
      .of(
        Yup.object().shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
          skills: Yup.array().of(
            Yup.object().shape({
              label: Yup.string().required(),
              value: Yup.string().required(),
            })
          ),
        })
      )
      .required("Vui lòng chọn ít nhất một ngành nghề"),
    // Add validation for other fields as needed
  });

  return (
    <>
      <IconButton onClick={showModal} icon={<EditOutlined />} />
      <CustomModal
        title="THÔNG TIN CHUNG"
        open={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Space size={"large"} direction="vertical" className="w-full">
              <UploadShowIcon />
              <UploadShowImage />
              <Row>
                <Col span={10}>
                  <Field
                    name="companyName"
                    component={MyInput}
                    placeholder="Tên công ty*"
                  />
                </Col>
                <Col span={10} offset={4}>
                  <Field
                    name="companySize"
                    component={MySelectInput}
                    defaultValue={"passport"}
                    options={IdDocuments}
                    placeholder="Qui mô công ty*"
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Field
                    name="website"
                    component={MyInput}
                    placeholder="Trang công ty*"
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Field
                    name="videoLink"
                    component={MyInput}
                    placeholder="Video công ty*"
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                    <Field
                        name="introduction"
                        component={MyTextArea}
                        placeholder="Miêu tả*"
                    />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                    <Field
                    name="industryFields"
                    component={MySelectSkillFieldInput}
                    defaultValue={initialValues.industryFields.map(field => field.value)}
                    options={skills}
                    placeholder="Ngành nghề*"
                  />
                </Col>
              </Row>
            </Space>
          </Form>
        </Formik>
      </CustomModal>
    </>
  );
}
