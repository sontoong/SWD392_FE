import { Button, Divider, Radio, Select, Space } from "antd";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { MyInput, MyInputPassword } from "../components/input/inputs";
import MyCarousel from "../components/ui/carousel";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  SIGNUP_ERROR_MESSAGES,
  LANGUAGES,
  LANGUAGE_OPTIONS,
  SIGNUP_PAGE_TEXT,
} from "../utils/language";
import { useImageFetcher } from "../hooks/useGetImg";
import { GoogleLoginButton } from "../components/button/google-button";
import Title from "antd/es/typography/Title";
import { LeftOutlined } from "@ant-design/icons";

export interface SignupFormValues {
  accountType: "Nhà tuyển dụng" | "Nguời ứng tuyển";
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  middleName: string;
  lastName: string;
  address: string;
  nation: string;
  phone: string;
}

interface SelectCustomProps {
  onChangeLanguage: (value: string) => void;
}

const SelectCustom = ({ onChangeLanguage }: SelectCustomProps) => {
  const handleChange = (value: string) => {
    onChangeLanguage(value);
  };

  return (
    <Space wrap>
      <Select
        bordered={false}
        defaultValue={LANGUAGES.VIETNAMESE}
        style={{ width: 100 }}
        onChange={handleChange}
        options={LANGUAGE_OPTIONS}
      />
    </Space>
  );
};

function SignupPage() {
  const navigate = useNavigate();
  const { state, handleLogin } = useAuth();
  const logo = useImageFetcher("logo");
  const [selectedLanguage, setSelectedLanguage] = useState(
    LANGUAGES.VIETNAMESE,
  );

  const initialValues: SignupFormValues = {
    accountType: "Nguời ứng tuyển",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    firstName: "",
    middleName: "",
    lastName: "",
    nation: "",
    phone: "",
  };

  const changeLanguage = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleSubmit = async (values: SignupFormValues) => {
    handleLogin(values, navigate);
  };

  const languageText = SIGNUP_PAGE_TEXT[selectedLanguage];
  const validate = SIGNUP_ERROR_MESSAGES[selectedLanguage];

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(validate.email?.invalid)
      .required(validate.email?.required),
    password: Yup.string()
      .min(4, validate.password?.length)
      .required(validate.password?.required),
    confirmPassword: Yup.string()
      .min(4, validate.password?.length)
      .required(validate.password?.required),
    address: Yup.string().required(validate.address?.required),
    firstName: Yup.string().required(validate.firstName?.required),
    middleName: Yup.string().required(validate.middleName?.required),
    lastName: Yup.string().required(validate.lastName?.required),
    nation: Yup.string().required(validate.nation?.required),
    phone: Yup.number()
      .typeError(validate.phone?.invalid || "")
      .integer(validate.phone?.invalid)
      .positive(validate.phone?.invalid)
      .required(validate.phone?.required),
  });

  return (
    <div className="flex bg-greenHome">
      <div className="w-full overflow-auto bg-white pb-5 sm:w-[35%] sm:rounded-br-xl sm:rounded-tr-xl md:h-screen">
        <div className="float-right">
          <SelectCustom onChangeLanguage={changeLanguage} />
        </div>
        <div className="float-left pl-3 pt-3">
          <Link to="/">
            <Space>
              <LeftOutlined />
              <span>Về trang chủ</span>
            </Space>
          </Link>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col items-center justify-center space-y-5">
            <section className="w-[70%] space-y-5 ">
              <div className="mb-12 ml-1 mt-[20%] ">
                <h1 className="text-3xl">{languageText.title}</h1>
                <div className="mt-3 w-full">
                  Đã có tài khoản? Đăng nhập tại{" "}
                  <Link to={"/login"} className="text-blue-500">
                    đây
                  </Link>
                </div>
              </div>
              <div>
                <Title level={5}>Bạn muốn tạo tài khoản cho</Title>
                <Radio.Group
                  name="accountType"
                  onChange={() => {}}
                  defaultValue={initialValues.accountType}
                >
                  <Radio.Button value="Nguời ứng tuyển">
                    Freelancer
                  </Radio.Button>
                  <Radio.Button value="Nhà tuyển dụng">Enterprise</Radio.Button>
                </Radio.Group>
              </div>
              <Field
                name="email"
                component={MyInput}
                placeholder={languageText.emailPlaceholder}
              />
              <Field
                name="password"
                component={MyInputPassword}
                placeholder={languageText.passwordPlaceholder}
              />
              <Field
                name="confirmPassword"
                component={MyInputPassword}
                placeholder={languageText.confirmPasswordPlaceholder}
              />
              <Space>
                <Field
                  name="firstName"
                  component={MyInput}
                  placeholder={languageText.firstNamePlaceholder}
                />
                <Field
                  name="middleName"
                  component={MyInput}
                  placeholder={languageText.middleNamePlaceholder}
                />
                <Field
                  name="lastName"
                  component={MyInput}
                  placeholder={languageText.lastNamePlaceholder}
                />
              </Space>
              <Field
                name="address"
                component={MyInput}
                placeholder={languageText.addressPlaceholder}
              />
              <Field
                name="nation"
                component={MyInput}
                placeholder={languageText.nationPlaceholder}
              />
              <Field
                name="phone"
                component={MyInput}
                placeholder={languageText.phonePlaceholder}
              />
            </section>

            <Button
              type="primary"
              htmlType="submit"
              className="text-md h-11 w-[70%] bg-greenHome font-bold"
              loading={state.isFetching}
            >
              {languageText.signupButton}
            </Button>
            {state.error && selectedLanguage === LANGUAGES.VIETNAMESE && (
              <article className="text-red-500">{state.displayError}</article>
            )}

            {state.error && selectedLanguage !== LANGUAGES.VIETNAMESE && (
              <article className="text-red-500">
                Login Failed, Please try later!
              </article>
            )}
          </Form>
        </Formik>
        <Divider>hoặc</Divider>
        <div className="flex justify-center">
          <GoogleLoginButton />
        </div>
      </div>
      <div className="hidden sm:block sm:w-[65%]">
        <img src={logo} alt="logo" className="absolute right-1 w-[100px]" />
        <MyCarousel />
      </div>
    </div>
  );
}

export default SignupPage;
