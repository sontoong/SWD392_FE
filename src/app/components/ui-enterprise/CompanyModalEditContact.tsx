import { EditOutlined } from "@ant-design/icons";
import { IconButton } from "../button/buttons";
import { useState } from "react";
import CustomModal from "../modal/modal";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import {
  MyInput,
} from "../input/inputs";
// import { ENTERPRISE_INFO_TEXT, LANGUAGES } from "../../utils/language";
import { Col, Row, Space } from "antd";
import { CompanyDetail } from "../../models/company";

export default function CompanyModalEditContact() {
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
    registrationDocumentType: Yup.string().required("Loại giấy tờ là bắt buộc"),
    identificationNumber: Yup.number().required("Mã số doanh nghiệp là bắt buộc"),
    taxNumber: Yup.number().required("Mã số thuế là bắt buộc"),
    enterpriseCountry: Yup.string().required("Quốc gia là bắt buộc"),
    address: Yup.string().required("Địa chỉ công ty là bắt buộc"),
  });

  return (
    <>
      <IconButton onClick={showModal} icon={<EditOutlined />} />
      <CustomModal
        title="LIÊN HỆ"
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
              <Row  className="mt-[2rem]">
                <Col span={10}>
                <Field
                    name="companyEmail"
                    component={MyInput}
                    placeholder="Email*"
                />
                </Col>
                <Col span={10} offset={4}>
                <Field
                    name="companyPhone"
                    component={MyInput}
                    placeholder="SĐT*"
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
