import { EditOutlined } from "@ant-design/icons";
import { IconButton } from "../button/buttons";
import { useState } from "react";
import { UploadShowIcon } from "../input/upload-input";
import CustomModal from "../modal/modal";
import { Field, Formik } from "formik";
import { EnterpriseInfo } from "../../models/enterprise";
import * as Yup from "yup";
import { Form } from "react-router-dom";
import { MyDateInput, MyInput, MySelectInput } from "../input/inputs";
import { ENTERPRISE_INFO_TEXT, LANGUAGES } from "../../utils/language";
import { Col, Row, Space } from "antd";
import { Countries } from "../../../constants/countries";

export default function EnterpriseModalEditGeneralInfo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(
      LANGUAGES.VIETNAMESE,
    );

    const languageText = ENTERPRISE_INFO_TEXT[selectedLanguage];
    const validate = ENTERPRISE_INFO_TEXT[selectedLanguage];
    
    const handleSubmit = async () => {
      //Cool stuff
    };

    const initialValues: EnterpriseInfo = {
      firstName: "Nguyễn",
      middleName: "Văn",
      lastName: "A",
      dateOfBirth: 1708532861,
      enterpriseCountry: "Việt Nam",
      documentType: "Hộ chiếu",
      enterpriseDocument: "FunnyMemeFrom9GAG.png",
      documentNumber: 33333333333333,
      enterpriseEmail: "CoolMathGame@gmail.com",
      enterprisePhone: "33333333333333",
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
      firstName: Yup.string().required("Tên đầu tiên là bắt buộc"),
      middleName: Yup.string().required("Tên đệm là bắt buộc"),
      lastName: Yup.string().required("Tên cuối cùng là bắt buộc"),
      dateOfBirth: Yup.number()
        .required("Ngày sinh là bắt buộc")
        .typeError("Ngày sinh không hợp lệ"),
      enterpriseCountry: Yup.string().required("Quốc gia doanh nghiệp là bắt buộc"),
      documentType: Yup.string().required("Loại tài liệu là bắt buộc"),
      enterpriseDocument: Yup.string().required("Tài liệu doanh nghiệp là bắt buộc"),
      documentNumber: Yup.number()
        .required("Số tài liệu là bắt buộc")
        .typeError("Số tài liệu không hợp lệ"),
      enterpriseEmail: Yup.string()
        .email("Địa chỉ Email không hợp lệ")
        .required("Địa chỉ Email là bắt buộc"),
      enterprisePhone: Yup.string()
        .matches(/^[0-9]+$/, "Số điện thoại phải chứa chỉ các chữ số")
        .required("Số điện thoại là bắt buộc"),
    });
    
  
    return( 
          <>
            <IconButton onClick={showModal} icon={<EditOutlined/>}/>
            <CustomModal title="Basic Modal" open={isModalOpen} handleCancel={handleCancel} handleOk={handleOk}>
              <UploadShowIcon/>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <Space size={'large'} direction="vertical" className="w-full">
                    <Row>
                      <Col span={6}>
                        <Field
                          name="firstName"
                          component={MyInput}
                          placeholder="Họ *"
                        />
                        </Col>
                        <Col span={6} offset={2}>
                          <Field
                            name="middleName"
                            component={MyInput}
                            placeholder="Tên đệm *"
                          />
                        </Col>
                        <Col span={6} offset={2}>
                          <Field
                            name="lastName"
                            component={MyInput}
                            placeholder="Tên *"
                          />
                        </Col>
                    </Row>
                    <Row>
                          <Col span={24}>
                            <Field
                              name="dateOfBirth"
                              component={MyDateInput}
                              placeholder="Ngày sinh của bạn"
                            />
                          </Col>
                    </Row>
                    <Row>
                          <Col span={15}>
                            <Field
                              name="enterpriseCountry"
                              component={MySelectInput}
                              defaultValue={'VN'}
                              options={Countries}
                              placeholder="Quốc gia"
                            />
                          </Col>
                    </Row>
                  </Space>
                  
                </Form>
              </Formik>
            </CustomModal>
          </>
    )    
}